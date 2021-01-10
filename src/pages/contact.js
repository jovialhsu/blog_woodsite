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
        <h4>contact me</h4>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          className="contact-form"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="名字"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="e-mail"
            />
          </label>
          <label>
            Subject
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="主題"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              className="form-control"
              id="message"
              rows="5"
              placeholder="訊息內容"
            />
          </label>
          <div className="button">
            <FormButton type="submit">送出</FormButton>
            <FormButton type="reset">清除</FormButton>
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
