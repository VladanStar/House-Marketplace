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
  const onChange =()=>{

  }
  return (
    <>
      <div className="pagecontainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <form>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
          <div className=" passwordInputDiv">
            <input type={showPassword ? 'text': 'password'} 
            className='passwordInput' placeholder="Password"
            id="password"
            value={password}
            onChange={onChange} />
          </div>
          <img
          src={visibilityIcon}
          alt="show password"
           className="showPassword"
           onClick={()=> setShowPassword((prevState) =>
            !prevState)} 
          />

        </form>
      </div>
    </>
  );
};

export default SignIn;
