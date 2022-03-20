import React from "react";

export const Display = () => {
  const arr = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const arr2 = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div>
      <h2>Mobile Operating Syatem</h2>
      <ul>
        {arr.map((e) => (
          <li> {e} </li>
        ))}
      </ul>

      <h2>Mobile Manufacturer</h2>
      <ul>
        {arr2.map((e) => (
          <li> {e} </li>
        ))}
      </ul>
    </div>
  );
};
