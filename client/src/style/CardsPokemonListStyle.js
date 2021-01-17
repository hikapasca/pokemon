import { css } from "@emotion/css";
export const cardOutermostStyle = () => {
  return css`
    height: auto;
    display: flex;
    margin: 10px;
    cursor: pointer;
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
