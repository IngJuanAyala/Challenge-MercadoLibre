import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchProductsById } from "../redux/actions/productsActions";

import SearchBox from "./SearchBox";
import ProductDetail from "./ProductDetail";
import ResultSearch from "./ResultSearch";
import Loader from "react-loader-spinner";

import "../styles/sass/01_page/_container.scss";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Container = (props) => {
  const [productDetail, setProductDetail] = useState(false);
  // const [resultSearch, setResultSearch] = useState(false);
  const { url } = props.match;
  if (url && url.includes("items")) {
    //   setProductDetail(true);
    useEffect(() => {
      setProductDetail(true);
      fetchProductsById(props, props.match.params.search);
    }, []);
  }

  debugger;
  return (
    <>
      <section className="container-meli">
        <div className="search-box">
          <SearchBox />
        </div>

        <div className="bread-crumbs">
          <div className="padding-6"></div>
          {props.state.products && props.state.products.breadCrumb}
          <div className="padding-6"></div>
        </div>

        <div className="product-info-container">
          {props.state.products.isFetching ? (
            <div>
              <Loader
                type="Puff"
                color="#FFE600"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="footer">#footer</div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Container);
