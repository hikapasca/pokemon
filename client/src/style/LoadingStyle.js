import { css } from "@emotion/css";
export const loaderStyle = () => {
  return css`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  `;
};
