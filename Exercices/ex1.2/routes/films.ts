import { Router }   from "express";
import { Film } from "../types";

const films: Film[] = [
     {
        id: 1,
        title: 'Inception',
        director: 'Christopher Nolan',
        duration: 148
    }
    ,{
        id: 2,
        title: 'Interstellar',
        director: 'Christopher Nolan',
        duration: 169
    }
    ,{
        id: 3,
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        duration: 152
    }
    
];
const router =Router();

router.get("/", (_req, res) => {
    return res.json(films);
  });
  
  export default router;