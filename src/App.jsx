import { NavLink, Route, Routes } from "react-router-dom";

import MoviesPage from "./pages/MoviesPage/MoviesPage";

const App = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Routes>
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
};

export default App;
