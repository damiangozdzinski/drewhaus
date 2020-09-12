import React from "react"
import { Link } from "gatsby"

const ProductsPastile = (props) => (
    <div className="productsPastile"
    data-sal="slide-up"
    data-sal-delay="150"
    data-sal-easing="ease">
        <div id="pastTop"></div>
        <div id="pastLeft"></div>
        <div id="pastBottom"></div>
        <div id="pastRight"></div>

        <div className="productsPastileImg">
            <img src={props.img} alt="nie działa" />
        </div>
        <p id="productsPastileTitle">{props.title}</p>

        <Link to={props.number} id="moreButton">
            więcej &gt;
        </Link>
    </div>
)


export default ProductsPastile


