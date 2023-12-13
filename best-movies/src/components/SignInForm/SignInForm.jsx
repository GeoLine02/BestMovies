import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/auth";
import { useAppContext } from "../../context/AppContextProvider";
import { signInAction } from "../../context/actions/actionCreator";
import routes from "../../constants/routes";
import { ClimbingBoxLoader } from "react-spinners";

const SignInForm = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const [userLoader, setUserLoader] = useState(false);

  const handleSignIn = () => {
    setUserLoader(true);
    signIn(user)
      .then((data) => {
        navigate(routes.movies);
        console.log(data);
        dispatch(signInAction(data.token));
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
      <h1 className="text-3xl mb-4">Sign In</h1>
      <div className="flex flex-col w-fit border-2 border-gray-400 rounded-md py-12 px-12 gap-5">
        <input
          type="text"
          name="userName"
          placeholder="Username"
          className=" outline-none bg-transparent"
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className=" outline-none bg-transparent"
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />

        <button
          className="border-2 rounded-md border-gray-400 hover:bg-white hover:text-black"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
      {userLoader && <ClimbingBoxLoader />}
    </div>
  );
};

export default SignInForm;
