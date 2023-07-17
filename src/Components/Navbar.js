import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
// import { Component } from "react";
import "./navbar.css";
import { useState } from "react";


const Navbar = () => {

   const [name, setState] = useState(false)

  const  handleClick = () => {
        setState(current => !current )
    }

   return (
   
        <nav className="nav">
            <h2 className="nav-logo">
              omnigpt <i className="fa fa-arrow-up heart" ></i> 
            </h2>

            <div className="menu-icon" onClick={handleClick}>
                <i className = {name ? "fa fa-times" : "fa fa-bars"} style = {name ?{color: "black"} : {color: "white"}}></i>
            </div>

            <div className = {name ? "nav-menu active":"nav-menu"}>
            {MenuItem.map((item,index) => {
                return (
                          
                       <li className="nav-list" key = {index}>
                            <Link  className = {item.cName}  to = {item.url}>
                                {item.title}
                            </Link>
                            </li>
                    
                );
            })}
            
        </div>
              
              </nav>

)
        }
export default Navbar;