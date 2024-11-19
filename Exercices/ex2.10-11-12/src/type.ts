interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

interface MoviesContext {
  addMovie: (movie: Movie) => void;
  movies: Movie[];
}

export type { Movie, MoviesContext };
