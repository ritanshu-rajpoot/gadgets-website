import React from "react";
import "./Home.css"
import laptop from "../../assets/images/main_laptop.jpg"
import Mobile from "../../assets/images/main_mobile.JPG"
import tablet from "../../assets/images/main_tablet.png"
import ProductsCards from "../../components/ProductsCards/ProductsCards";
import ArticleLaptop from "../../assets/images/article_laptop.jpg"
import ArticleMobile from "../../assets/images/article_mobile.jpg"
import ArticleTablet from "../../assets/images/article_tablet.jpg"
const Home = () =>{
    return(
        <div>
            <div className="main-content-section">
                <div className="main-content-article">
                    <h2>Laptop news</h2>
                    <img src={laptop} alt=""/>
                    <div className="main-content-texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aperiam, architecto aspernatur consequatur cupiditate enim ex harum magni minima modi molestiae molestias nisi obcaecati officiis quaerat quas quod vitae.</p>
                    </div>
                </div>
                <div className="main-content-article">
                    <h2>Laptop news</h2>
                    <img src={Mobile} alt=""/>
                    <div className="main-content-texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aperiam, architecto aspernatur consequatur cupiditate enim ex harum magni minima modi molestiae molestias nisi obcaecati officiis quaerat quas quod vitae.</p>
                    </div>
                </div>
                <div className="main-content-article">
                    <h2>Laptop news</h2>
                    <img src={tablet} alt=""/>
                    <div className="main-content-texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aperiam, architecto aspernatur consequatur cupiditate enim ex harum magni minima modi molestiae molestias nisi obcaecati officiis quaerat quas quod vitae.</p>
                    </div>
                </div>
            </div>
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
            </div>
        </div>
    )
}
export default Home
