import React from "react";
import "./ContactUs.css"
import imgae_5 from "../../assets/images/image5.jpeg"
const ContactUs = () =>{
    const customBGStyle = {
        background:`white url(${imgae_5}) no-repeat bottom`
    }
    return(
        <div className="contact-section" style={customBGStyle}>
            <div className="contact-div">
                <h2>Contact Us</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name"/><br/>
                    <input type="email" placeholder="Your Email"/><br/>
                    <input type="text" placeholder="Your Name"/><br/>
                    <textarea cols="30" placeholder="Description"  rows="4"/><br/>
                    <input type="submit" className="submit-btn"/>
                </form>
            </div>
        </div>
    )
}
export default ContactUs
