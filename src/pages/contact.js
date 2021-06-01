import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FormButton } from "../components/Button"
const ContactForm = () => (
  <Layout>
    <SEO title="contact 📮" />
    <section className="contact-page">
      <div className="page-center">
        <h2>contact me</h2>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          className="contact-form"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="怎麼稱呼"
            /><label htmlFor="name">Name</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="電子郵件"
            /><label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              id="sub"
              placeholder="Subject!"
            /><label htmlFor="sub">Subject</label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              rows="5"
              placeholder="訊息內容"
            /><label htmlFor="message">Message</label>
        
          <div className="button">
            <FormButton type="reset">清除</FormButton>
            <FormButton type="submit">送出</FormButton>
          </div>
        </form>
      </div>
      <Link to="/" className="btn">
        back home
      </Link>
    </section>
  </Layout>
)

export default ContactForm
