import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;

  &[data-col='2'] {
    grid-template-columns: repeat(2, [col] 1fr);
  }

  &[data-col='3'] {
    grid-template-columns: repeat(3, [col] 1fr);
  }

  &[data-col='4'] {
    grid-template-columns: repeat(4, [col] 1fr);
  }

  &[data-col='6'] {
    grid-template-columns: repeat(6, [col] 1fr);
  }
`;
