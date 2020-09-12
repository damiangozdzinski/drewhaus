import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/products.css"
import ProductsPastile from '../components/productsPastile'

import img1 from '../images/product1/41.jpg'
import img2 from '../images/product2/75.jpg'
import img3 from '../images/product3/119.jpg'
import img4 from '../images/product4/167.jpg'
import img5 from '../images/product5/224.jpg'
import img6 from '../images/product6/281.jpg'

const Products = () => (
  <Layout>
    <SEO title="Produkty"
        description = { SEO.description } />
    <div className="banner">
        <div className="bannerPlate">
          <p>Drew-Haus | Produkty</p>
        </div>
    </div>
    <div className="productsPlate">
        <div className="subCategory">
          <p>Domki ogrodowe</p>
        </div>
        <div className="PlateRow">
            <ProductsPastile title="Domek ogrodowy 3x2m" number="/productview1" img={img1}/>
            <ProductsPastile title="Domek ogrodowy 3x3m" number="/productview2" img={img2}/>
            <ProductsPastile title="Domek ogrodowy 4x3m" number="/productview3" img={img3}/>
        </div>
        <div className="PlateRow">
            <ProductsPastile title="Domek ogrodowy 4x4m" number="/productview7" img={img3}/>
        </div>
        <div className="subCategory">
          <p>Domki letniskowe</p>
        </div>
        <div className="PlateRow">
            <ProductsPastile title="Domek letniskowy 5x3m" number="/productview4" img={img4}/>
            <ProductsPastile title="Domek letniskowy 5x4m" number="/productview5" img={img5}/>
            <ProductsPastile title="Domek letniskowy 6x4m" number="/productview6" img={img6}/>
        </div>
    </div>
    <div className="productsInfoBanner">
        <p
          className = "infobanner"
          data-sal="slide-right"
          data-sal-delay="600"
          data-sal-easing="ease">
            Jesteś zainteresowany lub masz jakieś pytania? Zadzwoń!
        </p>
    </div>
  </Layout>
)

export default Products


