import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="error-page">
      <div className="page-center">
        <h3>NOT FOUND</h3>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/" className="btn">
          Back home
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
