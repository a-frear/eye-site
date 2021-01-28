import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import config from '../config'

class Login extends Component{

    handleLogin() {
        fetch(config.API_ENDPOINT_login, {
            method: 'OPTIONS',
            headers: {
                'content-type': 'application/json',
              }
            })
            .then(res => {
              if (!res.ok) {
                throw new Error(res.status)
              }
              return res.json()
            })
            .catch(error => console.log(error))
          }
    

    render(){
        return(
            <section className='login'>
            <button className='log-in-button' onClick={this.handleLogin}>Log In</button>
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