import { getNewsArticle } from '@/lib/news';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type NewsDetailPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const article = await getNewsArticle(params.id);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Scienza e Cultura`,
    description: article.summary,
  };
}


export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = await getNewsArticle(params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
           <Button asChild variant="ghost" className="mb-8 text-primary hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:-translate-x-1">
              <Link href="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
           </Button>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
            {article.title}
          </h1>
          <div className="mt-4 text-muted-foreground flex items-center gap-4">
            <span>By {article.author}</span>
            <span>&bull;</span>
            <span>{format(new Date(article.date), 'MMMM d, yyyy')}</span>
          </div>
        </div>
        <div 
            className="prose lg:prose-xl max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary prose-p:leading-relaxed prose-a:text-primary hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
}
