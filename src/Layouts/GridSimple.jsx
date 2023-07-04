import PropTypes from 'prop-types';

import { StyledGrid } from './GridSimple.styled';

function GridSimple({ children, cols }){
  return (
    <StyledGrid data-col={cols}>
      {children}
    </StyledGrid>
  )
}

export default GridSimple;