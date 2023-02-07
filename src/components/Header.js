import React from "react";
import logo from "../img/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} />
      <h2>Header component</h2>
      <h4>React Course - Project 3</h4>
    </header>
  );
}
