import {  Spin } from "antd";
import React from "react";
import scss from "./style.module.scss";

const Spiner = () => (
  <div className={scss.example}>
    <Spin size="large" />
  </div>
);
export default Spiner;
