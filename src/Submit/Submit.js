import React from 'react'
import './Submit.css'

class Submit extends React.Component {
    render () {
        return (
            <section className="submit">
                <form   action="https://formspree.io/f/moqprkke"method="POST">
                    <fieldset>
                        <legend>Submission Form</legend>
                        <div>
                            <label for="name">Name:</label>
                            <input id="name" type="text" name="name"/>
                            <div>
                                <label for="email-form">Email:</label>
                                <input id="email-form" type="text" name="email"/>
                            </div>
                            <div>
                                <label for="message">Link to video:</label>
                                <input id="video-link" type="text" name="video-link"/>
                            </div>
                            <div>
                                <label for="message">Why do you wish to screen on EYE SITE?</label>
                                <textarea id="message" name="message"></textarea>
                            </div>
                        </div>
                    <button type="submit">Submit</button>
                    </fieldset>
                </form>
                <div>
                    <h3> Reach out to <a id="email" href="mailto:eyesiteclub@gmail.com" target="_blank" rel="noreferrer">eyesiteclub@gmail.com</a> with any questions.</h3>
                </div>
            </section>
        )
    }
}

export default Submit