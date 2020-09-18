import React from "react";

const BreadCrumb = (props) => {
  const { breadCrumbLt } = props;
  return (
    <>
      <div className="padding-6"></div>
      {breadCrumbLt.map((breadCr) => {
        return ` > ${breadCr}`;
      })}
      <div className="padding-6"></div>
    </>
  );
};

export default BreadCrumb;
