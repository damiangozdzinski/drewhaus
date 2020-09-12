import React, {useState} from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/products.css"


import img1 from '../images/product1/41.jpg'
import img2 from '../images/product1/44.jpg'
import img3 from '../images/product1/49.jpg'
import img4 from '../images/product1/55.jpg'
import img5 from '../images/product1/57.jpg'
import img6 from '../images/product1/59.jpg'

import ImageGallery from 'react-image-gallery';
 
const images = [
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
  {
    original: img4,
    thumbnail: img4,
  },
  {
    original: img5,
    thumbnail: img5,
  },
  {
    original: img6,
    thumbnail: img6,
  },
];

const ProductView1 = () => {

  const [price, setPrice] = useState(3850);
  const [montage, setMontage] = useState("false");
  const [gont, setGont] = useState("false");
  const [painting, setPainting] = useState("false");
  const [floor, setFloor] = useState("false");

  const montageChange = e => {
    setMontage(e);
    montage !== "true" ? setPrice(price + 1000) : setPrice(price - 1000);
  }

  const gontChange = e => {
    setGont(e);
    gont !== "true" ? setPrice(price + 700) : setPrice(price - 700);
  }

  const paintChange = e => {
    setPainting(e);
    painting !== "true" ? setPrice(price + 500) : setPrice(price - 500);
  }

  const floorChange = e => {
    setFloor(e);
    floor !== "true" ? setPrice(price + 500) : setPrice(price - 500);
  }

  return(
  <Layout>
    <SEO title="Domek letniskowy" 
        description = { SEO.description }/>
    <div className="banner">
        <div className="bannerPlate">
          <p>Domek Ogrodowy</p>
        </div>
    </div>
    <div className="productViewPlate">

      <div className="gallery">
        <ImageGallery slideInterval="2000"  items={images}/>
      </div>
      <div className="productDescription">
          <div id="prodTop"></div>
          <div id="prodLeft"></div>
          <div id="prodBottom"></div>
          <div id="prodRight"></div>
          <div id="productTitle">Domek Ogrodowy 3mx2m</div>
          <div id="productPrice">{price}zł
          </div>
{/* 5,499.00zł - 7,949.00zł */}
          <div className="productOption">
          <h4>Montaż:</h4>
              <select value={ montage } onChange={ val => montageChange(val.target.value)}>
                <option value = "false">Nie</option>
                <option value = "true">Tak</option>
              </select>
              <h4>Gont:</h4>
              <select value={ gont } onChange={ val => gontChange(val.target.value)}>
                <option value = "false">Nie</option>
                <option value = "true">Tak</option>
              </select>
              <h4>Malowanie(bezbarwny impregnat):</h4>
              <select value={ painting } onChange={ val => paintChange(val.target.value)}>
                <option value = "false">Nie</option>
                <option value = "true">Tak</option>
              </select>
              <h4>Podłoga:</h4>
              <select value = { floor } onChange = { val => floorChange(val.target.value)}>
                <option value = "false">Nie</option>
                <option value = "true">Tak</option>
              </select>
              <div className="productDescriptionText"
                   data-sal="slide-right"
                   data-sal-delay="100"
                   data-sal-easing="ease">
                  <h3>Opis</h3>
                  <p>
                    Drewniany domek ogrodowy o powierzchni 6m<sup>2</sup> to prosta i stabilna konstrukcja, która sprawdzi się jako stylowe wyposażenie ogrodu jak i schowek na narzędzia czy inne potrzebne rzeczy do naszego ogrodu. Wymiary zewnętrzne domku wynoszą 300cm x 200cm. Domek ogrodowy drewhaus to gwarancja jakości na długie lata!<br/>
                  </p>
                  <h3>Dane techniczne:</h3>
                  <ul>
                    <li>Materiał: suszone drewno świerkowe</li>
                    <li>Wymiar zewnętrzny całkowity: 300cm x 200cm</li>
                    <li>Wymiar zewnętrzny ścian: 281cm x 181cm</li>
                    <li>Wymiar wewnętrzny ścian: 275cm x 175cm</li>
                    <li>Wysokość ściany: 195cm</li>
                    <li>Wysokość do szczytu: 235cm</li>
                    <li>Powierzchnia dachu: 7,30m<sup>2</sup></li>
                    <li>Grubość ścian: 28mm</li>
                    <li>Grubość deski dachowej: 18mm</li>
                    <li>Drzwi: oszklone 140cm x 185cm</li>
                  </ul>
                  <p><b>Domki ogrodowe możesz obejrzeć w Gnieźnie! Zajrzyj do zakładki&nbsp; 
                    <Link to="/contact" style={{ color: '#765F52' }} >
                      kontakt
                    </Link> i sprawdź gdzie nas znajdziesz!</b></p>
              </div>
          </div>
      </div>
    </div>
  </Layout>
  )}

export default ProductView1


