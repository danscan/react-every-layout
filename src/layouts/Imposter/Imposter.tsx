import { styled } from "@linaria/react";
import type { PropertiesHyphen } from "csstype";
import type { PropsWithChildren } from "react";

export type ViewProps = {
  /**
   * 位置指定コンテナから要素がはみ出て良いか
   * @default false
   */
  breakout: boolean;
  /**
   * 要素をビューポート基準に配置するか
   * @default false
   */
  fixed: boolean;
  /**
   * (breakout が適用されていない場合に)要素が配置される位置指定コンテナの内側の縁と要素との間にできる最小の余白
   * @default 0rem
   */
  margin: NonNullable<PropertiesHyphen["margin"]>;
};

export const ImposterView = styled.div<ViewProps>`
  position: ${({ fixed }) => (fixed ? "fixed" : "absolute")};
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);

  max-inline-size: ${({ breakout, margin }) =>
    breakout ? "" : `calc(100% - (${margin} * 2))`};
  max-block-size: ${({ breakout, margin }) =>
    breakout ? "" : `calc(100% - (${margin} * 2))`};
  overflow: ${({ breakout }) => (breakout ? "" : "auto")};
  overscroll-behavior-block: contain;
  scrollbar-gutter: ${({ breakout }) => (breakout ? "" : "stable")};
`;

export type Props = PropsWithChildren<Partial<ViewProps>>;

export const Imposter = ({
  breakout = false,
  children,
  margin = "0rem",
  fixed = false,
}: Props = {}): JSX.Element => {
  return (
    <ImposterView {...{ breakout, margin, fixed }}>{children}</ImposterView>
  );
};
