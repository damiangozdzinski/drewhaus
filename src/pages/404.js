import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logoWhite from "../images/white_logo.png"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404"
        description = { SEO.description } />
    <div className="ErrPattern">
      <h1 className="ErrPatternText">Coś poszło nie tak.</h1>
      <p className="ErrPatternText">Serdecznie przepraszamy, spróbuj odświeżyć stronę. Jeżeli problem będzie się powtarzał, prosimy o kontakt</p>
      <h2 className="ErrPatternText">Zespół DrewHaus</h2>
      <div className="ErrPatternLogoCircle">
        <img src={logoWhite} alt="logo"/>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
