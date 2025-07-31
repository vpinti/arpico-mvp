import { getEvent } from '@/lib/events';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

type EventDetailPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: EventDetailPageProps) {
  const event = await getEvent(params.id);

  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: `${event.title} | Scienza e Cultura`,
    description: event.summary,
  };
}


export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const event = await getEvent(params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
         <Button asChild variant="ghost" className="mb-8 text-primary hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:-translate-x-1 -ml-4">
              <Link href="/events">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Link>
           </Button>
        <div className="grid md:grid-cols-5 gap-12">
            <div className='md:col-span-3'>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
                    {event.title}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">{event.summary}</p>
                <div 
                    className="mt-8 prose lg:prose-xl max-w-none text-foreground prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                />
            </div>
            <div className='md:col-span-2'>
                <Card className="shadow-lg">
                    <div className="relative h-60 w-full rounded-t-lg overflow-hidden">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill={true}
                            style={{objectFit: 'cover'}}
                            data-ai-hint="event poster"
                        />
                    </div>
                    <CardContent className="p-6 space-y-4">
                         <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-primary" />
                            <div className='text-muted-foreground'>
                                <p className='font-semibold text-foreground'>{format(new Date(event.date), 'EEEE, MMMM d, yyyy')}</p>
                                <p>{format(new Date(event.date), 'h:mm a')}</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-primary" />
                            <div className='text-muted-foreground'>
                                <p className='font-semibold text-foreground'>Location</p>
                                <p>{event.location}</p>
                            </div>
                        </div>
                        <Button size="lg" className="w-full mt-2 btn-wow">Register Now</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
        </div>
    </div>
  );
}
