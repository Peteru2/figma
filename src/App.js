// import './App.css';
import {Route, Routes} from "react-router-dom";
import Dashboard from './routes/Dashboard.js';

import * as React from 'react'

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element = {<Dashboard />} />
      </Routes > 

        
        
    </>
  );
} 

export default App;
