
export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: Date;
  createdAt: Date;
}

export interface Event {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: Date;
  location: string;
  image: string;
}
