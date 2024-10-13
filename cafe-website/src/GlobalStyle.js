import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }

  h1, h2, h3 {
    color: #333;
  }

  p {
    line-height: 1.6;
  }
`;

export default GlobalStyle;
