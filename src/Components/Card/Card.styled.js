import styled from 'styled-components';

export const CardStyled = styled.div`
  /* width: 320px; */
  margin: 0 auto;
  padding: 30px;
  background: ${({ bgColor }) => bgColor};
  /* background: ${(props) => props.bgColor}; */
  color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  box-shadow: 0 2px 26px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  figure {
    img {
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
