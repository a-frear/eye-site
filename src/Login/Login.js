import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends Component{
    render(){
        return(
            <section className='login'>
            <h1>Log in</h1>
            <form>
                <label>Username:</label>
                <input type='text' id='username'/>
                <label>Password:</label>
                <input type='text' id='password'/>
                <div>
                <button type='submit'>Submit</button>
                </div>
            </form>
            <Link to={'/create-account'}>Create account</Link>
            </section>
        )
    }
}

export default Login;