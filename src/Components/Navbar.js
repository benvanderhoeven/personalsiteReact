import {createRoot} from "react-dom/client";
import React, { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import "./Style.css";

const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
  </div>
  );
}
export default Navbar