interface Film {
  id: number;
  title: string;
  director: string;
  duree: number;
  image?: string;
  description?: string;
  budget?: number;
}

export type { Film };
