import Link from 'next/link';
import Head from 'next/head';
import WikiSidebar from "@/components/WikiSidebar"; // Import the new client component

interface WikiItem {
  slug: string;
  label: string;
  default?: boolean;
}

interface WikiSection {
  title: string;
  slug?: string;
  items: WikiItem[];
}

// Define the base URL for your documentation repository's raw content
const DOCS_REPO_RAW_BASE_URL = 'https://raw.githubusercontent.com/xauth-ecosystem/xauth-docs/main';

async function getWikiStructure(): Promise<WikiSection[]> {
  try {
    const response = await fetch(`${DOCS_REPO_RAW_BASE_URL}/_wiki_structure.json`, {
      cache: 'force-cache', // Ensure data is fetched at build time for SSG
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

export default async function WikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const wikiStructure = await getWikiStructure(); // Fetch data at build time

  return (
    <>
      <Head>
        <title>Wiki | XAuth Ecosystem</title> {/* Default title for wiki section */}
      </Head>
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row gap-16">
        <WikiSidebar wikiStructure={wikiStructure} loading={false} /> {/* Pass data to client component */}

        <main className="flex-1">
          {children}
        </main>
      </div>
    </>
  );
}
