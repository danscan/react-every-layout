import styled from 'styled-components';

interface CenterProps {
  readonly andText?: boolean;
  readonly gutters?: number;
  readonly intrinsic?: boolean;
  readonly max?: string;
};

export default styled.div.attrs(() => ({
  andText: false,
  gutters: 0,
  intrinsic: false,
  max: 'var(--measure)',
}))<CenterProps>`
  box-sizing: content-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.max};

  ${props => props.intrinsic ? `
    align-items: center;
    display: flex;
    flex-direction: column;`
    : ''}

  ${({ gutters }) => gutters ? `
    padding-left: ${gutters};
    padding-right: ${gutters};`
    : ''}

  ${props => props.andText ? `text-align: center;` : ''}
`;
