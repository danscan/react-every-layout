import styled from 'styled-components';

interface GridProps {
  readonly min?: string;
  readonly space?: string;
};

export default styled.div.attrs(() => ({
  min: '250px',
  space: 'var(--s0)',
}))<GridProps>`
  align-content: start;
  display: grid;
  grid-gap: ${props => props.space};
  grid-template-columns: repeat(auto-fit, minmax(${props => props.min}, 1fr));
  
  @supports (width: min(${props => props.min}, 100%)) {
    grid-gap: ${props => props.space};
    grid-template-columns: repeat(auto-fill, minmax(min(${props => props.min}, 100%), 1fr));
  }
`;
