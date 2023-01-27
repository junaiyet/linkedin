
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registation from './pages/Registation/Registation';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import Post from './components/Post/Post'
import Header from './components/Header/Header';

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
        {
          path:'/profile',
          element:<Profile/>
        },
        {
          path:'/friend',
          element:<Friends/>
        },
        {
          path:'/post',
          element:<Post/>
        },
    
      
  ]);
  return (
    <div className="">
      <Header/>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
