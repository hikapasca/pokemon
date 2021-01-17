import { css } from "@emotion/css";
export const liStyle = () => {
  return css`
    float: right;
    cursor: pointer;
    @media (max-width: 480px) {
    }
  `;
};

export const liLogostyle = () => {
  return css`
    float: left;
    padding: 12px;
    cursor: pointer;
    @media (max-width: 480px) {
      display: none;
    }
  `;
};

export const ulStyle = () => {
  return css`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #006678;
    border-style: none;
    position: sticky;
    top: 0;
    width: 100%;
    @media (max-width: 480px) {
      display: flex;
      justify-content: center;
    }
  `;
};

export const liItemStyle = () => {
  return css`
    display: block;
    color: white;
    text-align: center;
    text-weight: bold;
    padding: 10px 16px;
    text-decoration: none;
    display: block;
    @media (max-width: 256px) {
      font-size: 14px;
    }
    @media (max-width: 232px) {
      font-size: 12px;
    }
    @media (max-width: 209px) {
      font-size: 10px;
      padding: 7px 10px;
    }
    @media (max-width: 163px) {
      font-size: 10px;
      padding: 7px 10px;
    }
    &:hover {
      background-color: #003542;
    }
  `;
};

export const aItemStyle = () => {
  return css`
    color: white;
    text-decoration: none;
  `;
};
