import { BrowserRouter, createBrowserRouter ,createRoutesFromElements,Route, RouterProvider, Routes } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as BlogPostsLoader } from './pages/BlogPosts';
import DefferedBlogPosts, { loader as defferedPostsloader } from './pages/DefferedBlogPosts';
import Error from './pages/Error';
import NewPostPage , { action as newPostAction} from './pages/NewPost';
import PostDetailPage, { loader as blogPostLoader }from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} errorElement={<Error/>}>
      <Route index element={<WelcomePage />} />
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<DefferedBlogPosts/>} loader={defferedPostsloader}/>
            {/* <Route index element={<BlogPostsPage />} loader={BlogPostsLoader}/> */}
            <Route path=":id" element={<PostDetailPage />} loader={blogPostLoader}/>
          </Route>
          <Route path="/blog/new" element={<NewPostPage />} action={newPostAction}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
