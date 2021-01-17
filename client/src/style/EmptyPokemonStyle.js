import { css } from "@emotion/css";
export const outermostDivStyle = () => {
  return css`
    position: relative;
    height: 30em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  `;
};

export const outerDivStyle = () => {
  return css`
    max-width: 520px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  `;
};

export const innverDivStyle = () => {
  return css`
    position: relative;
    height: 200px;
    margin: 0px auto 20px;
    z-index: -1;
  `;
};

export const h1Style = () => {
  return css`
    font-size: 232px;
    font-weight: 200;
    margin: 0px;
    color: #211b19;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    @media (max-width: 767px) {
      font-size: 148px;
    }
    @media (max-width: 480px) {
      font-size: 86px;
    }
    @media (max-width: 262px) {
      font-size: 43px;
    }
  `;
};

export const h2Style = () => {
  return css`
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
    color: #211b19;
    background: #fff;
    padding: 10px 5px;
    margin: auto;
    display: inline-block;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    @media (max-width: 480px) {
      font-size: 16px;
    }
    @media (max-width: 767px) {
      font-size: 18px;
    }
    @media (max-width: 262px) {
      font-size: 8px;
    }
  `;
};

export const aStyle = () => {
  return css`
    display: inline-block;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    padding: 13px 23px;
    background: #006678;
    font-size: 18px;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    &:hover {
      background: #003542;
    }
    @media (max-width: 767px) {
      padding: 7px 15px;
      font-size: 14px;
    }
    @media (max-width: 480px) {
      padding: 7px 15px;
      font-size: 14px;
    }
    @media (max-width: 262px) {
      padding: 7px 15px;
      font-size: 8px;
    }
  `;
};
