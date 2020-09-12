import { Link } from "gatsby"
import React, { Component } from 'react' 
import PropTypes from "prop-types"
import bronzeLogo from "../images/bronze-logo.png"

import '../components/layout.css'

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      show: 0,
      flag: true
    }
  } 

  componentDidMount() {
    window.innerWidth > 1124 ? 
    this.setState({ show: 0, flag: false })
    :
    this.setState({ show: -100, flag: false })
  }

  onShow = () => {
    console.log(window.innerWidth);
    this.state.flag ? 
    this.setState({ show: 0, flag: false })
    :
    this.setState({ show: -100, flag: true })
  }

  onCheck = () => {
    window.innerWidth > 1124 ? 
    this.setState({ show: 0, flag: true })
    : 
    this.setState({ show: -100, flag: true })
  }

render() {
  return(
    <>
    <header
      className="header"
      style={{
      background: `#765F52`,
      width:  '96.vw',
      height: 80,
      marginTop: 0,
      position: 'relative',
      top: 0,
      right: 0,
    }}
  >

    <div className="logoCircle">
      <img  className="bronzeLogo" src={bronzeLogo} alt="logo"/>
    </div>
    <div className="hamburger" onClick ={ this.onShow }>
      <div className="hamburger1"></div>
      <div className="hamburger2"></div>
      <div className="hamburger3"></div>
    </div>
    <ul style={{ 
        transform: `translateX(${this.state.show}vw)` }}>
      <li className = "navBtn" onClick={this.onCheck}>
        <Link className="navBtnText" to="/">Strona główna</Link>
      </li>
      <li className = "navBtn" onClick={this.onCheck}>
        <Link className="navBtnText" to="/products">Produkty</Link>
      </li>
      <li className = "navBtn" onClick={this.onCheck}>
        <a className="navBtnText" target="blank" href="https://drew-haus.olx.pl/">OLX</a>
      </li>
      <li className = "navBtn" onClick={this.onCheck} >
        <Link className = "navBtnText" to="/contact">Kontakt</Link>
      </li>
    </ul>
  </header>
  </>
  )
}


}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



