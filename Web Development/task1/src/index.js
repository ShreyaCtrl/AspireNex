import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);
