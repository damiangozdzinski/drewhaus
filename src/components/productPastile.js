import React from "react"
import { Link } from "gatsby"
const ProductPastile = (props) => (
    <div className="productPastile"
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-easing="ease">
        <div id="pastTop"></div>
        <div id="pastLeft"></div>
        <div id="pastBottom"></div>
        <div id="pastRight"></div>

        <div className="productPastileImg">
            <img src={props.prodImg} alt="nie działa"/>
        </div>
        <p id="productPastileTitle">{props.prodName}</p>

        <Link to={props.prodLink} id="moreButton">
            więcej >
        </Link>
    </div>
)


export default ProductPastile


