import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { Outlet } from "react-router-dom";
const MovieDetailsPage = () => {
  return (
    <>
      <MovieDetails />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
