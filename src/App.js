import React from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav/Nav'
import '../node_modules/react-modal-video/scss/modal-video.scss'
import './App.css'
import Videos from './Videos/Videos'
import About from './About/About'
import Contact from './Contact/Contact'
import eyeSiteTitle from './img/black.png'
import eyeSiteTitlePink from './img/hotpink-title.png'
import Login from './Login/Login'
import CreateAccount from './CreateAccount/CreateAccount'
import Submit from './Submit/Submit'

class App extends React.Component {
    render () {
      return (
        <div>
        <header>
        <title>EYE SITE</title>
        </header>
        <section>
        <Nav />
        <Route
              path='/about'
              component={About}/>
        <Route
              exact path='/videos'
              component={Videos}/>
        <Route
        path = '/login'
        component={Login}/>
        <Route
        path = '/create-account'
        component={CreateAccount}/>
        <Route
        path = '/submit'
        component={Submit}/>
        <Route
        path = '/contact'
        component={Contact}/>
        </section>
        <section className='footer'>
        <div>
        </div>
        <div className="imageBox">
        <Link to={'/videos'}>
					<div class="imageInn1">
          <img src={eyeSiteTitle} alt="Eye Site" className='title-img' />
					</div>
					<div class="hoverImg1">
          <img src={eyeSiteTitlePink} alt="Eye Site Pink" className='title-img' />
          <h1 className='sore-eyes'>A Site For Sore Eyes</h1>
					</div>
          </Link>
				</div>
        </section>
      </div>
       
    )}
}

export default App;