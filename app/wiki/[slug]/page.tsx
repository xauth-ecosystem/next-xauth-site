import MarkdownIt from 'markdown-it';
import Head from 'next/head';
import { notFound } from 'next/navigation';

const md = new MarkdownIt();

interface WikiArticlePageProps {
  params: { slug: string };
}

// Data fetching at build time for SSG
async function getMarkdownContent(slug: string) {
  const DOCS_REPO_RAW_BASE_URL = 'https://raw.githubusercontent.com/xauth-ecosystem/xauth-docs/main';
  
  // Ensure slug is properly encoded for the URL
  const encodedSlug = encodeURIComponent(slug);

  const response = await fetch(`${DOCS_REPO_RAW_BASE_URL}/${encodedSlug}.md`);

  if (!response.ok) {
    // If article is not found (404), trigger the not-found page
    if (response.status === 404) {
      notFound(); 
    }
    // For other errors, throw an error
    throw new Error(`Error loading content: ${response.statusText}`);
  }

  const markdownText = await response.text();
  return markdownText;
}

export default async function WikiArticlePage({ params }: WikiArticlePageProps) {
  const { slug } = await params;
  
  let markdownText: string;
  try {
    markdownText = await getMarkdownContent(slug);
  } catch (error) {
    // If getMarkdownContent throws an error (other than 404 which calls notFound()),
    // it means a critical error occurred, so we can also trigger notFound().
    // Or, display a generic error. For now, let's trigger notFound() as well.
    notFound(); 
  }

  let title = '';

  // Extract title from the first line if it starts with #
  const firstLine = markdownText.split('\n')[0];
  if (firstLine && firstLine.startsWith('#')) {
    title = firstLine.replace(/^#\s*/, '').trim();
  } else {
    title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // Basic title from slug
  }
  const renderedMarkdown = md.render(markdownText);

  return (
    <>
      <Head>
        <title>{title ? `${title} | Wiki` : 'Wiki'} | XAuth Ecosystem</title>
      </Head>
      <div className="wiki-article py-20 px-4 max-w-4xl mx-auto">
        <div className="pt-32">
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
          <div className="prose prose-invert max_w-none" dangerouslySetInnerHTML={{ __html: renderedMarkdown }}></div>
        </div>
      </div>
    </>
  );
}

// Implement generateStaticParams to tell Next.js which pages to pre-render
export async function generateStaticParams() {
  const slugs = ['introduction', 'getting-started', 'faq']; // Hardcoded example slugs

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

