import React, { useState } from "react";
import "../../index.css";
import Useregistration from "../utils/useRegistration";
export default function Registration(props) {
  const [userName, setUsername] = useState("");
  const [usernameError, setUsernameerror] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [emailError, setEmailerror] = useState(null);
  const [passwordError, setPassworderror] = useState(null);
  const [confirmPassworderror, setConfirmpassworderror] = useState(null);
  const [submitError, setSubmiterror] = useState(null);

  const usernameHandler = (e) => {
    if (!e.target.value) {
      setUsernameerror("username field must required");
      return;
    }
    setUsername(e.target.value);
  };

  const emailValidator = (e) => {
    if (!e.target.value) {
      setEmailerror("Email feild must required");
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(e.target.value)) {
        setEmail(e.target.value);
      } else {
        setEmailerror("Invalid Email");
      }
    }
  };
  const passwordValidator = (e) => {
    if (!e.target.value) {
      setPassworderror("Password field must required");
    } else {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (passwordRegex.test(e.target.value)) {
        setPassword(e.target.value);
      } else {
        setPassworderror(
          "password must include [A-Z] [a-z] [0-9] and special symbol"
        );
      }
    }
  };
  const submitHandler = async () => {
    console.log(
      userName,
      "username",
      email,
      "email",
      password,
      "pass",
      confirmPassword,
      "confirm",
      contact,
      "contact"
    );
    const res = await Useregistration(userName, email, contact, password);
    console.log(res, "res from backend");
    alert("signUp successfully");
    setTimeout(() => {
      props.setNewuser(false);
    }, 1000);
    // if (userName && email && password && contact && confirmPassword) {
    //   if (password != confirmPassword) {
    //     console.log(password, confirmPassword);
    //     setConfirmpassworderror("password not matched");
    //     return;
    //   }
    //   const res = await Useregistration(userName, email, contact, password);
    //   console.log(res, "res from backend");
    // } else {
    //   setSubmiterror("fields must required");
    //   return;
    // }
    // setSubmiterror("please correct form");
  };

  return (
    <>
      <div
        className="block bg-black bg-opacity-80 bg-cover h-screen
        -z-1 "
      >
        <div className="flex flex-col z-10 ">
          <div className="block  w-screen p-10  ">
            <div className="text-red-800 text-2xl font-extrabold uppercase z-20">
              <img src="hardrock.png" className="rounded h-16"></img>
            </div>
          </div>
          <div className="  p-5 flex justify-center  h-max text-red-800 font-extrabold uppercase">
            <div className=" flex  flex-col px-12 py-6 rounded w-96 bg-black bg-opacity-70 gap-4 ">
              <div className="text-left items-center h-12 pt-4">
                <h1 className="font-serif text-white">Sign Up Page</h1>
              </div>
              <div className="text-left font-light font-serif flex flex-col gap-7 relative ">
                <div className="flex flex-col relative">
                  <input
                    onFocus={() => {
                      setUsernameerror(false);
                    }}
                    onBlur={usernameHandler}
                    type="text"
                    className="peer h-14 bg-black bg-opacity-70 rounded outline outline-1 outline-white"
                  />
                  <label className="transition-transform peer-valid:-translate-y-4 peer-focus:-translate-y-7 peer-valid:capitalize peer-focus:bg-black  peer-focus:border-x-2  uppercase text-white absolute left-3 top-4 opacity-70">
                    username
                  </label>
                  {usernameError && (
                    <p className="capitalize">{usernameError}</p>
                  )}
                </div>

                <div className="flex flex-col relative">
                  <input
                    className="peer h-14 bg-black bg-opacity-70 rounded outline outline-1 outline-white"
                    onBlur={emailValidator}
                    onFocus={() => {
                      setEmailerror(false);
                    }}
                  />
                  <label className="transition-transform peer-valid:-translate-y-4 peer-focus:-translate-y-7 peer-valid:capitalize peer-focus:bg-black  peer-focus:border-x-2  uppercase text-white absolute left-3 top-4 opacity-70">
                    email
                  </label>
                  {emailError && <p className="capitalize">{emailError}</p>}
                </div>

                <div className="flex flex-col relative">
                  <input
                    className="peer h-14 bg-black bg-opacity-70 rounded outline outline-1 outline-white"
                    inputMode="tel"
                  />
                  <label className="transition-transform peer-valid:-translate-y-4 peer-focus:-translate-y-7 peer-valid:capitalize  peer-focus:bg-black  peer-focus:border-x-2  uppercase text-white absolute left-3 top-4 opacity-70">
                    Contact
                  </label>
                </div>

                <div className="relative flex flex-col ">
                  <input
                    type="text"
                    onFocus={() => {
                      setPassworderror(false);
                    }}
                    onBlur={passwordValidator}
                    className=" peer
                  h-14 w-full bg-black bg-opacity-70  rounded outline outline-1 outline-white"
                  />
                  <label className="transition-transform peer-valid:capitalize peer-valid:-translate-y-4  peer-focus:-translate-y-7 peer-focus:border-x-2  peer-focus:bg-black uppercase text-white absolute left-3 top-4 opacity-70">
                    Password
                  </label>
                  {passwordError && (
                    <p className="capitalize">{passwordError}</p>
                  )}
                </div>
                <div className="flex flex-col relative">
                  <input className="peer h-14 bg-black bg-opacity-70 rounded outline outline-1 outline-white" />
                  <label className="transition-transform peer-valid:capitalize peer-valid:-translate-y-4 peer-focus:-translate-y-7  peer-focus:bg-black  peer-focus:border-x-2  uppercase text-white absolute left-3 top-4 opacity-70">
                    Confirm Password
                  </label>
                  {confirmPassworderror && (
                    <p className="capitalize">{confirmPassworderror}</p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-8">
                <div className="h-fit rounded bg-red-500 ">
                  <button
                    className="h-10 w-full text-center"
                    onClick={submitHandler}
                  >
                    {" "}
                    Sign In
                  </button>
                </div>
                {submitError && <p className="capitalize">{submitError}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
