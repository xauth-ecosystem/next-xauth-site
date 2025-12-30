import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | XAuth Ecosystem</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen pt-32 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-300 mb-4">Page Not Found</h2>
        <p className="text-lg text-slate-400 max-w-md mb-8">
          Sorry, we could not find the page you are looking for. It might have been moved or deleted.
        </p>
        <Link href="/" className="text-blue-500 hover:underline transition">
          Return to Homepage
        </Link>
      </div>
    </>
  );
}
