import { Router } from "express";
import { Film } from "../types";

const films: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
  },
  {
    id: 2,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    duration: 152,
  },
];
const router = Router();

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.get("/", (req, res) => {
  if (!req.query["minimum-duration"]) {
    // Cannot call req.query.budget-max as "-" is an operator
    return res.json(films);
  }
  const budgetMin = Number(req.query["minimum-duration"]);
  const filteredFilm = films.filter((film) => {
    return film.duration >= budgetMin;
  });
  return res.json(filteredFilm);
});

router.post("/create", (req, res) => {


  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }


  const newFilm = body as Film;







  const existingFilm = films.find(
    (film) =>
      film.title.toLowerCase() === newFilm.title.toLowerCase() &&
      film.director.toLowerCase() === newFilm.director.toLowerCase()
  );

  if (existingFilm) {
    return res.sendStatus(409);


  }
  const nextIde = films.reduce((acc, films) => (films.id > acc ? films.id : acc), 0) + 1;

  newFilm.id = nextIde;




  const addedFilm: Film = { ...newFilm };



  films.push(addedFilm);

  return res.json(addedFilm);

});

router.delete(":id", (req, res) => {
  const id = Number(req.params.id);
  console.log("delete", id);

  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = films.splice(index, 1); 
  return res.json(deletedElements[0]);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((drink) => drink.id === id);
  if (!film) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

 if (
     !body ||
     typeof body !== "object" ||
     ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
     ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
     ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0))
 ) {
     return res.sendStatus(400);
 }
const updatedFilm = { ...film, ...body };


  films[films.indexOf(updatedFilm)] = updatedFilm;

  return res.send(updatedFilm);


});

router.put("/:id", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  

  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const indexOfFilmToUpdate = films.findIndex((film) => film.id === id);
  
  if (indexOfFilmToUpdate < 0) {
    const newFilm = body as Film;

    
   
  

    const nextId = films.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;

    const addedFilm = { id: nextId, ...newFilm };

    films.push(addedFilm);

    return res.json(addedFilm);
  }

 
  const updatedFilm = { ...films[indexOfFilmToUpdate], ...body } as Film;

  films[indexOfFilmToUpdate] = updatedFilm;

  return res.send(updatedFilm);
});


export default router;
