import styled from 'styled-components';

interface CoverProps {
  centered?: string;
  minHeight?: string;
  noPad?: boolean;
  space?: string;
};

export default styled.div.attrs(props => ({
  centered: 'h1',
  minHeight: '100vh',
  noPad: false,
  space: 'var(--s1)',
  ...props,
}))<CoverProps>`
  display: flex;
  flex-direction: column;
  min-height: ${props => props.minHeight};
  padding: ${({ noPad, space }) => !noPad ? space : '0px'};

  > * {
    margin-top: ${props => props.space};
    margin-bottom: ${props => props.space};
  }

  > :first-child:not(${props => props.centered}) {
    margin-top: 0;
  }

  > :last-child:not(${props => props.centered}) {
    margin-bottom: 0;
  }

  > ${props => props.centered} {
    margin-top: auto;
    margin-bottom: auto;
  }
`;
