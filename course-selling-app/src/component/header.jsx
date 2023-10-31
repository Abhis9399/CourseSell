import React from "react";
import { Link } from "react-router-dom";

// import {Link} from "react-router-dom";

function header(){
    return(
     <header>
     <div className="left_head">
      <a><img src="./images/stock logo.png" alt="image" /></a>
     </div>
     <div className="right_head">
     <Link to="/" className="text_head">Home</Link>
        <Link to="/Courses" className="text_head">Courses</Link>
        <Link to="/contact" className="text_head">Contact</Link>
        <Link to="/login" className="text_head">LogIn</Link>
        <Link to="/signup" className="text_head">SignUp</Link>
     </div>
     </header>
    );
}

export default header;