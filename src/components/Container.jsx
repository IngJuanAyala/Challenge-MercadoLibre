import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchProductsById,
  fetchProductsByParam,
} from "../redux/actions/productsActions";

import SearchBox from "./SearchBox";
import ProductDetail from "./ProductDetail";
import ResultSearch from "./ResultSearch";
import Loader from "react-loader-spinner";

import "../styles/sass/01_page/_container.scss";

const Container = (props) => {
  const { url } = props.match;
  const { search } = props.location;


  if (props.match.params.search !== undefined) {
    useEffect(() => {
      fetchProductsById(props, props.match.params.search);
    }, []);
  }

  if (url !== "/" && props.match.params.search === undefined) {
    let searchValue = search.includes("=")
      ? props.location.search.split("=")
      : null;
    useEffect(() => {
      fetchProductsByParam(props, searchValue[1]);
    }, []);
  }


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
            <div>
              {props.state.products.items &&
                props.state.products.items.length > 0 &&
                props.state.products.items.map((product) => (
                  <ResultSearch
                    key={String(product.id)}
                    id={product.id}
                    product={product}
                  />
                ))}

              {props.state.products.item &&
                props.state.products.item !== null && (
                  <ProductDetail product={props.state.products.item} />
                )}
            </div>
          )}
        </div>
        <div className="footer"></div>
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
