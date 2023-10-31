import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { useState } from "react";


function Contact(){

    const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }

    return(
        <div>
        <Header />
            <div className="image1">
                <img src="/images/web-design.jpg" alt="" />
            </div>

            <div className="form-container" style={{height:'100vh'}}>

            <h2 style={{fontWeight:'bold'}}>Contact Us {heading}</h2>
            <div className="text_inputContact">
            
                <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name} 
      />
      <button onClick={handleClick}>Submit</button>

            </div>
               



<div className="text_FormContact">
<form action="#" method="post" className="formContact"> 
                <div className="form-group">
				<label for="name">Name</label>
				<input  type="text" id="name" name="name" required />
			</div>
			<div className="form-group">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div className="form-group">
				<label for="message">Message</label>
				<textarea id="message" name="message" required></textarea>
			</div>
		  <button style={{marginTop:'10%'}} >Submit</button>
                </form>
</div>
               
            </div>

            <Footer />
        </div>
    );
}

export default Contact;