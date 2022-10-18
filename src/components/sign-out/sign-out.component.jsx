import React from "react";
import './sign-out.style.scss';
import FormInput from "../form-input/form-inupt.component";
import CustomButton from "../custom-button/custom-button.component";
class SignOut extends React.Component {
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit(e){
        e.preventDefault();
    }
    handleChange(e){
        
    }
    render() {
        return (
            <div className="sign-out">
                <h2>I don't have an account</h2>
                <span className="title">Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name='name'
                        type='text'
                        label='display Name'
                        value={this.state.name}                   
                    />
                    <FormInput
                    
                    handleChange={this.handleChange}
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                    />
                    <FormInput
                    
                    handleChange={this.handleChange}
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name='confirm password'
                        type='password'
                        label='password'
                        value={this.state.confirmPassword}
                    />
                    <CustomButton type='submit' children={'sign up'} />
                </form>
            </div>
        )
    }
}
export default SignOut;