import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function HomePage() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map(fileName => {
    const slug = fileName.replace('.md', '');

    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
    };
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold my-8 text-center">My Blog</h1>
      <ul className="space-y-4">
        {posts.map(({ slug, title, date }) => (
          <li key={slug} className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-pink-500 transition">
            <Link href={`/blog/${slug}`}>
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <p className="text-slate-400 mt-1">{date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}