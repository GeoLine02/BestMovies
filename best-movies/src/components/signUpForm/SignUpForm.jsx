import React, { useState } from "react";
import { signUp } from "../../api/auth";
import { ClimbingBoxLoader } from "react-spinners";

const SignUpForm = () => {
  const [user, setUser] = useState({
    email: "",
    userName: "",
    password: "",
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
    <div>
      <h1>Sign Up</h1>
      <div>
        <input
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
          name="userName"
          placeholder="UserName"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        {userLoader && <ClimbingBoxLoader />}
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUpForm;
