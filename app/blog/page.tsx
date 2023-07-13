'use client';

import '../blog/blog.css';
import { useEffect, useState } from 'react';
import { getAllPosts } from '@/services/getPosts';
import { Posts } from '@/components/Posts';
import { PostSearch } from '@/components/PostSeacrch';

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? (
        <h3 className="container">Loading...</h3>
      ) : (
        <Posts posts={posts} />
      )}
    </>
  );
}
