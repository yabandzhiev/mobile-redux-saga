import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.scss";
import LogoutButton from "../../Auth/Logout/LogoutButton";
import LoginButton from "../../Auth/Login/LoginButton/LoginButton";

const Header = () => {
  const { currentUser } = useSelector((state) => state.userSession);

  return (
    <>
      <div className="header">
        <img src="/carLogo.png" alt="logo" className="logo" />

        {currentUser ? (
          <div>
            Hello, {currentUser}
            <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Header;
