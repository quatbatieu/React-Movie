import React from "react";
import { getCinema } from "modules/Home/slices/cinemaSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { showAdress } from "modules/Home/slices/cinemaSlice";
// import cinemaSlice

const Logo = () => {
  const dispatch = useDispatch();
  const { cinemas, isLoading, error, cinema, cart } = useSelector(
    (state) => state.cinema
  );
  useEffect(() => {
    dispatch(getCinema());
  }, []);
  // console.log(cinemas)
  // console.log(cart)
  const handleShowwadress = (cinema) => {
    dispatch(showAdress(cinema));
  };

  return (
    <div>
      {cinemas.map((cinema) => {
        let backgroundColors = "white";

        if (cinema.maHeThongRap === cart.maHeThongRap) {
          {
            /* console.log(cart.maHeThongRap) */
          }
          backgroundColors = "greenyellow";
        }

        return (
          <button
            onClick={() => handleShowwadress(cinema)}
            key={cinema.maHeThongRap}
            style={{
              border: "none",
              borderBottom: "1px black solid",
              width: "100%",
              height: "110px",
              backgroundColor: backgroundColors,
            }}
          >
            <img
              height={"100%"}
              key={cinema.maHeThongRap}
              width={"100%"}
              src={cinema.logo}
              alt=""
            />
          </button>
        );
      })}
    </div>
  );
};

export default Logo;
