import React from "react";
import { connect } from "react-redux";
import { fetchProductsById } from "../redux/actions/productsActions";

import "../styles/sass/01_page/_resultSearch.scss";

const ResultSearch = (props) => {
  const { product } = props;

  const handleProductDetail = (id) => {
    fetchProductsById(props, id);
  };

  return (
    <>
      <section className="container-prods-list">
        <div className="prod-lt-img">
          <img
            className="picture-prod"
            width="200"
            heigth="100"
            src={product.picture}
            alt={product.title}
            onClick={() => handleProductDetail(product.id)}
          />
        </div>
        <div className="prod-lt-descr">
          <section className="prod-lt-descr-wrapper">
            <div className="prod-price">
              ${product.price && product.price.amount } 
              
               { product.free_shipping && 
                <img src="../src/assets/ic_shipping.png"
                    alt="free shipping"
                    className="img-free-shipping" 
                    width="18"
                    heght="18"
                  /> }

            </div>
          
            
         
            <div className="prod-name">
              <a href="#" onClick={() => handleProductDetail(product.id)}>
                {product.title} 
              </a>
            </div>
          </section>
        </div>
        <div className="prod-lt-loc">{product.location}</div>
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
