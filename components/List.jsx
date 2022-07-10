import React from "react";

const Sidebar = ({ list }) => {
  console.log(list);
  return (
    <div className="list">
      {list?.map((x) => (
        <div key={x.properties.ID} className="list-item">
          <p>{x.properties.Name}</p>
          <p>{x.properties.Location}</p>
          <p>{x.distance}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
