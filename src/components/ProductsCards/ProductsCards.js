import React from "react";
import "./ProductsCards.css"
const ProductsCards = ({imageurl,heading}) =>{
    return(
        <div className="products-card">
            <h2>{heading}</h2>
            <div className="img-box">
                <img src={imageurl} alt=""/>
            </div>
            <div className="texts">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut distinctio laudantium, nemo odit optio. Alias aliquam asperiores culpa distinctio error, facere harum laudantium magni minus molestiae omnis quam recusandae repellendus, totam voluptas. Dolor itaque necessitatibus non quos tempore voluptates.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut distinctio laudantium, nemo odit optio. Alias aliquam asperiores culpa distinctio error, facere harum laudantium magni minus molestiae omnis quam recusandae repellendus, totam voluptas. Dolor itaque necessitatibus non quos tempore voluptates.</p>
            </div>
        </div>
    )
}

export default ProductsCards
