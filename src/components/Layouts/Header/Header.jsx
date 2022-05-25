import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.scss";
import LogoutButton from "../../Auth/Logout/LogoutButton";
import LoginButton from "../../Auth/Login/LoginButton/LoginButton";

const Header = () => {
  const { firstName, lastName } = useSelector((state) => state.userSession);

  return (
    <>
      <div className="header">
        <img src="/carLogo.png" alt="logo" className="logo" />

        {firstName ? (
          <div className="logout">
            Hello, {firstName} {lastName}
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
