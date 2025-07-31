
'use client';

import { useEffect, useState } from 'react';
import type { Event } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getEvents } from '@/lib/events';
import Image from 'next/image';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const eventsData = await getEvents();
      setEvents(eventsData);
      setLoading(false);
    }
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Events</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Join us for our upcoming events, workshops, and gatherings.
        </p>
      </div>
      
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
                 <Skeleton className="h-60 w-full" />
              <CardHeader>
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2 mt-2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-5/6 mt-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
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
                <CardTitle className="font-headline text-2xl hover:text-primary transition-colors">
                  <Link href={`/events/${event.id}`}>{event.title}</Link>
                </CardTitle>
                <div className="pt-2 space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{format(new Date(event.date), 'MMMM d, yyyy \'at\' h:mm a')}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                    </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-4">{event.summary}</p>
              </CardContent>
              <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href={`/events/${event.id}`}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
