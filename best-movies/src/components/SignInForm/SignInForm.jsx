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
        console.log(data);
        dispatch(signInAction(data.token));
        navigate(routes.movies);
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
      <h1>Sign In</h1>
      <div>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        {userLoader && <ClimbingBoxLoader />}
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
};

export default SignInForm;
