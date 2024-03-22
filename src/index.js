import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import Protected from './pages/AuthLayout';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/components/Login';
import Signup from './pages/components/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/login',
        element:(
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path:'/signup',
        element:(
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      }
    ]
  }
])
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  
);


