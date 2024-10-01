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
 
 

  const { title,director,duration } = body as Film;

  const nextId =films.reduce((maxId,films) => (films.id>maxId ? films.id : maxId),0) +1;

  const NewFilm:Film ={
    id: nextId,
    title,
    director,
    duration,
  };
  films.push(NewFilm);
  return res.json(NewFilm);

});

export default router;
