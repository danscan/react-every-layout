import styled from 'styled-components';

interface BoxProps {
  readonly borderWidth?: string;
  readonly invert?: boolean;
  readonly padding?: string;
};

const Box = styled.div<BoxProps>`
  ${props => props.invert ? `
    background-color: var(--color-light);
    filter: invert(100%);` : ''}

  background-color: inherit;
  border-width: ${props => props.borderWidth};
  border: ${props => props.borderWidth} solid;
  display: block;
  padding: ${props => props.padding};

  /* ↓ For high contrast mode */
  outline: var(--border-thin) solid transparent;
  outline-offset: calc(var(--border-thin) * -1);
`;

Box.defaultProps = {
  borderWidth: 'var(--border-thin)',
  invert: false,
  padding: 'var(--s1)',
};

export default Box;
