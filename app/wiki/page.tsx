import { redirect } from 'next/navigation';

// Define the base URL for your documentation repository's raw content
const DOCS_REPO_RAW_BASE_URL = 'https://raw.githubusercontent.com/xauth-ecosystem/xauth-docs/main';

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

async function getWikiStructure(): Promise<WikiSection[]> {
  try {
    const response = await fetch(`${DOCS_REPO_RAW_BASE_URL}/_wiki_structure.json`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch (error) {
    return [];
  }
}

export default async function WikiPage() {
  const structure = await getWikiStructure();
  
  let targetSlug: string | null = null;
  const allItems: WikiItem[] = [];

  for (const section of structure) {
    for (const item of section.items) {
      allItems.push(item);
      if (item.default) {
        targetSlug = item.slug;
        break;
      }
    }
    if (targetSlug) break;
  }

  if (!targetSlug && allItems.length > 0) {
    const randomIndex = Math.floor(Math.random() * allItems.length);
    targetSlug = allItems[randomIndex].slug;
  }

  if (targetSlug) {
    redirect(`/wiki/view?slug=${targetSlug}`);
  }

  return (
    <div className="flex-1">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to the Wiki!</h1>
      <p className="text-slate-400 leading-relaxed mb-8">
        No articles found. Please check back later.
      </p>
    </div>
  );
}
