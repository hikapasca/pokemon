import { css } from "@emotion/css";
export const cards = () => {
  return css`
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
  `;
};

export const cardsContainer = () => {
  return css`
    margin-top: 60px;
    @media (max-width: 720px) {
      margin-top: 50px;
    }
    @media (max-width: 360px) {
      margin-top: 40px;
    }
  `;
};
