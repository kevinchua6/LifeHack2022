import React from "react";

const List = ({ list }) => {
  return (
    <div className="list">
      {list.map((x) => (
        <div key={x.id} className="list-item">
          <p>{x.address}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
