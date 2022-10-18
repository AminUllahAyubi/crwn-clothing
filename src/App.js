import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from './pages/homepage/homepage.component.jsx';
import Shop from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx";
import { auth } from "./firebase/firebase.utils.js";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubsribeFromAuth=null;
  componentDidMount(){
    this.unsubsribeFromAuth=auth.onAuthStateChanged((user)=>{
      this.setState({currentUser:user})
    })
  }
  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}></Header>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/signin' element={<SignInAndSignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;
