

import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
// import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import logoWhite from "../images/white_logo.png"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: 0,
          width: '100%',
          padding: 0,
        }}
      >
        <main>{children}</main>
        <footer className="Footer">

          <div className="footerBox">
            <h2>Znajdź nas!</h2>
            <a href =  "https://www.facebook.com/Drew-Haus-110916290542031" target="blank"><FontAwesomeIcon icon={ faFacebook } size = { 60 } style = {{ fontSize: 50, marginRight: 10, marginTop: 10, color: '#fff'}} className="socialIcon"/></a>
            <a href = "https://www.instagram.com/drew__haus/" target="blank"><FontAwesomeIcon icon={ faInstagram } size = { 60 } style = {{ fontSize: 50, marginLeft: 10, marginTop: 10, color: '#fff'}} className="socialIcon"/></a>
          </div>
          <div className="footerBox">
            <h2>Kontakt</h2>
            <p>tel.: +48 784 333 334</p>
            <p>e-mail: kontakt@drew-haus.pl</p>
          </div>
          <div className="footerBox">
            <img src={logoWhite} className="footerLogo" alt="logo"/>
            <p>Drew-Haus</p>
            <p>ul. Roosevelta 129</p>
            <p>62-200 Gniezno</p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
