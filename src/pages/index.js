import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductPastile from '../components/productPastile'

import img1 from '../images/product1/41.jpg'
import img2 from '../images/product2/75.jpg'
import img3 from '../images/product3/119.jpg'
import img4 from '../images/product4/167.jpg'
import img5 from '../images/product5/224.jpg'
import img6 from '../images/product6/281.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Strona główna"
        description = { SEO.description }
    />
    <div className="woodContent">
        <div className="contentBorder">
          <div id="backgroudMainPlate">
            <p>Domki letniskowe i narzędziowe dla twojego ogrodu.</p> 
          </div>
          
        </div>
    </div>
    <div className="sliderContent">
        <div className="sliderContentHover"></div>
    </div>
    <div className="bronzeContent">
    <div className= "photoBox">
          <h3>Drew-Haus, kim jesteśmy?</h3>
          <p>
            Jesteśmy firmą zajmującą się sprzedażą oraz kompleksowym montażem domków letniskowych, altan ogrodowych oraz nowoczesnych saun ogrodowych.
            Jako nieliczni w Polsce oferujemy domki letniskowe oraz ogrodowe o grubości ścian 34mm wykonanych z suszonego drewna świerkowego. Dach i podłogę również wykonujemy z wysokiej jakości drewna a nie z płyty PDF. Ten aspekt wyróżnia nas na tle konkurencyjnych film. W naszej ofercie znajdziecie domki najwyższej jakości które zapewnią spokój i komfort użytkowania na długie lata. Posiadamy siedzibę na terenie Gniezna gdzie możecie obejrzeć nasze produkty. Wykfalifikowana ekipa służy pomocą w kompleksowym montażu i impregnacji drewna. Wybierając tę opcję prosimy o przygotowanie solidnego podłoża w postaci bloczków betonowych, kostki brukowej lub płyty betonowej. Jeżeli jednak zdecydujecie się na samodzielny montaż otrzymacie od nas wszystkie niezbędne akcesoria do zbudowania swojego domku.
          </p>
        </div>
          <div className= "photoBox1">
            <div 
              data-sal="slide-up"
              data-sal-delay="300"
              className="bronzeContentBigImg">
            </div>
            <div
              data-sal="slide-left"
              data-sal-delay="400"
              data-sal-easing="ease"
              className="bronzeContentSmallImg">
            </div>
          </div>
    </div>
    <div className="productContent">
        <div className="productBanner">
            Produkty DrewHaus dla Ciebie!
        </div>

        <div className="productPastileBox">
          <ProductPastile prodLink="/productview1" prodImg={img1} prodName={"Domek ogrodowy 3mx2m"}/>
          <ProductPastile prodLink="/productview4" prodImg={img4} prodName={"Domek letniskowy 5mx3m"}/>
          <ProductPastile prodLink="/productview6" prodImg={img6} prodName={"Domek letniskowy 6mx4m"}/>
        </div>
        <div className="productPastileBox">

          <Link
              to="/products" 
              className="productOfferButton"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-easing="ease">

              Pełna oferta DrewHaus tutaj >
          </Link>
          <Link
              to="/contact " 
              className="productOfferButton"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-easing="ease">

              Skontaktuj się z nami >
        </Link>
        </div>
    </div>
    <div className="whiteContent">
        <div className = "whiteText">
          <h3>Domki ogrodowe oraz letniskowe </h3>
          <p            
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease">
              Nasze produkty doskonale sprawdzą się jako alternatywa dla murowanego domku na twojej działce. Stanowią też doskonały element ozdoby twojego ogrodu jak i praktyczne pomieszczenie na niezbędne narzędzia ogrodowe i nie tylko.
          </p>

          <h3>Trwałość i komfort na lata</h3>
          <p
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease">
              Jeżeli szukasz trwałego domku letniskowego lub ogrodowego, nasze produkty sprostają Twoim oczekiwaniom. Dzięki wysokiej klasie materiałów oraz impregnacji drewna, nasze domki, które dla Ciebie przygotowaliśmy zapewniają praktyczne i komfortowe użytkowanie na lata.
          </p>
          <h3>Montaż u klienta</h3>
          <p
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease">
              Jeżeli zakupiłeś nasz domek w zakresie usług oferujemy dowóz oraz montaż. Jeśli zdecydujesz się na samodzielne postawienie konstrukcji, dowieziemy domek na ustalony adres i przekażemy Tobie instrukcje oraz inne potrzebne niezbędne elementy.
            </p>
          <h3>Szeroki wybór</h3>
          <p
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease">
              W naszej ofercie znajdziesz zarówno domki ogrodowe jak i letniskowe o różnych wymiarach dzięki czemu masz możliwość wyboru takiego produktu jaki sprosta twoim potrzebom. Jesteś niezdecydowany lub niepewny jaki wybrać? Nic nie szkodzi! Pomożemy i doradzimy Tobie w dokonaniu właściwego wyboru!
          </p>
          <h3>Domki letniskowe - dystrybucja w Gnieźnie</h3>
          <p
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease">
              Jeżeli jesteś zainteresowany zakupem bądź chciałbyś obejrzec nasze produkty serdecznie zapraszamy! Znajdziesz nas w Gnieźnie przy ulicy Roosvelta 129. Mapkę i wszelkie wskazówki dojazdu znajdziesz w zakładce kontakt. Masz pytania? Zadzwoń lub napisz do nas maila!
          </p>
          <h3>DrewHaus w mediach społecznościowych</h3>
          <p
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease">
              Jesteśmy również na Facebooku oraz instagramie, tam znajdziesz więcej zdjęć oraz dodatkowe informacje na temat naszych produktów ale również ofert specjalnych. Poprzez nasze profile możesz również zadać nam pytania o szczegóły. Linki do naszych profili znajdziesz w stopce. 
          </p>
          </div>
    </div>
  </Layout>
)

export default IndexPage
