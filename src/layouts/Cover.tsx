import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InferPropTypes } from '../types';

const CoverPropTypes = {
  centered: PropTypes.string,
  minHeight: PropTypes.string,
  noPad: PropTypes.bool,
  space: PropTypes.string,
};

const CoverDefaultProps = {
  centered: 'h1',
  minHeight: '100vh',
  noPad: false,
  space: 'var(--s1)',
};

type CoverProps = InferPropTypes<
  typeof CoverPropTypes,
  typeof CoverDefaultProps
>;

const Cover = styled.div<CoverProps>`
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

Cover.propTypes = CoverPropTypes;
Cover.defaultProps = CoverDefaultProps;

export default Cover;
