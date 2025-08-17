// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Next.js Blog',
  description: 'A simple blog built with Next.js and Markdown',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100">
        <div className="min-h-screen flex flex-col">
          <header className="bg-slate-800 p-4 border-b border-slate-700">
            <nav className="max-w-2xl mx-auto">
              <Link href="/" className="text-2xl font-bold text-white hover:text-pink-500 transition">
                My Blog
              </Link>
            </nav>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="bg-slate-800 p-4 border-t border-slate-700 mt-8">
            <p className="text-center text-slate-400">© 2025 My Awesome Blog</p>
          </footer>
        </div>
      </body>
    </html>
  );
}