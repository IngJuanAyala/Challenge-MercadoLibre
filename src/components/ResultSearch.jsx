import React from "react";

import "../styles/sass/01_page/_resultSearch.scss";

const ResultSearch = () => (
  <>
    <section className="container-prods-list">
      <div className="prod-lt-img">#Image-product</div>
      <div className="prod-lt-descr">
        
        <section className="prod-lt-descr-wrapper">
          <div className="prod-price">#productPrice</div>
          <div className="prod-name">#productName</div>
        </section>
        
     </div>
      <div className="prod-lt-loc">#loca-prod</div>
    </section>
  </>
);

export default ResultSearch;
