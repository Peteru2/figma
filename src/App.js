// import './App.css';
import {Route, Routes} from "react-router-dom";
import Dashboard from './routes/Dashboard.js';
import Blog from './routes/Blog.js';


import * as React from 'react'

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element = {<Dashboard />} />
      <Route path ="/Blog" element = {<Blog />} />
      
      </Routes > 

        
        
    </>
  );
} 

export default App;
