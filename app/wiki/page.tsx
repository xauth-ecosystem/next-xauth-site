import Head from 'next/head';

export default function WikiPage() {
  return (
    <>
      <Head>
        <title>Wiki | XAuth Ecosystem</title>
      </Head>
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-white mb-6">Welcome to the Wiki!</h1>
        <p className="text-slate-400 leading-relaxed mb-8">
          Please select an article from the menu on the left to view its content.
        </p>
        <div className="prose prose-invert max-w-none">
          <p>This page serves as an index or list of available articles.</p>
          <p>Example articles you can create in your \`xauth-ecosystem/xauth-docs\` repository:</p>
          <ul>
            <li>\`introduction.md\`</li>
            <li>\`getting-started.md\`</li>
            <li>\`faq.md\`</li>
          </ul>
          <p>To view an article, click a link in the sidebar or enter \`/wiki/article-slug\` in the address bar.</p>
        </div>
      </div>
    </>
  );
}
