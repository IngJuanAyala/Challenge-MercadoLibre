import React from "react";
import { connect } from "react-redux";
import CurrencyFormat from "react-currency-format";

import "../styles/sass/01_page/_productDetail.scss";

const ProductDetail = (props) => {
  const { product } = props;

  let condition = product.condition === "new" ? "Nuevo" : "Usado";
  let decimals = product.price.decimals === 0 ? "00" : product.price.decimals;

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
                <div className="product-total">
                  {product.price && product.price.amount && (
                    <CurrencyFormat
                      value={product.price.amount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  )}
                  <sup>{decimals}</sup>
                </div>
                <div className="btn-buy">Comprar</div>
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
