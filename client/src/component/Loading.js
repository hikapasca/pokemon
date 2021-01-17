import React from "react";
import Loader from "../asset/loader.gif";

import { loaderStyle } from "../style/LoadingStyle";
const Loading = () => {
  return (
    <div className={loaderStyle()}>
      <img src={Loader} alt="loader" />
    </div>
  );
};

export default Loading;
