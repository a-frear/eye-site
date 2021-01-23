import React, { Component } from 'react'
import './CreateAccount.css'

class CreateAccount extends Component{
    render(){
        return(
            <section className='create-account'>
            <fieldset>
            <legend>Create Account</legend>
            <form>
                <label>Username:</label>
                <input type='text' id='username'/>
                <label>Password:</label>
                <input type='text' id='password'/>
                <div>
                <button type='submit'>Submit</button>
                </div>
            </form>
            </fieldset>
            </section>
        )
    }
}

export default CreateAccount;