import styled from 'styled-components';

interface ClusterProps {
  readonly align?: string;
  readonly justify?: string;
  readonly space?: string;
};

const Cluster = styled.div<ClusterProps>`
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

Cluster.defaultProps = {
  align: 'center',
  justify: 'center',
  space: 'var(--s1)',
};

export default Cluster;
