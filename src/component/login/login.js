import React, { useRef, useState } from "react";
import "../../index.css";
import useLoginrequest from "../utils/useLoginrequest";
import Registration from "./registration";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, logIn } from "../store/cartSlice";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
export default function Login(props) {
  const loginRequest = useLoginrequest;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAdmin, setAdmin] = useState(false);
  const [newUser, setNewuser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailerror] = useState(null);
  const [passwordError, setPassworderror] = useState(null);
  const [submitError, setSubmiterror] = useState(null);

  const googleAuth = async (credentials) => {
    try {
      console.log(credentials, "cred");
      const res = await fetch("http://192.168.1.60:5000/googleauth", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          credential: credentials.credential,
          clientId: credentials.clientId,
        }),
      });
      if (!res.ok) {
        alert("response not good!");
      } else if (res.token) {
        dispatch(logIn(res.token));
        navigate("/menu", { replace: true });
      }
    } catch (error) {
      console.log("Error while sending google credential to backend", error);
    }
  };

  const emailValidator = (e) => {
    // console.log(e.target.value);
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
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
      if (passwordRegex.test(e.target.value)) {
        setPassword(e.target.value);
      } else {
        setPassworderror(
          "password must include [A-Z] [a-z] [0-9] and special symbol"
        );
      }
    }
  };

  const toggleRadio = (e) => {
    e.target.checked = !isAdmin;
    setAdmin(!isAdmin);
    console.log(isAdmin);
  };

  const submitHandler = async () => {
    if (!emailError && !passwordError) {
      if (email && password) {
        const res = await loginRequest(email, password, isAdmin);
        console.log(res, "res");
        const data = await res.json();
        if (res.ok) {
          window.sessionStorage.setItem(
            "login",
            JSON.stringify({
              admin: data.isAdmin,
              token: data.token,
            })
          );
          if (data.isAdmin) {
            navigate("/admin", { replace: true });
          } else {
            navigate("/menu", { replace: true });
          }
        }
        if (res.msg === "NO_RECORD_FOUND") {
          setTimeout(() => {
            navigate("/registration", { replace: true });
          }, 1000);
        } else {
          alert(data.msg ? data.msg : "login successfully");
        }

        // if (res.admin) {
        //   //for admin
        //   window.sessionStorage.setItem("admin",res.admin)
        //   dispatch(adminLogin());
        //   navigate("/admin", { replace: true });
        // }
        // if (res.token) {
        //   dispatch(logIn(res.token));
        //   navigate("/menu", { replace: true });
        // }
        console.log(res, "res from backend");
      } else {
        setSubmiterror("fields must required");
      }
    } else {
      setSubmiterror("please correct form");
    }
  };
  return (
    <>
      {!newUser && (
        <div
          className="block  bg-black bg-opacity-80 bg-cover h-screen
      -z-1 "
        >
          <div className="flex flex-col z-10 ">
            <div className="block  w-screen p-10  ">
              <div className="text-red-800 text-2xl font-extrabold uppercase z-20">
                <img src="hardrock.png" className="rounded h-16"></img>
              </div>
            </div>
            <div className="  p-5 flex justify-center  h-max text-red-800 font-extrabold uppercase">
              <div className=" flex rounded-lg flex-col px-12 py-6  w-96 bg-black bg-opacity-70 gap-4 ">
                <div className="text-left items-center h-12 pt-4">
                  <h1 className="font-serif tracking-widest text-white">
                    Sign In
                  </h1>
                </div>
                <div className="tracking-widest text-left font-light font-serif flex flex-col gap-7 relative ">
                  <input
                    className="peer px-2  text-white h-14 bg-black bg-opacity-70 rounded outline outline-1 outline-white"
                    onBlur={emailValidator}
                    onFocus={() => {
                      setEmailerror(false);
                    }}
                  />
                  <label className="transition-transform peer-valid:-translate-y-4 peer-focus:-translate-y-7 peer-focus:uppercase peer-focus:bg-black  peer-focus:border-x-2  uppercase text-white absolute left-3 top-4 opacity-70">
                    email
                  </label>
                  {emailError && <p>{emailError}</p>}
                  <div className="relative flex flex-col gap-7">
                    <input
                      type="text"
                      onFocus={() => {
                        setPassworderror(false);
                      }}
                      onBlur={passwordValidator}
                      className=" peer px-2
                h-14 w-full bg-black bg-opacity-70 text-white rounded outline outline-1 outline-white"
                    />
                    <label className="transition-transform peer-valid:-translate-y-4 peer-focus:-translate-y-7 peer-focus:uppercase peer-focus:border-x-2  peer-focus:bg-black uppercase text-white absolute left-3 top-4 opacity-70">
                      Password
                    </label>
                    {passwordError && <p>{passwordError}</p>}
                  </div>
                </div>
                <div className="mt-2 flex flex-col gap-7 tracking-widest">
                  <div className="h-fit rounded bg-red-500 ">
                    <button
                      className="h-10 w-full text-center tracking-widest"
                      onClick={submitHandler}
                    >
                      {" "}
                      Sign In
                    </button>
                  </div>
                  {submitError && <p>{submitError}</p>}
                  <div className="flex justify-between text-white capitalize font-serif">
                    <div className="flex">
                      <input
                        type="radio"
                        className="mr-1"
                        id="radio"
                        onClick={toggleRadio}
                      ></input>
                      <label className=" opacity-70 ">is admin?</label>
                    </div>
                    <div>
                      <p
                        className="hover:text-blue-500 hover:underline hover:underline-offset-8"
                        onClick={() => {
                          setNewuser(true);
                        }}
                      >
                        new user?
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" tracking-widest py-1 text-center text-white font-serif font-normal ">
                  <h1
                    onClick={() => {
                      navigate("/forgetpassword");
                    }}
                  >
                    Forget password?
                  </h1>
                </div>
                <div className="flex justify-center py-2">
                  <GoogleOAuthProvider clientId="120492723923-a7v61c4dbbtr29krkdutqo7orb9jqbue.apps.googleusercontent.com">
                    <GoogleLogin
                      onSuccess={(credentials) => googleAuth(credentials)}
                    ></GoogleLogin>
                  </GoogleOAuthProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {newUser && <Registration setNewuser={setNewuser} />}
    </>
  );
}
