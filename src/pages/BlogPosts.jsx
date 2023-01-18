import { useLoaderData } from 'react-router-dom';
import Posts from '../components/Posts';
import { getPosts } from '../util/api';
// import { useState, useEffect } from 'react';



function BlogPostsPage() {
  
// BEFORE REACT-ROUTER-6.4

  // const [error, setError] = useState();
  // const [posts, setPosts] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function loadPosts() {
  //     setIsLoading(true);
  //     try {
  //       const posts = await getPosts();
  //       setPosts(posts);
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //     setIsLoading(false);
  //   }

  //   loadPosts();
  // }, []);

  const postData = useLoaderData();


  return (
    <>
      <h1>Our Blog Posts</h1>
      
      
      <Posts blogPosts={postData} />
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  return getPosts();
}