import React from "react";
import Logoz from "./Logoz";
import Showtimez from "./Showtimez";
import  style from "./style.module.scss"
const Showtimes = ({ movieId }) => {
  // useRequest call API lấy lịch chiếu
  console.log(movieId)
  return <div id="a"> 
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <Logoz movieId={movieId}/>
        </div>
        <div className="col-sm-3">
          <Showtimez movieId={movieId}/>
        </div>
      </div>
    </div>
  </div>;
};

export default Showtimes;
