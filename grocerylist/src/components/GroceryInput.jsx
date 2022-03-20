import React, { useState } from "react";
import { GroceryList } from "./GroceryList";
import { v4 as uuid } from "uuid";

export const GroceryInput = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const add = () => {
    // const paylod = {
    //   title: title,
    //   status: false,
    //   Id: uuid(),
    // };
    setData([...data, title]);
    // console.log(data);
  };

  const handleDelete = (id) => {
    console.log("it is deleted ");
    setData((item) => {
      return item.filter((arrele, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your items"
          onChange={(e) => setTitle(e.target.value)} //12
        />
        {/* <h1>{title}</h1> */}
        <button onClick={add}>Add</button>
      </div>
      <div>
        {data.map((evant, index) => (
          <GroceryList
            data={evant}
            key={index}
            id={index}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
