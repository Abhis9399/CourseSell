import React from "react";

function Payment(){
    return(
              <div style={{backgroundColor:' #e6ffff' , height:'120vh'}} >
              
            

<div className="form-container" style={{height:'100vh'}}>
<h2 style={{fontWeight:'bold', fontSize:'70px' }}>Payment Details!</h2>


<div className="abhishekImg">
              <img  src="./images/abhishek.jpg" alt="" />
              <span> Abhishek Dahiwal</span>
              </div>
             


<div className="left_box">


<div>
<span style={{fontWeight:'bold'}}>The Complete Guide To Starting Up:<br /> Hindi</span> <br/>

<hr/>
<span> What you'll get inside the course?
<br/>
<li>8 Modules<br/> </li>
<li>Module Notes<br/> </li>
<li>Practical Assignments<br/> </li>
<li>Certificate of Completion<br/> </li>

<hr/>
Fill in your info and proceed to make the payment.<br/>
✅ You will receive an email with the course details within 5 minutes along with a WhatsApp confirmation.<br/>
✅ 14-Day money-back guarantee!<br/>

✅ 44,127+ have taken this course.<br/>

<hr/>
Contact Us:<br/>
 abku@07.com<br/>
+917000951267<br/>
 </span>

</div>
</div>
<div className="right_box">
<div className="text_FormContact">
<form action="#" method="post" className="formContact"> 
			<div className="form-group1">
				<label for="name">Name</label>
				<input type="text" id="name" name="name" required />
			</div>
			<div className="form-group1">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div className="form-group1">
				<label for="phoneNumber">Phone Number</label>
				<input  type="number" id="phoneNumber" name="phoneNumber" required />
			</div>

			<div className="form-group1">
				<label for="phoneNumber">Pay for Unlimited Lifetime <br/> Access to the Course</label>
				<input  style={{fontWeight:'bold'}} type="text" id="price" name="price"  required value="₹ 999.00" />
			</div>
           
		
          
                </form>
</div>
</div>
</div>

<img style={{width:'200px', marginLeft:'72%'}} src="./images/upi.png" alt=""/>

<div className="Payment_Pay">
            <button style={{marginTop:'2%'}} >Pay ₹ 999.00</button>
            </div>


        </div>
    );
}


export default Payment;