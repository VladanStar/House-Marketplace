import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowrightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  return (
    <>
      <div className="pagecontainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <main>
          
        </main>
      </div>
    </>
  );
};

export default SignIn;
