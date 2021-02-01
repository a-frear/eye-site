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
                            <h3 className='submit-desc'>Submit your own Eye Content!</h3>
                            <label for="name">Name:</label>
                            <input id="name" type="text" name="name" required/>
                            <div>
                                <label for="email">Email:</label>
                                <input id="email" type="email" name="email" required/>
                            </div>
                            <div>
                                <label for="message">Youtube link:</label>
                                <input id="url" name="url" type="url" required/>
                            </div>
                            <div>
                                <label for="message">Why do you wish to screen on EYE SITE?</label>
                                <textarea id="message" name="message" type="text" required></textarea>
                            </div>
                        </div>
                    <button type="submit">Submit</button>
                    </fieldset>
                </form>
                <div>
                    <h3 className='submit-reach-out'> Reach out to <a id="email" href="mailto:eyesiteclub@gmail.com" target="_blank" rel="noreferrer">eyesiteclub@gmail.com</a> with any questions.</h3>
                </div>
            </section>
        )
    }
}

export default Submit