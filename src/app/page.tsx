import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getNews } from '@/lib/news';
import { getEvents } from '@/lib/events';
import type { NewsArticle, Event } from '@/lib/types';
import { ArrowRight, BookOpen, Calendar, MapPin, Microscope, Newspaper } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

export default async function Home() {
  const latestNews = await getNews(3);
  const upcomingEvents = await getEvents(3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-brand-navy text-brand-off-white flex items-center justify-center">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract scientific background"
          fill={true}
          style={{objectFit: "cover"}}
          className="absolute inset-0 z-0 opacity-20"
          data-ai-hint="abstract texture"
        />
        <div className="relative z-10 text-center p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.3)'}}>
            Scienza e Cultura
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
            Fostering a vibrant community through the celebration of Italian-Canadian scientific and cultural heritage.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground btn-wow">
              <Link href="/about">Discover Our Mission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy btn-wow">
              <Link href="/news">Latest News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Microscope className="w-12 h-12 text-primary" />
              <h3 className="font-headline text-2xl mt-4">Scientific Advancement</h3>
              <p className="text-muted-foreground mt-2">
                Promoting research and collaboration in various scientific fields.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="w-12 h-12 text-primary" />
              <h3 className="font-headline text-2xl mt-4">Cultural Heritage</h3>
              <p className="text-muted-foreground mt-2">
                Preserving and sharing the rich cultural traditions of the Italian-Canadian community.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Newspaper className="w-12 h-12 text-primary" />
              <h3 className="font-headline text-2xl mt-4">Community Engagement</h3>
              <p className="text-muted-foreground mt-2">
                Organizing events, workshops, and seminars to bring our community together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Upcoming Events</h2>
            <p className="text-muted-foreground mt-2 text-lg">
              Join us at our next gathering.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event: Event) => (
               <Card key={event.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                 <div className="relative h-60 w-full">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill={true}
                        style={{objectFit: 'cover'}}
                        data-ai-hint="community event"
                    />
                 </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl hover:text-primary transition-colors">
                    <Link href={`/events/${event.id}`}>{event.title}</Link>
                  </CardTitle>
                    <div className="pt-2 space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3 text-sm">{event.summary}</p>
                </CardContent>
                 <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href={`/events/${event.id}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
             <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground btn-wow">
                <Link href="/events">View All Events</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Latest News</h2>
            <p className="text-muted-foreground mt-2 text-lg">
              Stay updated with our latest activities and announcements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((article: NewsArticle) => (
              <Card key={article.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl hover:text-primary transition-colors">
                    <Link href={`/news/${article.id}`}>{article.title}</Link>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground pt-2">
                    {format(new Date(article.date), 'MMMM d, yyyy')}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{article.summary}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href={`/news/${article.id}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
             <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground btn-wow">
                <Link href="/news">View All News</Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
