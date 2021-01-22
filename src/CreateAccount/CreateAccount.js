import React, { Component } from 'react'
import './CreateAccount.css'

class CreateAccount extends Component{
    render(){
        return(
            <section className='create-account'>
            <h1>Create Account</h1>
            <form>
                <label>Username:</label>
                <input type='text' id='username'/>
                <label>Password:</label>
                <input type='text' id='password'/>
                <div>
                <button type='submit'>Submit</button>
                </div>
            </form>
            </section>
        )
    }
}

export default CreateAccount;