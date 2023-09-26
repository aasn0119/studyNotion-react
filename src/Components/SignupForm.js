import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.cPassword) {
      toast.error("Password do not match");
    } else {
      setIsLoggedIn(true);
      toast.success("Account Created");

      const accountData = {
        ...formData,
      };

      const finalData = {
        ...accountData,
        accountType,
      };

      navigate("/dashboard");
      console.log("Printing the final Signup form data...");
      console.log(finalData);
    }
  }

  return (
    <div>
      {/* Student Instructor Tab */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => {
            setAccountType("student");
          }}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => {
            setAccountType("instructor");
          }}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* First Name + Last Name */}
        <div className="grid grid-cols-2 gap-x-4">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800  w-full rounded-[0.5rem] text-richblack-5 p-[12px]"
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              placeholder="Anuj"
            />
          </label>

          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800  w-full rounded-[0.5rem] text-richblack-5 p-[12px]"
              type="text"
              required
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              placeholder="Trivedi"
            />
          </label>
        </div>

        {/* Email */}
        <div className="mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800  w-full rounded-[0.5rem] text-richblack-5 p-[12px]"
              required
              type="email"
              name="email"
              placeholder="aas@gmail.com"
              value={formData.email}
              onChange={changeHandler}
            />
          </label>
        </div>

        {/* Password + Confirm Password */}
        <div className="grid grid-cols-2 gap-x-4 mt-[20px]">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800  w-full rounded-[0.5rem] text-richblack-5 p-[12px]"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={changeHandler}
            />

            <span
              className="absolute right-3 top-[36px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800  w-full rounded-[0.5rem] text-richblack-5 p-[12px]"
              required
              type={showConfirmPassword ? "text" : "password"}
              name="cPassword"
              placeholder="Confirm password"
              value={formData.cPassword}
              onChange={changeHandler}
            />

            <span
              className="absolute right-3 top-[36px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 rounded-[8px] w-full font-medium mt-6 text-richblack-900 items-center px-[12px] py-[8px]">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
