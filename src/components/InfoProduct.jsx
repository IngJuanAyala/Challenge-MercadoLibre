import React from "react";
import CurrencyFormat from "react-currency-format";

const InfoProduct = (props) => {
  const { product } = props;

  let condition = product.condition === "new" ? "Nuevo" : "Usado";
  let decimals = product.price.decimals === 0 ? "00" : product.price.decimals;

  return (
    <>
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
    </>
  );
};

export default InfoProduct;
