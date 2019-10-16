import styled from 'styled-components';
import selectSpace from '../utils/selectSpace';

interface SwitcherProps {
  readonly limit?: number;
  readonly space?: string;
  readonly threshold?: string;
};

export default styled.div.attrs(props => ({
  limit: 4,
  space: 'var(--s1)',
  threshold: 'var(--measure)',
  ...props,
}))<SwitcherProps>`
  display: block;

  > * {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: calc((${props => selectSpace(props.space)} / 2) * -1);
  }

  > * > * {
    flex-basis: calc((${props => props.threshold} - (100% - ${props => selectSpace(props.space)})) * 999);
    margin: calc(${props => selectSpace(props.space)} / 2);
    flex-grow: 1;
  }

  > * > :nth-last-child(n+${props => props.limit + 1}),
  > * > :nth-last-child(n+${props => props.limit + 1}) ~ * {
    flex-basis: 100%;
  }
`;
