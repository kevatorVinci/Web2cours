import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App ,{HomePageConst,ListeFilmConst,CinemaConst}from '../src/components/App/index'
import { RouterProvider, createBrowserRouter } from "react-router-dom";


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
        path: "movie-list",
        element: <ListeFilmConst />,
      },
      {
        path: "Cinema",
        element: <CinemaConst />,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

