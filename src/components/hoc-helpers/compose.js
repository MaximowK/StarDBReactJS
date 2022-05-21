import React from "react";

const compose =
  (...funcs) =>
  (comp) => {
    return funcs.reduceRight((prevRes, f) => {
      return f(prevRes);
    }, comp);
  };

export { compose };
