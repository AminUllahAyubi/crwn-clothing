import React from "react";
import {Routes, Route,BrowserRouter } from "react-router-dom";
import { HomePage } from './pages/homepage/homepage.component.jsx';
import './App.css';
const Hats=()=>{
  return(
    <div>
      <h1>welcome  </h1>
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/hats' element={<Hats/>}></Route>
      </Routes>
    </BrowserRouter>
    //  react-router-dom@6.4.2 is not support switch instead it provide the routes
    // component which directly route the match component
    // <Routes>
    //   <Route path='/' element={<HomePage />} ></Route>
    //   <Route path='/title' element={<Title />}></Route>
    // </Routes>  
  );
}
export default App;
