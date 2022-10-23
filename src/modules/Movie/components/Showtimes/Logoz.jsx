// import React from 'react'
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import movieAPI from "apis/movieAPI";
import { getThongTinPhim } from "modules/Movie/slices/ThongTinPhimSlice";
import { showcinema } from "modules/Movie/slices/ThongTinPhimSlice";
const Logoz = ({ movieId }) => {
  const { ThongTinPhims } = useSelector(
    (state) => state.thongtinphim
  );
  console.log(ThongTinPhims)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getThongTinPhim(movieId));
    
  }, [])
 const handleShowci = (cumrap)=>{
    dispatch(showcinema(cumrap))
 }
//  console.log(ThongTinPhims[0]?.cumRapChieu);
  return (
    <div className="text-center  " width={"100%"} height={"200px"} >
      
        {ThongTinPhims.map((thongtinphim)=>{
          return(
           <div key={thongtinphim.maHeThongRap}>
           <button  width={"100%"} height={"100%"}  onClick={() => handleShowci(thongtinphim.cumRapChieu)} >
            <img  width={"200px" } height={"200px"}  src= {thongtinphim.logo} alt="" />
          </button>
           </div>
          )
        })}
      </div>
    
  )
}

export default Logoz