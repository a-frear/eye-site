import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends Component{
    render(){
        return(
            <section className='login'>
            <fieldset>
            <legend>Log in</legend>
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
            <Link to={'/create-account'} className='create-account-link'>Create account</Link>
            </section>
        )
    }
}

export default Login;