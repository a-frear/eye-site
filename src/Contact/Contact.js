import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <section className="contact">
        <form action="https://formspree.io/f/xeqpnrre" method="POST">
          <fieldset>
            <legend>Contact:</legend>
            <div>
              <label for="name">Name:</label>
              <input id="name" type="text" name="name" required />
              <div>
                <label for="email">Email:</label>
                <input id="email" type="email" name="email" required />
              </div>
              <div>
                <label for="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  required
                ></textarea>
              </div>
            </div>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
        <div>
          <h3 className="reach-out">
            {" "}
            Or reach out directly to{" "}
            <a
              id="email"
              href="mailto:eyesiteclub@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              eyesiteclub@gmail.com
            </a>
          </h3>
        </div>
      </section>
    );
  }
}

export default Contact;
