import React from "react";

export default function Meme() {
  return (
    <div className="meme--wrapper">
      <div className="meme--form">
        <input className="meme--input top"type="txt" />
        <input className="meme--input bottom"type="txt" />
      </div>
      <button className="meme--btn"> Get a new meme image 🖼</button>
    </div>
  );
}
