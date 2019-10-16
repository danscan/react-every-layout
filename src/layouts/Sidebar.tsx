import styled from 'styled-components';
import selectSpace from '../utils/selectSpace';

interface SidebarProps {
  readonly contentMin?: string;
  readonly noStretch?: boolean;
  readonly side?: 'left' | 'right';
  readonly sideWidth?: string;
  readonly space?: string;
  readonly wrapReverse?: boolean;
};

export default styled.div.attrs(props => ({
  contentMin: '50%',
  noStretch: false,
  side: 'left',
  sideWidth: '25%',
  space: 'var(--s1)',
  wrapReverse: false,
  ...props,
}))<SidebarProps>`
  overflow: hidden;

  > * {
    display: flex;
    flex-wrap: ${({ wrapReverse }) => wrapReverse ? 'wrap-reverse' : 'wrap'};
    margin: calc(${props => selectSpace(props.space)} / 2 * -1);
    ${props => props.noStretch ? 'align-items: flex-start;' : ''}
  }

  > * > * {
    flex-grow: 1;
    ${({ sideWidth }) => sideWidth ? `flex-basis: ${sideWidth};` : ''}
    margin: calc(${props => selectSpace(props.space)} / 2);
  }

  > * > ${({ side }) => side !== 'left' ? `:first-child` : `:last-child`} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(${props => props.contentMin} - ${props => selectSpace(props.space)});
  }
`;
