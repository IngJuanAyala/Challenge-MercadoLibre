import React from "react";
import styled from "styled-components";

import "../styles/sass/01_page/_searchBox.scss";

const SearchBox = () => (
  <>
      <section className="item container-searchBox">
          <div className="item logoMeli">
             <img src="../src/assets/Logo_ML@2x.png" alt="Logo Meli" width="50" heght="50"/>
          </div>
          <div className="item SearchBar">
          <input className="input-search"/></div>
          <div className="btnSearch"><img src="../src/assets/ic_Search.png" alt="Logo Meli" /></div>
          
         </section> 
  </>
);
export default SearchBox;
