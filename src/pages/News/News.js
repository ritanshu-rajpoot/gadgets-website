import React from "react";
import "./News.css"
import ProductsCards from "../../components/ProductsCards/ProductsCards";
import ArticleLaptop from "../../assets/images/article_laptop.jpg";
import ArticleMobile from "../../assets/images/article_mobile.jpg";
import ArticleTablet from "../../assets/images/article_tablet.jpg";
const News = () =>{
    return(
        <div className="products-items-collections">
            <ProductsCards
                imageurl={ArticleLaptop}
                heading="Laptop Released in nov 2020"
            />
            <ProductsCards
                imageurl={ArticleMobile}
                heading="Mobile Released in nov 2020"
            />
            <ProductsCards
                imageurl={ArticleTablet}
                heading="Tablet Released in nov 2020"
            />
            <ProductsCards
                imageurl={ArticleLaptop}
                heading="Laptop Released in nov 2020"
            />
            <ProductsCards
                imageurl={ArticleMobile}
                heading="Mobile Released in nov 2020"
            />
            <ProductsCards
                imageurl={ArticleTablet}
                heading="Tablet Released in nov 2020"
            />
        </div>
    )
}
export default News
