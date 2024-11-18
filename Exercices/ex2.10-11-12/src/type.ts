interface Film {
  id: number;
  title: string;
  director: string;
  duree: number;
  image?: string;
  description?: string;
  budget?: number;
}
interface Movie {
  title: string;
  director: string;
  description?: string;
}

interface MoviesContext {
  

}

export type { Film,Movie,MoviesContext }; ;
