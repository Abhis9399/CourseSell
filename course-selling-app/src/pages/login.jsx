import React from "react";
import Footer from '../component/footer';

function Login(){
    return(
        <div style={{backgroundColor:' #e6ffff' , height:'100vh'}} >

<div className="form-container" style={{height:'100vh'}}>
<h2 style={{fontWeight:'bold', fontSize:'70px' }}>Welcome Back!</h2>

<div className="left_box">
<img  src="/images/login.png" alt=""/>
</div>
<div className="right_box">
<div className="text_FormContact">
<form action="#" method="post" className="formContact"> 
			<div className="form-group">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div className="form-group">
				<label for="password">Password</label>
				<input id="message" name="message" required />
			</div>
		  <button style={{marginTop:'10%'}} >Login</button>

          <div style={{marginTop:'8%', textAlign:'center'}}>
          <a>Forgot Password?</a>
          </div>
          
                </form>
</div>
</div>
</div>

<Footer />
        </div>
    );
}

export default Login;