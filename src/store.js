import React from "react";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            userEmail:'',
            userPassword:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // let googleProvider=new GoogleAuthProvider();
        // let auth=getAuth();
        // signInWithPopup(
        //     auth,
        //     googleProvider
        // )
        // .then((response)=>{
        //     console.log(response.user)
        // })
        // .catch((error)=>{
        //     alert(error.message)
        // })
    }
    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState(()=>{
            return{[name]:value}
        },()=>console.log(this.state.userEmail,this.state.userPassword))

    }
    render(){
        return(
            <div>
                <h1>Sign In</h1><br/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='userEmail'
                        type='email'
                        placeholder="enter your email"
                        onChange={this.handleChange}
                    ></input>
                    <input
                        name='userPassword'
                        type='password'
                        placeholder="enter your password"
                        onChange={this.handleChange}
                    ></input>
                    <input
                        type='submit'
                        value='sign in'
                    ></input>
                </form>
            </div>
        )
    }
}
export default Form;