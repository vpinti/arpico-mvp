
import type { NewsArticle } from './types';

const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Major Scientific Breakthrough in Quantum Computing',
    summary: 'Researchers have announced a groundbreaking achievement in quantum computing that could revolutionize the field.',
    content: '<p>In a stunning development, scientists at the forefront of quantum research have published a paper detailing a new technique for stabilizing qubits, the fundamental building blocks of quantum computers. This new method has been shown to extend coherence times by an order of magnitude, paving the way for more complex and reliable quantum calculations. Experts believe this could accelerate the development of commercial-grade quantum computers, with wide-ranging implications for medicine, materials science, and artificial intelligence.</p><p>The team, a collaboration between several international universities, has been working on this problem for over a decade. Their success represents a triumph of persistence and innovation. "We are standing on the precipice of a new era in computation," said the lead author of the study in a press conference.</p>',
    author: 'Dr. Elena Vance',
    date: new Date('2024-05-15T10:00:00Z'),
    createdAt: new Date('2024-05-15T10:00:00Z'),
  },
  {
    id: '2',
    title: 'Cultural Festival Celebrates Italian-Canadian Heritage',
    summary: 'The annual festival drew record crowds this year, showcasing the rich traditions of the community.',
    content: '<p>The streets were alive with music, food, and art as the Italian-Canadian community came together for its annual cultural festival. The event, which ran for three days, featured performances from traditional folk bands, cooking demonstrations from renowned chefs, and an art exhibition highlighting the work of local painters and sculptors. Organizers were thrilled with the turnout, which surpassed all previous records. "It\'s wonderful to see so many people, from all backgrounds, coming to celebrate with us," said one of the event coordinators. "This is what community is all about."</p>',
    author: 'Marco Bianchi',
    date: new Date('2024-05-12T14:30:00Z'),
    createdAt: new Date('2024-05-12T14:30:00Z'),
  },
  {
    id: '3',
    title: 'New Scholarship Program for Young Scientists Announced',
    summary: 'Scienza e Cultura has launched a new scholarship to support the next generation of Italian-Canadian researchers.',
    content: '<p>In a commitment to fostering future innovation, the Scienza e Cultura association has officially announced a new scholarship program aimed at university students of Italian-Canadian descent who are pursuing degrees in STEM fields. The scholarship will provide financial assistance as well as mentorship opportunities with established professionals in the scientific community. Applications are now open, and the first recipients will be announced at the end of the year.</p>',
    author: 'Sofia Rossi',
    date: new Date('2024-05-10T09:00:00Z'),
    createdAt: new Date('2024-05-10T09:00:00Z'),
  },
    {
    id: '4',
    title: 'Exhibition of Renaissance Art Opens Downtown',
    summary: 'A stunning collection of Renaissance masterpieces is now on display, brought to the city through a cultural exchange program.',
    content: '<p>Art lovers are in for a treat as a new exhibition featuring masterpieces from the Italian Renaissance opens its doors. The collection includes paintings and sculptures from some of the era\'s most famous artists. The exhibition is part of a cultural exchange program aimed at strengthening ties between Italy and Canada and is expected to be a major cultural event of the season.</p>',
    author: 'Arturo Romano',
    date: new Date('2024-05-08T11:00:00Z'),
    createdAt: new Date('2024-05-08T11:00:00Z'),
  },
];


// Function to fetch multiple news articles
export async function getNews(count?: number): Promise<NewsArticle[]> {
  if (count) {
    return mockNews.slice(0, count);
  }
  return mockNews;
}

// Function to fetch a single news article by ID
export async function getNewsArticle(id: string): Promise<NewsArticle | null> {
  const article = mockNews.find(a => a.id === id) || null;
  return Promise.resolve(article);
}
