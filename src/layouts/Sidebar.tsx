import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InferPropTypes } from '../types';
import selectSpace from '../utils/selectSpace';

const SidebarPropTypes = {
  contentMin: PropTypes.string,
  noStretch: PropTypes.bool,
  side: PropTypes.oneOf(['left', 'right']),
  sideWidth: PropTypes.string,
  space: PropTypes.string,
  wrapReverse: PropTypes.bool,
};

const SidebarDefaultProps = {
  contentMin: '50%',
  noStretch: false,
  side: 'left',
  sideWidth: '25%',
  space: 'var(--s1)',
  wrapReverse: false,
};

type SidebarProps = InferPropTypes<
  typeof SidebarPropTypes,
  typeof SidebarDefaultProps
>;

const Sidebar = styled.div<SidebarProps>`
  overflow: hidden;

  > * {
    display: flex;
    flex-wrap: ${({ wrapReverse }) => wrapReverse ? 'wrap-reverse' : 'wrap'};
    margin: calc(${props => selectSpace(props.space!)} / 2 * -1);
    ${props => props.noStretch ? 'align-items: flex-start;' : ''}
  }

  > * > * {
    flex-grow: 1;
    ${({ sideWidth }) => sideWidth ? `flex-basis: ${sideWidth};` : ''}
    margin: calc(${props => selectSpace(props.space!)} / 2);
  }

  > * > ${({ side }) => side !== 'left' ? `:first-child` : `:last-child`} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(${props => props.contentMin} - ${props => selectSpace(props.space!)});
  }
`;

Sidebar.propTypes = SidebarPropTypes;
Sidebar.defaultProps = SidebarDefaultProps;

export default Sidebar;
