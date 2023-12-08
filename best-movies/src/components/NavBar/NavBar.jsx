import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContextProvider";
import routes from "../../constants/routes";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { signOutAction } from "../../context/actions/actionCreator";
const NavBar = () => {
  const {
    state: { isUserAuthenticated },
    dispatch,
  } = useAppContext();
  const navigate = useNavigate();
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };
  return (
    <nav>
      {isUserAuthenticated ? (
        <div className="flex items-center justify-between max-w-[1440px] mx-auto px-4 ">
          <h1 className="text-3xl">BestMovies</h1>
          <ul className="hidden gap-4 md:flex">
            <li>
              <NavLink to={routes.movies}>Films</NavLink>
            </li>
            <li>
              <NavLink>TV Series</NavLink>
            </li>
            <li>
              <NavLink to={routes.favorites}>Favorites</NavLink>
            </li>
            <button
              onClick={() => {
                dispatch(signOutAction());
              }}
            >
              Sign Out
            </button>
          </ul>
          <div onClick={handleBurger} className="md:hidden cursor-pointer">
            {burger ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between max-w-[1440px] mx-auto px-4">
          <h1 className="text-3xl">BestMovies</h1>
          <ul className="hidden gap-4 md:flex">
            <li>
              <NavLink to={routes.movies}>Films</NavLink>
            </li>
            <li>
              <NavLink>TV Series</NavLink>
            </li>
            <li>
              <NavLink to={routes.favorites}>Favorites</NavLink>
            </li>
            <button
              onClick={() => {
                navigate(routes.signIn);
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                navigate(routes.SignUp);
              }}
            >
              Sign Up
            </button>
          </ul>
          <div onClick={handleBurger} className="md:hidden cursor-pointer">
            {burger ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
        </div>
      )}
      {isUserAuthenticated ? (
        <div
          className={
            burger
              ? "fixed left-0 top-20 w-full md:hidden px-4"
              : "fixed left-0 top-[-100%] w-full px-4"
          }
        >
          <ul className="flex flex-col gap-4 items-center py-1">
            <li>
              <NavLink to={routes.movies}>Films</NavLink>
            </li>
            <li>
              <NavLink>TV Series</NavLink>
            </li>
            <li>
              <NavLink to={routes.favorites}>Favorites</NavLink>
            </li>
            <button
              onClick={() => {
                dispatch(signOutAction());
              }}
            >
              Sign Out
            </button>
          </ul>
        </div>
      ) : (
        <div
          className={
            burger
              ? "fixed left-0 top-20 w-full md:hidden px-4"
              : "fixed left-0 top-[-100%] w-full px-4"
          }
        >
          <ul className="flex flex-col gap-4 items-center py-1">
            <li>
              <NavLink to={routes.movies}>Films</NavLink>
            </li>
            <li>
              <NavLink>TV Series</NavLink>
            </li>
            <li>
              <NavLink to={routes.favorites}>Favorites</NavLink>
            </li>

            <button
              onClick={() => {
                navigate(routes.signIn);
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                navigate(routes.SignUp);
              }}
            >
              Sign Up
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
