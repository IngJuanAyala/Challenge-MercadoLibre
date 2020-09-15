import React from "react";
import { connect } from "react-redux";

import "../styles/sass/01_page/_productDetail.scss";

const ProductDetail = (props) => {
  debugger;
  const { product } = props;

  let condition = product.condition === "new" ? "Nuevo" : "Usado";

  return (
    <>
      <section className="container-prod-detail">
        <div className="image-detail">
          <section className="wrapper-image-detail">
            <div className="image-product">
              <img src={product.picture} alt={product.title} />
            </div>
            <div className="info-product">
              <section className="wrapper-info-product">
                <div className="info-sales">
                  {condition} - {product.sold_quantity} vendidos
                </div>
                <div className="product-title">{product.title}</div>
                <div className="product-total">{product.price.amount}</div>
                <div className="btn-buy">#btn-buy</div>
              </section>
            </div>
          </section>
        </div>
        <div className="detail-descr-prod">
        <div className="descr-prod-title">Descripción del producto</div>
      
        {product.description}
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(ProductDetail);
