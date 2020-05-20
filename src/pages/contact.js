// Gatsby supports TypeScript natively!
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Widget from "../components/widget"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", message: "", submitted: false, submitting: false };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (event) => {
    const { email, name, message, submitted, submitting } = this.state;

    event.preventDefault();
    if (submitted || submitting || email.length < 1 || name.length < 1 || message.length < 1) {
      return;
    }
    this.setState({ submitting: true }, () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, message })
      };
      fetch('https://getform.io/f/2e528e83-1312-4b12-8d2b-5e35f62b06d6', requestOptions)
        .then(response => this.setState({ submitted: true }))
        .catch(error => this.setState({ submitting: false }));
    })
  }

  render() {
    const { name, message, email, submitted, submitting } = this.state;
    return (
      <Layout>
        <SEO title="Contact" />
        {submitted ?
          <>
            <h2>Message sent!</h2>
            <div className="form-preview">
              <p><span className="bold">Name:</span> {name}</p>
              <p><span className="bold">Email:</span> {email}</p>
              <p><span className="bold">Message:</span> {message}</p>
            </div>
          </>
          :
          <>
            <h2>Contact</h2>
            <form
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="email">
                Email
              </label>
              <input required type="email" name="email" onChange={this.handleChange} />
              <label htmlFor="name">
                Name
              </label>
              <input required type="text" name="name" onChange={this.handleChange} />
              <label htmlFor="message">
                Message
              </label>
              <textarea required name="message" onChange={this.handleChange} />
              <div className="button-container">
                {submitting ? <button>Sending...</button> : <button type="submit">Send</button>}
              </div>
            </form>
          </>
        }
        <Widget link="/" title="Back"></Widget>
      </Layout >
    )
  }
}

export default Contact
