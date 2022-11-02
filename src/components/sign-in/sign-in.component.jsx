import React from "react";
import './sign-in.style.scss';
import FormInput from "../form-input/form-inupt.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import {auth, signInWithEmailAndPassword } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit =async event=>{
        event.preventDefault();
        const {email,password}=this.state;
        try{    
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }catch(error){
            console.log(error);
        }
    }
    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState(()=>{
            return{[name]:value}
        })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                       handleChange={this.handleChange}
                       type='email'
                       name='email'
                       value={this.state.email}
                       label={'email'}  
                    >
                    </FormInput>
                    <FormInput 
                       handleChange={this.handleChange}
                       type='password'
                       name='password'
                       value={this.state.password}
                       label={'password'}  
                    >
                    </FormInput>
                    <div className="custom-buttons">
                        <CustomButton type='submit' children={'sign in'}/>
                        <CustomButton  
                            children={'sign in with google'}
                            isGoogleSignIn
                            onClick={signInWithGoogle}
                            />
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;