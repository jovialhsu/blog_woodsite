import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FormButton } from "../components/Button"
const ContactForm = () => (
  <Layout>
    <SEO title="contact 🎉" />
    <form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <FormButton type="submit">Send</FormButton>
      <FormButton type="reset">Clear</FormButton>
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactForm
