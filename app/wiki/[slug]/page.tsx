import MarkdownIt from 'markdown-it';
import Head from 'next/head';
import { notFound } from 'next/navigation';

const md = new MarkdownIt();

interface WikiArticlePageProps {
  params: { slug: string };
}

// Define the base URL for your documentation repository's raw content
const DOCS_REPO_RAW_BASE_URL = 'https://raw.githubusercontent.com/xauth-ecosystem/xauth-docs/main';

interface WikiItem {
  slug: string;
  label: string;
}

interface WikiSection {
  title: string;
  slug?: string;
  items: WikiItem[];
}

async function getWikiStructure(): Promise<WikiSection[]> {
  try {
    const response = await fetch(`${DOCS_REPO_RAW_BASE_URL}/_wiki_structure.json`, {
      cache: 'no-store', // Ensure data is fetched on every build
    });

    if (!response.ok) {
      console.error(`Failed to fetch wiki structure: ${response.statusText}`);
      return [];
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching wiki structure:', error);
    return [];
  }
}

// Implement generateStaticParams to tell Next.js which pages to pre-render
export async function generateStaticParams() {
  const wikiStructure = await getWikiStructure();
  const slugs: { slug: string }[] = [];

  wikiStructure.forEach(section => {
    section.items.forEach(item => {
      slugs.push({ slug: item.slug });
    });
  });

  return slugs;
}

// Data fetching at build time for SSG
async function getMarkdownContent(slug: string) {
  // Ensure slug is properly encoded for the URL
  const encodedSlug = encodeURIComponent(slug);

  const response = await fetch(`${DOCS_REPO_RAW_BASE_URL}/articles/${encodedSlug}.md`);

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
      {/* Article content will be rendered inside the layout's main section */}
      <div className="prose prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }}></div>
      </div>
    </>
  );
}

