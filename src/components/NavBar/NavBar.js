import React from "react";
import "./NavBar.css"
import {Link,NavLink} from "react-router-dom"
import image_5 from "../../assets/images/image5.jpeg"
const NavBar = () =>{
    const headerBg = {
        background:`darkred url(${image_5}) no-repeat center`
    }
    return(
        <div>
            <header className="web-header" style={headerBg}>
                <h2>
                    xpertiks tachno portal
                </h2>
            </header>
            <nav className="main-nav">
                <NavLink exact activeStyle={{background: "linear-gradient(45deg,darkslategray,darkred)",borderRadius:"20px"}} to="/" className="nav-link">Home</NavLink>
                <NavLink exact activeStyle={{background: "linear-gradient(45deg,darkslategray,darkred)",borderRadius:"20px"}} to="/news" className="nav-link">News</NavLink>
                <NavLink exact activeStyle={{background: "linear-gradient(45deg,darkslategray,darkred)",borderRadius:"20px"}} to="/gallery" className="nav-link">Gallery</NavLink>
                <NavLink exact activeStyle={{background: "linear-gradient(45deg,darkslategray,darkred)",borderRadius:"20px"}} to="/about" className="nav-link">About Us</NavLink>
                <NavLink exact activeStyle={{background: "linear-gradient(45deg,darkslategray,darkred)",borderRadius:"20px"}} to="/contact" className="nav-link">Contact Us</NavLink>
            </nav>
        </div>
    )
}
export default NavBar
