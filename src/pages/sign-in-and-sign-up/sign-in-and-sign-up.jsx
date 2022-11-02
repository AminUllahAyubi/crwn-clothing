
import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignOut from "../../components/sign-up/sign-out.component";
import './sign-in-and-sign-up.scss';
const SignInAndSignUpPage=()=>{
    return(
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignOut/>
        </div>
    )
}
export default SignInAndSignUpPage;