import { useNavigate } from "react-router-dom";

import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";

const MovieShowing = () => {
  // useNavigate là một hook dùng để điều hướng url
  const navigate = useNavigate();

  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovies());

  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="container">
      <div className="row">
        {movies?.map((movie) => {
          return (
            
            <div style={{marginBottom:"20px"}} className="col-sm-3" key={movie.maPhim}>
                <div>
                  <img style={{borderRadius:"8px"}} width={"100%"} height={"400px"} src={movie.hinhAnh} alt="" />
                </div>
              <div ><h5>{movie.tenPhim}</h5></div>
              <div><p>{movie.moTa.slice(0,35) }<span>...</span></p></div>
              <button className="btn btn-danger w-100" onClick={() => goToMovie(movie.maPhim)}>Chi tiết</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieShowing;
