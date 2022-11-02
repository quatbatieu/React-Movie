import React from "react";
import { FaUser } from "react-icons/fa";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import style from "./style.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import useWindowSize from "hooks/useWindowsize";
import { useNavigate } from "react-router-dom";
import { logout } from "modules/Authentication/slices/authSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const { width } = useWindowSize();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let display = width < 1200 ? "" : "none";
  let display2 = width > 1200 ? "" : "none";
  let margin = width < 1000 ? "mt-3" : "mt-1";

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/Login");
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const handleRegister = () => {
    navigate("/Register");
  };
  const handlelogo = () => {
    navigate("/");
  };
  return (
    <div className="container ">
      <div className="row ">
        <div style={{ width: "50%"}}>
          <div onClick={handlelogo} className={margin}>
            <h1 className={style.logo}> movie</h1>
          </div>
        </div>
        <div style={{ display: display2 }} className="col-sm-6">
          <div className="row">
            {user ? (
              <div className="col-sm-6 " style={{ display: display2 }}>
                <div className="row">
                  <div className="col-sm-6 pe-0">
                    <span className="text-white me-1 ">Xin Chào</span>
                    <span className="text-white ">{user.taiKhoan}</span>
                  </div>
                  <div className="col-sm-6 text-center ps-0 ">
                    <button
                      onClick={handleLogout}
                      className="bg-transparent text-white border-0 fs-4"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-sm-6">
                <div className="row">
                  <button
                    onClick={handleLogin}
                    className="col-sm-6 text-white pe-0 text-end bg-transparent border-0"
                  >
                    <i className="me-1 ">
                      <FaUser />
                    </i>
                    <span>Đăng nhập</span>
                  </button>
                  <button
                    onClick={handleRegister}
                    className="col-sm-6 text-white ps-0 text-center bg-transparent border-0"
                  >
                    <i className="me-1">
                      <FaUser />
                    </i>
                    <span>Đăng ký</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div style={{ width: "50%", display: display }} className="text-end">
          <Button variant="primary" onClick={handleShow}>
            Launch
          </Button>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h5 className="text-danger ">
              <b>CYBER MOVIE</b>
            </h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div
              className="row"
              style={{ borderBottom: "1px solid black", paddingBottom: "20px" }}
            >
              <div className="col-sm-4 text-dark pe-0">
                <i className="me-1 ">
                  <FaUser />
                </i>
                <span>Đăng nhập</span>
              </div>
              <div className="col-sm-4 text-dark  ">
                <i className="me-1">
                  <FaUser />
                </i>
                <span>Đăng ký</span>
              </div>
            </div>
            <div className="pt-3">
              <a className={style.stylea1}> Home</a>
              <a href="#b" className={style.stylea1}>
                {" "}
                Lịch chiếu
              </a>
              <a className={style.stylea1}> Cụm rạp </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;

