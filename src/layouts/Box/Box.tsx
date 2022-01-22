import { styled } from "@linaria/react";
import type { PropertiesHyphen } from "csstype";
import type { PropsWithChildren } from "react";

export type ViewProps = {
  /**
   * CSS の border-width の値
   * @default 1px
   */
  borderWidth: NonNullable<PropertiesHyphen["border-width"]>;
  /**
   * CSS の color(with border-color) または background-color (invertのとき) の値
   * @default #333
   */
  color:
    | NonNullable<PropertiesHyphen["color"]>
    | NonNullable<PropertiesHyphen["border-color"]>
    | NonNullable<PropertiesHyphen["background-color"]>;
  /**
   * 反転したテーマを適用するかどうか
   * @default false
   */
  invert: boolean;
  /**
   * CSS の padding の値
   * @default 0rem
   */
  padding: NonNullable<PropertiesHyphen["padding"]>;
};

export const BoxView = styled.div<ViewProps>`
  display: block;
  padding: ${({ padding }) => padding};
  border: ${({ borderWidth }) => borderWidth} solid;
  color: ${({ invert, color }) => (invert ? "" : color)};
  background-color: ${({ invert, color }) => (invert ? color : "")};
  filter: ${({ invert }) => (invert ? "invert(100%)" : "")};

  & * {
    color: inherit;
  }

  // For high contrast mode
  outline: 1px solid transparent;
  outline-offset: calc(1px * -1);
`;

export type Props = PropsWithChildren<Partial<ViewProps>>;

export const Box = ({
  borderWidth = "1px",
  color = "#333",
  invert = false,
  padding = "0rem",
  children,
}: Props = {}): JSX.Element => {
  return (
    <BoxView {...{ borderWidth, color, invert, padding }}>{children}</BoxView>
  );
};
