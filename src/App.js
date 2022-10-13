import React from "react";
import {Routes, Route,BrowserRouter} from "react-router-dom";
import { HomePage } from './pages/homepage/homepage.component.jsx';
import Shop from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
