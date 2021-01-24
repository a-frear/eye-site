import React from 'react'
import './Contact.css'

class Contact extends React.Component {
    render () {
        return (
            <section className="contact">
                <form   action="https://formspree.io/f/xeqpnrre" method="POST">
                    <fieldset>
                        <legend>Contact:</legend>
                        <div>
                            <label for="name">Name:</label>
                            <input id="name" type="text" name="name"/>
                            <div>
                                <label for="email-form">Email:</label>
                                <input id="email-form" type="text" name="email"/>
                            </div>
                            <div>
                                <label for="message">Message:</label>
                                <textarea id="message" name="message"></textarea>
                            </div>
                        </div>
                    <button type="submit">Submit</button>
                    </fieldset>
                </form>
                <div>
                    <h3 className='reach-out'> Or reach out directly to <a id="email" href="mailto:eyesiteclub@gmail.com" target="_blank" rel="noreferrer">eyesiteclub@gmail.com</a></h3>
                </div>
            </section>
        )
    }
}

export default Contact