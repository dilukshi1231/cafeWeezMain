import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import ContactForm  from "./pages/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/menu",
        element : <Menu/> 
      },
      {
        path : "/about",
        element : <About/> 
      },
      {
        path : "/contact",
        element : <ContactForm/> 
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
