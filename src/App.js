
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registation from './pages/Registation/Registation';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';


function App() {
  const router = createBrowserRouter([
        {
          path:'/',
          element:<Registation/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/home',
          element:<Home/>
        },
        {
          path:'/forgot',
          element:<ForgotPassword/>
        },
      
  ]);
  return (
    <div className="">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
