'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

interface WikiSidebarProps {
    wikiStructure: WikiSection[];
    loading: boolean;
}

export default function WikiSidebar({ wikiStructure, loading }: WikiSidebarProps) {
    const pathname = usePathname();
    const currentSlug = pathname.split('/').pop();

    return (
        <aside className="w-full md:w-80 shrink-0">
            <nav className="md:sticky md:top-32 space-y-12">
                {loading ? (
                    <div><h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 break-words">Loading Wiki...</h5></div>
                ) : wikiStructure.length > 0 ? (
                    wikiStructure.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 break-words">{section.title}</h5>
                            <ul className="space-y-6 border-l border-slate-800 ml-1">
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className={`pl-6 ${currentSlug === item.slug ? 'border-l-2 border-blue-600 -ml-px text-white font-bold uppercase text-xs tracking-widest break-words' : 'text-slate-500 hover:text-white transition cursor-pointer font-bold uppercase text-xs tracking-widest break-words'}`}>
                                        <Link href={`/wiki/${item.slug}`} className="block">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <div>
                        <h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 break-words">No Wiki Sections</h5>
                        <p className="text-slate-500 text-sm">
                            Could not load wiki structure. Please check the `_wiki_structure.json` in your documentation repository.
                        </p>
                    </div>
                )}
            </nav>
        </aside>
    );
}
