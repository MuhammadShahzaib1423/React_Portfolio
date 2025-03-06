
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Layout from './Components/Layout';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { div } from 'framer-motion/client';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,  
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
        path: "/projects",
        element: <Projects />
        },
       
      ]
    }
  
  ]);
 
 



  return( <RouterProvider router={router} />);
  
  
}

export default App