import { Field, Form, Formik } from "formik";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFilms, getFilms } from "../../api/films";

const MoviesPage = () => {
  const INITAL_VALUE = {
    filmSearch: "",
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const query = searchParams.get("query") || "";

  const handleSubmit = (values, actions) => {
    setSearchParams({ query: values.filmSearch });
    actions.resetForm();
  };

  useEffect(() => {
    const getMovies = async () => {
      setError(null);
      try {
        if (query) {
          const data = await getFilms(query);
          setMovies(data.results);
        } else {
          const data = await fetchFilms();
          setMovies(data.results);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, [query]);

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
          Oops, some error occurred &quot;{error}&quot;. Please, try again
          later.
        </p>
      )}
      {movies.length > 0 && <MovieList movies={movies} from="home" />}
    </div>
  );
};

export default MoviesPage;
