import type { Metadata } from "next";
import Link from "next/link"
import '../blog/blog.css'

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60
    }
  });

  if (!response.ok) throw new Error('Ooops! Bad request')

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>Blog page</h1>
      <ul className="container posts">
        {posts.map((post: any) => (
          <li key={post.is}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
