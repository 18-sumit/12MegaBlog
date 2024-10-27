import { Children, StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import ReactDOM from 'react-dom/client';
import { AuthLayout } from './components/index.js'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'


import AddPost  from './components/pages/AddPost.jsx'
import Signup from './components/pages/Signup.jsx'
import EditPost  from './components/pages/EditPost.jsx'
import Home from './components/pages/Home.jsx'
import Login from  './components/pages/Login.jsx'

import Post from  './components/pages/Post.jsx'
import AllPosts from  './components/pages/AllPosts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}> // to make sure that we don't bypass the routes manually even without login
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false} >
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: '/all-post',
        element: (
          <AuthLayout authentication >
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: '/addpost',
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: '/post/:slug',
        element: <Post />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider  router={router} />
    </Provider>
  </StrictMode>,
)
