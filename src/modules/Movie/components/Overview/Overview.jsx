import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import "../../../Home/components/Cinema/cinema.scss";
import useWindowSize from "hooks/useWindowsize";
import { getThongTinPhim } from "modules/Movie/slices/ThongTinPhimSlice";
import { useDispatch } from "react-redux";
const Overview = ({ movieId }) => {
  const { width } = useWindowSize();
  const {
    data: movie,
    isLoading,
    error,
    
  } = useRequest(() => movieAPI.getMovieDetails(movieId));
 
  
  const navigate = useNavigate();
  const handleTicket = (ThongTinPhims) => {
    // movieAPI.getThongTinPhim(movieId)
    navigate(`/ticket/${ThongTinPhims}`);
  };
  if (!movie) {
    return null;
  }
 let paddingTop = width < 770 ? "20px" : "50px";
 let widths =    width < 770 ? "100%" : "";
 let display =  width < 770 ? "none" : "block";
  return (
    <div style={{ padding: "100px" }} className="container ">
      <div className="row">
        <div className="col-sm-5" style={{width:widths}}>
          <img
            style={{ borderRadius: "10px" }}
            width={"100%"}
            height={"300px"}
            src={movie.hinhAnh}
            alt=""
          />
        </div>
        <div className="col-sm-3" style={{width:widths}}>
          <div className={width < 770 ? "mb-3" : "mb-5"} style={{ paddingTop: paddingTop }}>
            <p className="mb-1">
              <b>{movie.ngayKhoiChieu.slice(0, 10)}</b>
            </p>
            <h5 className="mb-1">
              <b>{movie.tenPhim}</b>
            </h5>
            <b>{movie.maPhim}</b>
          </div>
          <a href="#a"><button  className="btn btn-danger fs-4">Mua vé</button></a>
        </div>
        <div className="col-sm-4" style={{display:display}}>
          <div style={{ paddingTop: "50px", margin: "auto" }}>
            <div style={{ margin: "auto" }}>
              <p className="iconic">{movie.danhGia}</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
