import React from "react";
import { connect } from "react-redux";

import "../styles/sass/01_page/_resultSearch.scss";

const ResultSearch = (props) => {
  debugger;
  const { product } = props;

  return (
    <>
      <section className="container-prods-list">
        <div className="prod-lt-img">
          <img
            src={product.picture}
            alt={product.title}
            width="100"
            heigth="100"
          />
        </div>
        <div className="prod-lt-descr">
          <section className="prod-lt-descr-wrapper">
            <div className="prod-price">${product.price.amount}</div>
            <div className="prod-name">{product.title}</div>
          </section>
        </div>
        <div className="prod-lt-loc">#loca-prod</div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(ResultSearch);
