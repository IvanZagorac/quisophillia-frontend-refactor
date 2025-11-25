import styled, { createGlobalStyle } from 'styled-components';

// Global styles injected into the document
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #06223B;
    color: white;
    font-family: 'Lato-Regular', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'PlayfairDisplay-Regular', serif;
  }
`;

// Styled component for a main container
export const GlobalContainer = styled.div`
    background-color: #06223B;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    box-sizing: border-box; /* To include padding in height calculation */
`;

// Styled component for main headers
export const GlobalHeader = styled.h1`
    font-family: 'PlayfairDisplay-Regular', serif;
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
`;

// Styled component for light-colored text
export const LightText = styled.span`
    color: #B4BECA;
    font-size: 16px;
`;

// Styled component for a main button
export const MainButton = styled.button`
    background-color: #255A8B;
    max-width: 120px;
    padding: 6px 16px;
    border-radius: 15px;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Lato-Regular', sans-serif;
`;