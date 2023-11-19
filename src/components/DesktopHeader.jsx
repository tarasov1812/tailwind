import React from "react";
import "../index.css";

function DesktopHeader () {
  return (
    <div className="desktop-header">
      <div className="top-menu">
        <div className="overlap">
          <div className="messages">
            <div className="text-wrapper">Настройки</div>
            <div className="icon">
              <img className="adjust" alt="Adjust" src="adjust-1.png" />
            </div>
          </div>
          <div className="notifications">
            <div className="div">Профиль</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <img className="vector" alt="Vector" src="vector.svg" />
                <img className="user" alt="User" src="user-1-1.png" />
                <img className="img" alt="Vector" src="image.svg" />
              </div>
            </div>
          </div>
          <div className="home">
            <div className="border" />
            <div className="text-wrapper-2">Лента</div>
            <img className="home-2" alt="Home" src="home-1.png" />
          </div>
        </div>
      </div>
      <div className="aside">
        <img className="avatar" alt="Avatar" src="avatar.png" />
      </div>
      <img className="logo" alt="Logo" src="logo.svg" />
    </div>
  );
};

export default DesktopHeader;
