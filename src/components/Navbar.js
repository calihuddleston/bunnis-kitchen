import React from "react";
import logo from "../assets/logo.png"

export default function Header() {
  return (
     <div>
       <nav>
        <img src={logo} height="100px"></img>
         <ul>
          <li>
             <a href="#home">Home</a>
          </li>
           <li>
             <a href="#menu">Menu</a>
           </li>
          <li>
            <a href="#contact">Contact</a>
           </li>
           <li>
             <a href="#order">Order</a>
          </li>
          <li>
            <a href="#download">Download Menu</a>
          </li>
        </ul>
       </nav>
    </div>
  );
}
