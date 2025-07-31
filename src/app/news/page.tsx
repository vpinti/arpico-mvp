'use client';

import { useEffect, useState } from 'react';
import type { NewsArticle } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getNews } from '@/lib/news';

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const articlesData = await getNews();
      setArticles(articlesData);
      setLoading(false);
    }
    fetchNews();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">News & Announcements</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The latest updates from the Scienza e Cultura association.
        </p>
      </div>
      
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
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
          {articles.map((article) => (
            <Card key={article.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="font-headline text-2xl hover:text-primary transition-colors">
                  <Link href={`/news/${article.id}`}>{article.title}</Link>
                </CardTitle>
                <CardDescription className="pt-2">
                  {format(new Date(article.date), 'MMMM d, yyyy')}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-4">{article.summary}</p>
              </CardContent>
              <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href={`/news/${article.id}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
