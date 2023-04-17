import React from "react";

import RelatedProducts from "./RelatedProducts/RelatedProducts";

import "./SingleProduct.scss";
import prod from '../../assets/products/earbuds-prod-1.webp'

const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod} alt="" />
                    <div className=" right">
                        


                    </div>
                   </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    )
   
};

export default SingleProduct;