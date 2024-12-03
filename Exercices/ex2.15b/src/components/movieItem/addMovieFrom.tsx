import React, { SyntheticEvent, useState } from "react";
import {  MoviesContext } from "../../type";
import { useNavigate, useOutletContext } from "react-router-dom";


const AddMovieForm = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const navigate = useNavigate();

  const { addMovie } = useOutletContext<MoviesContext>();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addMovie({
      title : title,
      director: director,
      duration : duration,
      imageUrl : imageUrl ? imageUrl : undefined,
      description : description ? description : undefined,
      budget : budget ? budget : undefined,
    });

    setTitle("");
    setDirector("");
    setDuration(0);
    setImageUrl("");
    setDescription("");
    setBudget(0);
  
  };


  const handleSubmitform = (e: React.FormEvent) => {

    e.preventDefault();
    handleSubmit(e);
    navigate("/movie-list");
  }

  return (
    <form onSubmit={handleSubmitform}>
      <div>
        <label>Titre :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Réalisateur :</label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Durée :</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label>URL de l'image :</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <label>Description :</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Budget :</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMovieForm;
