import React from "react";
import './sign-out.style.scss';
import FormInput from "../form-input/form-inupt.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth,createUserProfileDocument } from "../../firebase/firebase.utils";
class SignOut extends React.Component {
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert(`password don't match`);
            return;
        }
         try{
            const{user}=await auth.createUserWithEmailAndPassword(
                email,password
            );
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
         }catch(error){
            console.error(error);
         }
    }
    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div className="sign-up">
                <h2>I don't have an account</h2>
                <span className="title">Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name='displayName'
                        type='text'
                        label='Display Name'
                        value={this.state.displayName}
                        // required
                    />
                    
                    <FormInput
                    
                    handleChange={this.handleChange}
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        // required
                    />
                    <FormInput
                    
                    handleChange={this.handleChange}
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        // required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name='confirmPassword'
                        type='password'
                        label='Confirm password'
                        value={this.state.confirmPassword}
                        // required
                    />
                    <div className="button">
                        <CustomButton type='submit' children={'sign up'} />
                    </div>
                </form>
            </div>
        )
    }
}
export default SignOut;