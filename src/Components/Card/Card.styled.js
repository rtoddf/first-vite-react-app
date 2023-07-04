import styled from 'styled-components';

export const CardStyled = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 30px;
  background: #fff;
  color: #333;
  border-radius: 6px;
  box-shadow: 0 2px 26px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  text-align: center;

  h4 {
    margin: 20px 0 0;
    font-size: 35px;
  }

  h5 {
    margin: 0 0 20px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 20px;
    line-height: 1.75;
    letter-spacing: -0.5px;
  }

  figure {
    img {
      width: 100%;
      border: none;
      box-shadow: 0 2px 26px 4px rgba(0, 0, 0, 0.1);

      &.round {
        border-radius: 50%;
      }
    }

    figcaption {
      margin: 0.3125rem auto 0;
      padding: 0 20px;
      color: #666;
      font-size: 0.75rem;
      font-weight: 300;
      line-height: 1rem;
    }
  }
`;
