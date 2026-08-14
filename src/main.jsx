import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import LoginForm from './components/loginform'
import ProductsPage from './pages/ProductsPage.jsx'
import Signup from './components/signup'
import Wishlist from './components/wishlist'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, errorElement: <ErrorPage /> },
      { path: 'about', element: <AboutPage />, errorElement: <ErrorPage /> },
      { path: 'products', element: <ProductsPage />, errorElement: <ErrorPage /> },
      { path: 'product/:id', element: <ProductPage />, errorElement: <ErrorPage /> },
      { path: 'login', element: <LoginForm />, errorElement: <ErrorPage /> },
      { path: 'signup', element: <Signup />, errorElement: <ErrorPage /> },
      { path: 'wishlist', element: <Wishlist />, errorElement: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
