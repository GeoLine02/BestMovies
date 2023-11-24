import React, { useState } from "react";
import { signUp } from "../../api/auth";
import { ClimbingBoxLoader } from "react-spinners";

const SignUpForm = () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
    userName: "",
  });
  const [userLoader, setUserLoader] = useState(false);
  const handleSignUp = () => {
    setUserLoader(true);
    signUp(user)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUserLoader(false);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <h1>Sign Up</h1>
      <div className="flex flex-col w-fit border-2 border-gray-400 rounded-md py-5 px-5 gap-5">
        <input
          className=" outline-none bg-transparent"
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          type="email"
          placeholder="email"
          name="email"
        />
        <input
          className=" outline-none bg-transparent"
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          name="userName"
          placeholder="UserName"
        />
        <input
          className=" outline-none bg-transparent"
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />

        <button
          className="border-2 rounded-md border-gray-400 hover:bg-white hover:text-black"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
      {userLoader && <ClimbingBoxLoader />}
    </div>
  );
};

export default SignUpForm;
