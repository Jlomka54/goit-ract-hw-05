import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByID } from "../../api/films";

import c from "./MovieReviews.module.css";

const MovieRevies = () => {
  const { movieId } = useParams();
  const [movieRevies, setMovieRevies] = useState([]);

  useEffect(() => {
    const fetchCastDetails = async () => {
      try {
        const data = await getReviewsByID(movieId);

        setMovieRevies(data.results);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };
    fetchCastDetails();
  }, [movieId]);

  return (
    <div>
      {movieRevies.map((review) => {
        return (
          <div className={c.reviewContainer} key={review.id}>
            <h3 className={c.author}>{review.author}</h3>
            <p className={c.content}>{review.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieRevies;
