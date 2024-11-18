import { useState, SyntheticEvent } from "react"; 






const [title, setTitle] = useState("");
const [director, setDirector] = useState("");
const [duree, setDuree] = useState(0);
const [image, setImage] = useState("");
const [description, setDescription] = useState("");
const [budget, setBudget] = useState(0);
const [films, setFilm] = useState(filmsDefault);



const handleSubmit=(e:SyntheticEvent)=>{
    e.preventDefault();

    const newFilm = {
      id: nextFilm(films),
      title:title,
      director:director,
      duree:duree,
      image:image,
      description:description,
      budget:budget,
    };
    setFilm([...films, newFilm]);
    
  }
const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    setTitle(titleInput.value);
  };const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    setDirector(directorInput.value);
  };

  const handleDureeChange = (e: SyntheticEvent) => {
    const dureeInput = e.target as HTMLInputElement;
    setDuree(parseInt(dureeInput.value, 10)); // convertir en nombre entier
  };

  const handleImageChange = (e: SyntheticEvent) => {
    const imageInput = e.target as HTMLInputElement;
    setImage(imageInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    setBudget(parseInt(budgetInput.value, 10)); // convertir en nombre entier
  };



<form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          value={title}
          type="text"
          id="title"
          name="title"
          onChange={handleTitleChange}
          required
        />

        <label htmlFor="director">Director</label>
        <input
          value={director}
          type="text"
          id="director"
          name="director"
          onChange={handleDirectorChange}
          required
        />

        <label htmlFor="duree">Duration (in minutes)</label>
        <input
          value={duree}
          type="number"
          id="duree"
          name="duree"
          onChange={handleDureeChange}
          required
        />

        <label htmlFor="image">Image URL</label>
        <input
          value={image}
          type="text"
          id="image"
          name="image"
          onChange={handleImageChange}
        />

        <label htmlFor="description">Description</label>
        <input
          value={description}
          type="text"
          id="description"
          name="description"
          onChange={handleDescriptionChange}
        />

        <label htmlFor="budget">Budget</label>
        <input
          value={budget}
          type="number"
          id="budget"
          name="budget"
          onChange={handleBudgetChange}
        />

        <button type="submit">Ajouter</button>
      </form>