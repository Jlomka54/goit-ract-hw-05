import { Field, Form, Formik } from "formik";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilms } from "../../api/films";

const MoviesPage = () => {
  const INITAL_VALUE = {
    filmSearch: "",
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState(false);

  const query = searchParams.get("query") || "";
  const handleSubmit = (values, actions) => {
    setSearchParams({ query: values.filmSearch });
    actions.resetForm();
  };

  useEffect(() => {
    const getTrandMovies = async () => {
      try {
        const data = await fetchFilms();
        setTrendMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getTrandMovies();
  }, []);

  return (
    <div>
      <Formik initialValues={INITAL_VALUE} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="filmSearch"></Field>
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {error && (
        <p>
          Oops, some error occured &quot;{error}&quot;. Please, try again later.
        </p>
      )}
      {trendMovies.length > 0 && <MovieList searchValue={query} from="home" />}
    </div>
  );
};

export default MoviesPage;
