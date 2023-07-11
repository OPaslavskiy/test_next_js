import type { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <>
      <h1 className="container">{post.title}</h1>
      <p className="container">{post.body}</p>
    </>
  );
}
