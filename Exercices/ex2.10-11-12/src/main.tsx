import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import HomePageConst from "./components/Pages/homePage";
import CinemaPage from "./components/Pages/cinemaPage";
import MoviePage from "./components/Pages/moviePage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddMoviePage from "./components/Pages/addMoviePages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePageConst />,
      },
      {
        path: "cinema",
        element: <CinemaPage />,
      },
      {
        path: "movie-list",
        element: <MoviePage />,
      },
      {
        path: "add-movie",
        element: <AddMoviePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
