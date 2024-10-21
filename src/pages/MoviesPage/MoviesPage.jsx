import { Field, Form, Formik } from "formik";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const INITAL_VALUE = {
    filmSearch: "",
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const handleSubmit = (values, actions) => {
    setSearchParams({ query: values.filmSearch });
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={INITAL_VALUE} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="filmSearch"></Field>
          <button type="submit">Search</button>
        </Form>
      </Formik>

      <MovieList searchValue={query} />
    </div>
  );
};

export default MoviesPage;
