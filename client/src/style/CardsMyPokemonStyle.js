import { css } from "@emotion/css";
export const cardOutermostStyle = () => {
  return css`
    height: auto;
    display: flex;
    margin: 10px;
  `;
};

export const cardStyle = () => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: #006678 0px 0px 3px 0px;
    border-radius: 10px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    max-width: 192px;
    overflow: hidden;
    &:hover {
      box-shadow: #006678 0px 0px 7px 0px;
    }
  `;
};

export const cardImageStyle = () => {
  return css`
    height: 160px;
    cursor: pointer;
  `;
};

export const cardContentStyle = () => {
  return css`
    font-weight: bold;
    margin-top: 16px;
    text-transform: capitalize;
    width: -webkit-fill-available;
    text-overflow: ellipsis;
    text-align: center;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    background-color: #006678;
  `;
};

export const buttonStyle = () => {
  return css`
    cursor: pointer;
    background-color: #de354c;
    border-radius: 8px;
    border: none;
    color: white;
    padding: 10px 15px 0px 15px;
    text-align: center;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 25px;
    box-shadow: #de354c 0px 0px 7px 0px;
    &:hover {
      box-shadow: #de354c 0px 0px 20px 0px;
    }
  `;
};
