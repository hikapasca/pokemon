import React from "react";
import Loader from "../asset/loader.gif";
import { css } from "@emotion/css";

const Loading = () => {
  const loaderStyle = () => {
    return css`
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    `;
  };
  return (
    <div className={loaderStyle()}>
      <img src={Loader} alt="loader" />
    </div>
  );
};

export default Loading;
