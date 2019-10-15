import styled from 'styled-components';

type RatioArray = [string, string];

interface FrameProps {
  readonly ratio?: string;
};

const Frame = styled.div<FrameProps>`
  display: block;
  padding-bottom: ${({ ratio }) => {
    const [ratioNumerator, ratioDenominator] = selectRatioArray(ratio);

    return `calc(${ratioNumerator} / ${ratioDenominator} * 100%)`;
  }};
  position: relative;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  > img, 
  > video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

function selectRatioArray(ratio: string): RatioArray {
  const ratioParts = ratio.split(':', 2);
  
  return [ratioParts[0], ratioParts[1]];
}

Frame.defaultProps = {
  ratio: '6:9',
};

export default Frame;
