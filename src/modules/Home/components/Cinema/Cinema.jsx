import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { Container } from "react-bootstrap";
import React from 'react'
import Logo from "./Logo";
import Adress from "./Adress";
import Showci from "./Showci";
import "./cinema.scss"
import useWindowSize from "hooks/useWindowsize";

const Cinema = () => {
  const { width } = useWindowSize();
return(
  <div id="b">
     {width > 1000 ?  
  <div  className="container bg-white" style={{padding:"100px",}} >
    <div className="row" style={{height:"680px",border:"1px black solid"}}>
      <div style={{height:"100%"}}  className="pdcss col-sm-2">
      <Logo/>
      </div>
      <div style={{height:"100%"}} className=" pdcss col-sm-5">
      <Adress/>
      </div>
      <div style={{height:"100%"}}  className=" pdcss col-sm-5">
      <Showci/>
      </div>

     
    </div>
  </div>

 : <></>}
  </div>
)
}

export default Cinema
