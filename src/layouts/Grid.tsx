import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InferPropTypes } from '../types';

const GridPropTypes = {
  min: PropTypes.string,
  space: PropTypes.string,
};

const GridDefaultProps = {
  min: '250px',
  space: 'var(--s0)',
};

type GridProps = InferPropTypes<
  typeof GridPropTypes,
  typeof GridDefaultProps
>;

const Grid = styled.div<GridProps>`
  align-content: start;
  display: grid;
  grid-gap: ${props => props.space};
  grid-template-columns: repeat(auto-fit, minmax(${props => props.min}, 1fr));
  
  @supports (width: min(${props => props.min}, 100%)) {
    grid-gap: ${props => props.space};
    grid-template-columns: repeat(auto-fill, minmax(min(${props => props.min}, 100%), 1fr));
  }
`;

Grid.propTypes = GridPropTypes;
Grid.defaultProps = GridDefaultProps;

export default Grid;
