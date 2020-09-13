import React from "react";
import { connect } from 'react-redux';

import styled from "styled-components";
import SearchBox from "./SearchBox";
import ProductDetail from "./ProductDetail";
import ResultSearch from "./ResultSearch";

import "../styles/sass/01_page/_container.scss";

const Container = (props) => {
debugger;
return (
  <>
    <section className="container-meli">
      <div className="search-box">
        <SearchBox />
      </div>
      
      <div className="bread-crumbs">
          <div className="padding-6"></div>
          #bread-crumbs
          <div className="padding-6"></div>
      </div>
  
      <div className="product-info-container">
        {/* <ProductDetail /> */}
        <ResultSearch />
        <ResultSearch />
        <ResultSearch />
        <ResultSearch />
      </div>
      <div className="footer">#footer</div>
    </section>
  </>
);
}

const mapStateToProps = state => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Container);

