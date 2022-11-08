import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter as createRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import ErrorPage from "./404";
import Home from "./components/Home";
import Root from "./routes/root";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Home />
  }
]);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
