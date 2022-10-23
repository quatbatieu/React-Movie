import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Showci = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cinemas, isLoading, error, cinema, cart, addresses } = useSelector(
    (state) => state.cinema
  );
  // console.log(cinema)
  if (!cinema) {
    return;
  }
  const Showmovie = cinema.filter((movie) => {
    return movie.dangChieu === true;
  });
  const handleBookticket = (maLichChieu)=>{
    navigate(`/ticket/${maLichChieu}`)
  }
  // console.log(Showmovie)
  return (
    <div className=" container scrollcss bg-white">
      {Showmovie.map((movie) => {
        return (
          <div
            style={{ height: "150px" }}
            className="mb-3 mt-3 text-center row"
            key={movie.maPhim}
          >
            <div style={{ height: "100%" }} className="col-sm-3">
              <img width={"100%"} height={"100%"} src={movie.hinhAnh} alt="" />
            </div>
            <div style={{ height: "100%" }} className="col-sm-9  scrollcss">
              <div className>
                <div className="row" style={{textAlign:"left"}}>
                  <h3 className="mb-3  ">{movie.tenPhim}</h3>
                  {movie.lstLichChieuTheoPhim.map((listShow) => {
                    return (
                      <div
                        key={listShow.maLichChieu}
                        className="col-sm-6  mb-3"
                      >
                        <button onClick={()=>handleBookticket(listShow.maLichChieu)} style={{ backgroundColor:'#fafafa', fontSize: "13px" ,borderRadius:"10px",padding:"10px 5px",border:"grey 1px solid"}} width={"100%"}>
                          <span style={{ color: "green" }}>
                            {listShow.ngayChieuGioChieu.slice(0, 10)}
                          </span>
                          ~
                          <span style={{ color: "red" }}>
                            {listShow.ngayChieuGioChieu.slice(11)}
                          </span>{" "}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Showci;
