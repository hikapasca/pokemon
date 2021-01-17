import { css } from "@emotion/css";
export const detailsContainer = () => {
  return css`
    display: flex;
    justifiy-content: center;
    border-syle: solid;
    border-width: 100px;
    @media (max-width: 750px) {
      display: block;
    }
  `;
};

export const imageStyle = () => {
  return css`
    width: 300px;
    height: 300px;
    @media (max-width: 300px) {
      width: 150px;
      height: 150px;
    }
  `;
};

export const abilitesStyle = () => {
  return css`
    display: flex;
    justify-content: start;
    flex-flow: row wrap;
  `;
};

export const abilitesItemsStyle = () => {
  return css`
    padding: 5px;
    border-radius: 20px;
    margin-right: 10px;
    align-items: center;
    box-shadow: #006678 0px 0px 3px 0px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    max-width: 192px;
    overflow: hidden;
    &:hover {
      box-shadow: #006678 0px 0px 7px 0px;
    }
  `;
};

export const typesStyle = () => {
  return css`
    display: flex;
    justify-content: start;
    flex-flow: row wrap;
  `;
};

export const typesItemStyle = () => {
  return css`
    padding: 5px;
    border-radius: 20px;
    margin-right: 10px;
    align-items: center;
    box-shadow: #006678 0px 0px 3px 0px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    max-width: 192px;
    overflow: hidden;
    &:hover {
      box-shadow: #006678 0px 0px 7px 0px;
    }
  `;
};
export const movesStyle = () => {
  return css`
    display: flex;
    justify-content: start;
    flex-flow: row wrap;
  `;
};

export const movesItemStyle = () => {
  return css`
    padding: 5px;
    border-radius: 20px;
    margin-right: 10px;
    align-items: center;
    box-shadow: #006678 0px 0px 3px 0px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    max-width: 192px;
    overflow: hidden;
    &:hover {
      box-shadow: #006678 0px 0px 7px 0px;
    }
  `;
};

export const movesContainerStyle = () => {
  return css`
    height: auto;
    display: flex;
    margin: 10px;
  `;
};
export const leftItemStyle = () => {
  return css`
    margin-left: 80px;
    margin-right: 80px;
    @media (max-width: 475px) {
      margin-left: 40px;
      margin-right: 40px;
    }
    @media (max-width: 380px) {
      margin-left: 0px;
      margin-right: 0px;
    }
  `;
};

export const rightItemStyle = () => {
  return css`
    text-align: left;
    @media (max-width: 750px) {
      padding: 30px;
    }
  `;
};

export const titleStyle = () => {
  return css`
    font-size: 40px;
    @media (max-width: 360px) {
      font-size: 30px;
    }
  `;
};

export const hrStyle = () => {
  return css`
    margin-top: 30px;
  `;
};

export const verticalLine = () => {
  return css`
    border-left: solid grey;
    border-width: 1px;
    margin-right: 20px;
    margin-left: 10px;
  `;
};

export const catchPokemonStyle = () => {
  return css`
    position: fixed;
    bottom: 0;
    right: 320px;
    cursor: pointer;
    background-color: grey;
    padding: 5px;
    border-radius: 20px;
    align-items: center;
    box-shadow: grey 0px 0px 3px 0px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    overflow: hidden;
    &:hover {
      box-shadow: grey 0px 0px 7px 0px;
    }
    @media (max-width: 750px) {
      right: 20px;
    }
  `;
};

export const imgCatchMeStyle = () => {
  return css`
    width: 80px;
    height: 80px;
    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  `;
};
export const fontCatchMeStyle = () => {
  return css`
    font-size: 24px;
    @media (max-width: 750px) {
      font-size: 20px;
    }
    @media (max-width: 750px) {
      font-size: 18px;
    }
  `;
};
