import React from "react";
import Footer from '../component/footer';
function SignUp(){

    return(
        <div style={{backgroundColor:' #e6ffff' , height:'100vh'}} >

<div className="form-container" style={{height:'100vh'}}>
<h2 style={{fontWeight:'bold', fontSize:'70px' }}>Sign-Up</h2>

<div className="left_box">
<img  src="/images/courses4.jfif" alt=""/>
</div>
<div className="right_box">
<div className="text_FormContact">
<form action="#" method="post" className="formContact"> 
                <div className="form-group">
				<label for="name">Enter Your Name</label>
				<input  type="text" id="name" name="name" required />
			</div>
			<div className="form-group">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div className="form-group">
				<label for="password">Password</label>
				<input id="message" name="message" required />
			</div>
			<div className="form-group">
				<label for="Confirm_password">Confirm Your Password</label>
				<input id="message" name="message" required />
			</div>
		  <button style={{marginTop:'10%'}} >Get OTP!</button>
                </form>
</div>
</div>
</div>

<Footer />
        </div>
    );
}

export default SignUp;