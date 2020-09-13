import React from "react";

import "../styles/sass/01_page/_productDetail.scss";

const SearchBox = () => (
  <>
      <section className="container-prod-detail">
          <div className="image-detail">
            <section className="wrapper-image-detail">
                <div className="image-product">#Image-product</div>
                <div className="info-product">
                     <section className="wrapper-info-product">
                        <div className="info-sales">#info-sales</div>
                        <div className="product-title">#product-title</div>
                        <div className="product-total">#product-total</div>
                        <div className="btn-buy">#btn-buy</div>
                    </section>
                
                </div>
            </section> 
          </div>
          <div className="detail-descr-prod">#detail-descr-prod</div>
      </section> 
  </>
);
export default SearchBox;
