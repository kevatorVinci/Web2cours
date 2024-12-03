import { MoviesContext } from "../../type";

import { useOutletContext } from "react-router-dom";
import AddMovieForm from "../movieItem/addMovieFrom";

const AddMoviePage = () => {
  const { addMovie }: MoviesContext = useOutletContext();

  return (
    <div>
      <AddMovieForm addMovie={addMovie} />
    </div>
  );
};

export default AddMoviePage;
