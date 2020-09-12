import React, {useState} from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/products.css"


import img1 from '../images/product6/281.jpg'
import img2 from '../images/product6/265.jpg'
import img3 from '../images/product6/279.jpg'
import img4 from '../images/product6/298.jpg'
import img5 from '../images/product6/299.jpg'
import img6 from '../images/product6/313.jpg'
import img7 from '../images/product6/292.jpg'

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
  {
    original: img7,
    thumbnail: img7,
  }
];

const ProductView5 = () => {

  const [price, setPrice] = useState(10999);
  const [montage, setMontage] = useState("false");
  const [gont, setGont] = useState("false");
  const [painting, setPainting] = useState("false");
  const [floor, setFloor] = useState("false");

  const montageChange = e => {
    setMontage(e);
    montage !== "true" ? setPrice(price + 2200) : setPrice(price - 2200);
  }

  const gontChange = e => {
    setGont(e);
    gont !== "true" ? setPrice(price + 1300) : setPrice(price - 1300);
  }

  const paintChange = e => {
    setPainting(e);
    painting !== "true" ? setPrice(price + 800) : setPrice(price - 800);
  }

  const floorChange = e => {
    console.log(e);
    setFloor(e);
  }

  return(
  <Layout>
    <SEO title="Domek letniskowy"
        description = { SEO.description } />
    <div className="banner">
        <div className="bannerPlate">
          <p>Domek letniskowy</p>
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
          <div id="productTitle">Domek Letniskowy 6mx4m</div>
          <div id="productPrice">{price}zł
          </div>
          <div className="productOption">
          <h3>Dodatkowe opcje:</h3>
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
              <div className="productDescriptionText"
                   data-sal="slide-right"
                   data-sal-delay="100"
                   data-sal-easing="ease">
                  <h3>Opis</h3>
                  <p>
                  Drewniany domek letniskowy o powierzchni całkowitej 24m<sup>2</sup> z powierzchnią domku 16m<sup>2</sup> oraz tarasem o powierzchni 8m<sup>2</sup>, stanowi zarówno elegancką ozdobę ogrodu jak i doskonałe miejsce do wypoczynku. Taras stanowi doskonałą lokalizację dla mebli ogrodowych. Doskonale sprawdzi się jako alternatywa dla murowanej altany. Domek letniskowy drewhaus to gwarancja solidności i jakości na długie lata!<br/>
                  </p>
                  <h3>Dane techniczne:</h3>
                  <ul>
                    <li>Materiał: suszone drewno świerkowe</li>
                    <li>Wymiar zewnętrzny całkowity: 600cm x 400cm </li>
                    <li>Wymiar zewnętrzny ścian: 581cm x 381cm</li>
                    <li>Wymiar wewnętrzny ścian: 375 cm x 375 cm</li>
                    <li>Wysokość ściany: 200 cm</li>
                    <li>Wysokość do szczytu:240cm</li>
                    <li>Powierzchnia dachu: 27m<sup>2</sup></li>
                    <li>Grubość ścian: aż 34 mm</li>
                    <li>Grubość deski dachowej: 18mm</li>
                    <li>Grubość deski podłogowej: 19mm</li>
                    <li>Okno: oszklone 115cm x 80cm</li>
                    <li>Drzwi: oszklone 140cm x 185cm</li>
                  </ul>
                  <p><b>Domki letniskowe możesz obejrzeć w Gnieźnie! Zajrzyj do zakładki&nbsp; 
                    <Link to="/contact" style={{ color: '#765F52' }} >
                      kontakt
                    </Link> i sprawdź gdzie nas znajdziesz!</b></p>
              </div>
          </div>
      </div>
    </div>
  </Layout>
  )}

export default ProductView5


