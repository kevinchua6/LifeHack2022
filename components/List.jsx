import React from "react";
import Link from "next/link";

const Sidebar = ({ list }) => {
  console.log(list);
  return (
    <div className="list">
      {list?.map((x) => (
        <div key={x.properties.ID} className="list-item">
          <p>
            {x.properties.Name} {Math.round(x.distance)}m away
          </p>
          <Link href={x.properties.Directions}>{x.properties.Location}</Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
