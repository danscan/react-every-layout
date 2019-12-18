import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InferPropTypes } from '../types';

const ImposterPropTypes = {
  breakout: PropTypes.bool,
  margin: PropTypes.string,
  fixed: PropTypes.bool,
};

const ImposterDefaultProps = {
  breakout: false,
  margin: '0',
  fixed: false,
};

type ImposterProps = InferPropTypes<
  typeof ImposterPropTypes,
  typeof ImposterDefaultProps
>;

const Imposter = styled.div<ImposterProps>`
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Contents */
  --margin: ${props => props.margin};
  overflow: auto;
  max-height: calc(100% - (var(--margin) * 2));
  max-width: calc(100% - (var(--margin) * 2));
`;

Imposter.propTypes = ImposterPropTypes;
Imposter.defaultProps = ImposterDefaultProps;

export default Imposter;
