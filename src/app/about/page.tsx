import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Target, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">About Scienza e Cultura</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our association is dedicated to bridging the worlds of science and culture, fostering a community of learners, innovators, and creators within the Italian-Canadian landscape.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-semibold text-primary">Our History</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded in 2010 by a group of passionate scientists, artists, and community leaders, Scienza e Cultura was born from a shared desire to create a space for intellectual and cultural exchange. We aim to celebrate the profound contributions of Italians and Italian-Canadians to the arts and sciences, inspiring future generations to explore their heritage and pursue knowledge.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Over the past decade, we have grown into a thriving organization, hosting numerous events, funding research projects, and providing a platform for dialogue and collaboration. Our commitment is to nurture curiosity and strengthen community bonds.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
             <Image
                src="https://placehold.co/600x400.png"
                alt="Association members at a conference"
                width={600}
                height={400}
                className="w-full h-auto"
                style={{objectFit: 'cover'}}
                data-ai-hint="community event"
              />
          </div>
        </div>

        <div className="mt-24">
            <div className="text-center mb-12">
                 <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Core Values</h2>
                 <p className="text-muted-foreground mt-2 text-lg">The principles that guide our mission.</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                 <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                            <Target className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline mt-4">Integrity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            We uphold the highest standards of academic and cultural honesty in all our endeavors.
                        </p>
                    </CardContent>
                 </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                             <Users className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline mt-4">Community</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="text-muted-foreground">
                            We foster a welcoming and inclusive environment for collaboration and mutual support.
                        </p>
                    </CardContent>
                 </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                             <BookOpen className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline mt-4">Curiosity</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <p className="text-muted-foreground">
                            We encourage a lifelong passion for learning, discovery, and creative expression.
                        </p>
                    </CardContent>
                 </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
