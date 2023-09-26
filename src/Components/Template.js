import React from "react";
import frameImg from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, des1, des2, formType, setIsLoggedIn, image }) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 gap-x-12 mx-auto gap-y-0 ">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="font-semibold text-richblack-5 text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100 ">{des1} </span> <br />
          <span className="text-blue-100 italic">{des2} </span>
        </p>

        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="my-4 flex gap-x-2 w-full items-center">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-700 leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>

        <button className="w-full flex rounded-[8px] py-[8px] px-[12px] mt-6 gap-x-2 justify-center items-center font-medium text-richblack-100 border border-richblack-700">
          <FcGoogle className="text-2xl" />
          <p>Sign in with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameImg}
          alt="Pattern"
          width={558}
          height={490}
          loading="lazy"
        />

        <img
          src={image}
          alt="Stud"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
