import Link from 'next/link';

type Props = {
  posts: any[];
};

const Posts = ({ posts }: Props) => {
  return (
    <ul className="container posts">
      {posts.map((post: any) => (
        <li key={post.is}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
