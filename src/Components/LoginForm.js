import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [showPassowrd, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Login Successfully");
    console.log("Printing the Login form data...");
    console.log(FormData);
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          placeholder="aas@gmail.com"
          value={FormData.email}
          onChange={changeHandler}
          className="bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]"
        />
      </label>

      <label className="w-full mt-2 relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          className="bg-richblack-800  w-full rounded-[0.5rem] text-richblack-5 p-[12px]"
          type={showPassowrd ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          value={FormData.password}
          onChange={changeHandler}
        />

        <span
          className="absolute right-3 top-[35px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassowrd ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 float-right mr-2">
            Forgot Password
          </p>
        </Link>
      </label>
      <button className="bg-yellow-50 rounded-[8px] font-medium mt-3 text-richblack-900 items-center px-[12px] py-[8px]">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
