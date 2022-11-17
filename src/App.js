import React from "react";
import { Routes, Route, BrowserRouter,Navigate} from "react-router-dom";
import { HomePage } from './pages/homepage/homepage.component.jsx';
import Shop from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx";
import { auth,createUserProfileDocument} from "./firebase/firebase.utils.js";
import './App.css';
import { setCurrentUser } from "./redux/user/user.actions.js";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors.js"; 
import CheckoutPage from "./components/checkout/checkout.component.jsx";
class App extends React.Component {
  unsubscrieFromAuth=null;
  componentDidMount(){
    this.unsubscrieFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
            this.props.setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
        });
        console.log(userRef.onSnapshot(snapShot=>{console.log(snapShot.data())}))
      }
      else{
        this.props.setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount(){
      this.unsubscrieFromAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
         <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/checkout' element={<CheckoutPage/>}></Route>
          <Route path='/signin' 
            element={
              (
                this.props.currentUser?
                <Navigate to="/"/>
                :<SignInAndSignUpPage></SignInAndSignUpPage>
              )
          }
          ></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
const mapDispatchToProps=(dispatch)=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
 })
export default connect(mapStateToProps,mapDispatchToProps)(App);
