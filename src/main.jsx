import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import './index.css';
import AboutUs from './Pages/AboutUS.jsx';
import Home from './Pages/Home.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/aboutus", 
    element : <AboutUs/>,
  }
])

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <RouterProvider router={router}>

  </RouterProvider>
 </StrictMode>
);
