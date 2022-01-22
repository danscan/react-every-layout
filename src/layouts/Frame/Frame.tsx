import { styled } from "@linaria/react";
import type { PropertiesHyphen } from "csstype";
import type { PropsWithChildren } from "react";

export type ViewProps = {
  /**
   * 要素のアスペクト比
   * @default "1 / 1"
   */
  ratio: NonNullable<PropertiesHyphen["aspect-ratio"]>;
};

export const FrameView = styled.div<ViewProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: ${({ ratio }) => ratio};
  overflow: hidden;

  & > img,
  & > video {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }
`;

export type Props = PropsWithChildren<Partial<ViewProps>>;

export const Frame = ({
  children,
  ratio = "16 / 9",
}: Props = {}): JSX.Element => {
  return <FrameView {...{ ratio }}>{children}</FrameView>;
};
