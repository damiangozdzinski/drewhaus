import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/contact.css"
import logoWhite from "../images/white_logo.png"

const Contact = () => (
  <Layout>
    <SEO title="Kontakt"
        description = { SEO.description } />
    <div className="bannerContact">
        <div className="bannerPlateContact">
          <p>Drew-Haus | Kontakt</p>
        </div>
    </div>
    <div className="productsPlateContact">
        <div className= "contactRow">
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.560047482151!2d17.64939853537483!3d52.5413937750611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704912a0d143ba3%3A0xb8b9b40a917fa956!2sFranklina%20Roosevelta%20129%2C%2062-200%20Gniezno!5e0!3m2!1spl!2spl!4v1588785540117!5m2!1spl!2spl" id="mapFrame" title="map"></iframe>
            </div>
            <div className="aboutInfo">
                <img className="contactImage" src={logoWhite} alt="contactLogo"/>
                <p className="aboutInfoRow">ul.Roosevelta 129</p>
                <p className="aboutInfoRow">62-200 Gniezno</p>
                <p className="aboutInfoRow">tel.: +48-784-333-334</p>
                <p className="aboutInfoRow">e-mail: Kontakt@drew-haus.pl</p>
                <div className="iconsRow">
                <a href =  "https://www.facebook.com/Drew-Haus-110916290542031" target="blank"><FontAwesomeIcon icon={ faFacebook } size = { 60 } style = {{ fontSize: 50, marginRight: 10, marginTop: 10, color: '#fff'}} className="socialIcon"/></a>
            <a href = "https://www.instagram.com/drew__haus/" target="blank"><FontAwesomeIcon icon={ faInstagram } size = { 60 } style = {{ fontSize: 50, marginLeft: 10, marginTop: 10, color: '#fff'}} className="socialIcon"/></a>
                </div>
            </div>
        </div>

    </div>
    <div className="productsInfoBannerContact">
        <p
          className = "infobanner"
          data-sal="slide-right"
          data-sal-delay="600"
          data-sal-easing="ease">
            Zajrzyj na naszego facebooka lub poleć nas znajomym!
        </p>
    </div>
  </Layout>
)

export default Contact


