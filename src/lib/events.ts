import type { Event } from './types';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Science & Culture Gala',
    summary: 'An evening of celebration, networking, and recognition of the community\'s brightest minds.',
    description: '<p>Join us for our flagship annual event, the Science & Culture Gala. This year, we gather to celebrate another year of achievements in the Italian-Canadian scientific and cultural landscape. The evening will feature a keynote address from a renowned physicist, an awards ceremony for outstanding community members, and a delightful dinner. It\'s a perfect opportunity to connect with peers, celebrate our shared heritage, and support the future of our association.</p>',
    date: new Date('2024-09-28T18:00:00Z'),
    location: 'The Grand Ballroom, Toronto',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '2',
    title: 'Workshop: AI in Modern Art',
    summary: 'Explore the intersection of artificial intelligence and artistic creation in this hands-on workshop.',
    description: '<p>Can an algorithm be an artist? This workshop delves into the fascinating world of AI-generated art. Participants will learn about the tools and techniques used to create art with machine learning, from style transfer to generative adversarial networks (GANs). No prior coding experience is required, just a curiosity for the future of creativity. Led by a digital artist and an AI researcher, this workshop promises to be both informative and inspiring.</p>',
    date: new Date('2024-07-20T10:00:00Z'),
    location: 'Innovation Hub, Ryerson University',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '3',
    title: 'Lecture: The Legacy of Leonardo da Vinci',
    summary: 'A deep dive into the life and work of the ultimate Renaissance man, exploring his contributions to both art and science.',
    description: '<p>This lecture, delivered by a leading historian on the Renaissance, will explore the multifaceted genius of Leonardo da Vinci. We will examine his groundbreaking anatomical studies, his visionary engineering concepts, and of course, his timeless artistic masterpieces. Discover how his integrated approach to knowledge continues to inspire innovators today. The lecture will be followed by a Q&A session.</p>',
    date: new Date('2024-08-15T19:00:00Z'),
    location: 'Royal Ontario Museum',
    image: 'https://placehold.co/600x400.png',
  },
   {
    id: '4',
    title: 'Community Picnic & Social',
    summary: 'A casual, family-friendly gathering to enjoy the summer and connect with fellow members.',
    description: '<p>Pack your baskets and bring your families for our annual community picnic! It\'s a relaxed day of fun, food, and friendship in the park. We\'ll have games for the kids, music, and plenty of opportunities to chat and get to know other members of the Scienza e Cultura community. A perfect way to unwind and strengthen our bonds outside of a formal setting.</p>',
    date: new Date('2024-07-06T12:00:00Z'),
    location: 'High Park, Toronto',
    image: 'https://placehold.co/600x400.png',
  },
];

// Function to fetch multiple events
export async function getEvents(count?: number): Promise<Event[]> {
  const sortedEvents = mockEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
  if (count) {
    return sortedEvents.slice(0, count);
  }
  return sortedEvents;
}

// Function to fetch a single event by ID
export async function getEvent(id: string): Promise<Event | null> {
  const event = mockEvents.find(e => e.id === id) || null;
  return Promise.resolve(event);
}
