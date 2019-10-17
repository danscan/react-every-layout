import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InferPropTypes } from '../types';
import selectSpace from '../utils/selectSpace';

const SwitcherPropTypes = {
  limit: PropTypes.number,
  space: PropTypes.string,
  threshold: PropTypes.string,
};

const SwitcherDefaultProps = {
  limit: 4,
  space: 'var(--s1)',
  threshold: 'var(--measure)',
};

type SwitcherProps = InferPropTypes<
  typeof SwitcherPropTypes,
  typeof SwitcherDefaultProps
>;

const Switcher = styled.div<SwitcherProps>`
  display: block;

  > * {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: calc((${props => selectSpace(props.space!)} / 2) * -1);
  }

  > * > * {
    flex-basis: calc((${props => props.threshold} - (100% - ${props => selectSpace(props.space!)})) * 999);
    margin: calc(${props => selectSpace(props.space!)} / 2);
    flex-grow: 1;
  }

  > * > :nth-last-child(n+${props => props.limit! + 1}),
  > * > :nth-last-child(n+${props => props.limit! + 1}) ~ * {
    flex-basis: 100%;
  }
`;

Switcher.propTypes = SwitcherPropTypes;
Switcher.defaultProps = SwitcherDefaultProps;

export default Switcher;
