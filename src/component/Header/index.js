import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Admin from "../Admin";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { tip } = useSelector((s) => s);
  const Click = () => {
    dispatch({ type: "OPEN", payload: true });
  };
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <NavLink to={"/hero"}>
            <h1>BOOKShop</h1>
          </NavLink>
          <div className="header--nav">
            <input type="password" placeholder="password..." />
            <NavLink to={"/basket"}>
              <div className="header--nav__basket">
                <h1>
                  <SlBasket />
                </h1>
                <h1>Корзина</h1>
              </div>
            </NavLink>

            <div
              onClick={() => {
                Click(true);
              }}
              className="header--nav__admin"
            >
              <h1>
                <FaRegCircleUser />
              </h1>
              <h1>Админ</h1>
            </div>
            {tip ? <Admin /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
