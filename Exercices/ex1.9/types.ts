interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

interface Text{
  id:string;
  content:string;
  level: "easy" | "medium" | "hard";
}


type NewText=Omit<Text,"id">;
type NewFilm = Omit<Film, "id">;

export type { Film, NewFilm ,Text,NewText } ;