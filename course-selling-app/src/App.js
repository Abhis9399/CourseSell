import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Header from "./component/header";
import LandingPage from "./pages/landingPage";
import ContactPage from "./pages/contact";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Courses from "./pages/Courses";
import Payment from "./pages/paymentGate";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/login" element={<Login />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/payment" element={<Payment />} />
</Routes>
      </div>
    </Router>
  );
}

export default App;
