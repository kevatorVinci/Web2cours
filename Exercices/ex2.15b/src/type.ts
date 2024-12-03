interface Movie {
  id?: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

interface MoviesContext {
  addMovie: (movie: Movie) => Promise <void>;
  movies: Movie[];
  onDelete: (id: number) => void;
  
  
  
}

export type { Movie, MoviesContext };
