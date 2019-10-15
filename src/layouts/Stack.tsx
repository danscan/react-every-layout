import styled from 'styled-components';

interface StackProps {
  readonly recursive?: boolean;
  readonly splitAfter?: number;
  readonly space?: string;
};

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${props => props.recursive ? '' : '>'} * + * {
    margin-top: ${props => props.space};
  }

  ${({ splitAfter }) => splitAfter ? `
    .stack-l > :nth-child(${splitAfter}) {
      margin-bottom: auto;
    }`
    : ''}
`;

Stack.defaultProps = {
  recursive: false,
  space: 'var(--s1)',
};

export default Stack;