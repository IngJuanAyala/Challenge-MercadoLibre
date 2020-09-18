import React from "react";
import { connect } from "react-redux";
import useSEO from "../hooks/useSEO";
import InfoProduct from "./InfoProduct";

import "../styles/sass/01_page/_productDetail.scss";

const ProductDetail = (props) => {
  const { product } = props;

  //Set product category as Metadata title
  useSEO({
    title: product.category && product.category[0],
  });

  return (
    <>
      <section className="container-prod-detail">
        <div className="image-detail">
          <section className="wrapper-image-detail">
            <div className="image-product">
              <img src={product.picture} alt={product.title} />
            </div>
            <InfoProduct product={product} />
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
