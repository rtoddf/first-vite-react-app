import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    font-family: 'Rubik', sans-serif;
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    line-height: ${({ theme }) => theme.fonts.baseLineHeight};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 10px;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: normal;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: .875rem;
  }

  h6 {
    font-size: .75rem;
  }

  p {
    margin-bottom: 10px;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
