import { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {

  // BEFORE RRD 6.4
  // const [error, setError] = useState();
  // const [post, setPost] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // const params = useParams();
  // const { id } = params;

  // useEffect(() => {
  //   async function loadPost() {
  //     setIsLoading(true);
  //     try {
  //       const post = await getPost(id);
  //       setPost(post);
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //     setIsLoading(false);
  //   }

  //   loadPost();
  // }, [id]);

  //=========RRD 6.4 ===========

  const postData = useLoaderData();

  return (
    <>
      <BlogPost title={postData.title} text={postData.body} />
    </>
  );
}

export default PostDetailPage;

export function loader(params) {
  const postId = params.id
  return getPost(postId);
}