import axios from "axios";

const filmsInstans = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjcyOWQ1YWVhZjlhY2VkYzUzMGFlZjU3YWQ1MWFjNSIsIm5iZiI6MTcyOTQzMTMyNy43OTg0MDQsInN1YiI6IjY3MTUwM2Q3ZDViNzkyNmU5NDcwMWVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nn-vXtFqmt16SiRerBEaMTKtXPZh9T_EEAH4TMmY5ME",
  },
});

export const fetchFilms = async () => {
  const fetchParams = {
    params: {
      api_key: "bf729d5aeaf9acedc530aef57ad51ac5",
      include_adult: false,
      language: "en-US",
    },
  };
  try {
    const response = await filmsInstans.get(`/trending/movie/day`, fetchParams);
    return response.data;
  } catch (error) {
    console.error("Error fetching films:", error);
    throw error;
  }
};
export const getFilms = async (query) => {
  const response = await filmsInstans.get("/search/movie", {
    params: {
      api_key: "bf729d5aeaf9acedc530aef57ad51ac5",
      include_adult: false,
      language: "en-US",
      query,
    },
  });

  return response.data;
};

export const getFilmsById = async (id) => {
  const response = await filmsInstans.get(`/movie/${id}`, {
    params: {
      api_key: "bf729d5aeaf9acedc530aef57ad51ac5",
      include_adult: false,
      language: "en-US",
    },
  });
  return response.data;
};

export const getCastByID = async (id) => {
  const response = await filmsInstans.get(`/movie/${id}/credits`, {
    params: {
      api_key: "bf729d5aeaf9acedc530aef57ad51ac5",
    },
  });
  return response.data;
};

export const getReviewsByID = async (id) => {
  const response = await filmsInstans.get(`/movie/${id}/reviews`, {
    params: {
      api_key: "bf729d5aeaf9acedc530aef57ad51ac5",
    },
  });
  return response.data;
};
