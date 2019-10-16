import styled from 'styled-components';

interface ClusterProps {
  readonly align?: string;
  readonly justify?: string;
  readonly space?: string;
};

export default styled.div.attrs(() => ({
  align: 'center',
  justify: 'flex-start',
  space: 'var(--s1)',
}))<ClusterProps>`
  > * {
    align-items: ${props => props.align};
    display: flex;
    justify-content: ${props => props.justify};
    margin: calc(${props => props.space} / 2 * -1);
    flex-wrap: wrap;
  }

  > * > * {
    margin: calc(${props => props.space} / 2);
  }
`;
