import React, { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom';
import Posts from '../components/Posts';
import { getSlowPosts } from '../util/api';

const DefferedBlogPosts = () => {

    const loaderData = useLoaderData();
  return (
    <>
        <h1>Our Blog Posts</h1>
        <Suspense fallback={<p>Loading...</p>}>
            <Await 
                resolve={loaderData.posts}
                errorElement={<p>Error loading Posts.</p>}
            >
                {(loadedPosts) => <Posts blogPosts={loadedPosts}/>}
            </Await>
        </Suspense>
        
    </>
  )
}

export default DefferedBlogPosts;

export async function loader() {
    return defer ({ posts: getSlowPosts()});

    // in the defer function we can define different data to be loaded either by waiting for it to be fetched first by adding 'await' to it or just fetching it like so above
    // eg: to wait we do as follows:
    // return defer ({ somekey: await somedatafunction()})
}