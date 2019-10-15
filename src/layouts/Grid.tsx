import styled from 'styled-components';

interface GridProps {
  readonly min?: string;
  readonly space?: string;
};

const Grid = styled.div<GridProps>`
  align-content: start;
  display: grid;
  grid-gap: ${props => props.space};
  grid-template-columns: repeat(auto-fit, minmax(${props => props.min}, 1fr));
  
  @supports (width: min(${props => props.min}, 100%)) {
    grid-gap: ${props => props.space};
    grid-template-columns: repeat(auto-fill, minmax(min(${props => props.min}, 100%), 1fr));
  }
`;

Grid.defaultProps = {
  min: '250px',
  space: 'var(--s0)',
};

export default Grid;
