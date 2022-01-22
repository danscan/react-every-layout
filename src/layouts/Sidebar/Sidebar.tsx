import { styled } from "@linaria/react";
import type { PropertiesHyphen } from "csstype";
import type { PropsWithChildren } from "react";

export type ViewProps = {
  /**
   * CSS のパーセンテージの値。水平方向の配置の場合のコンテンツの最小幅
   * @default 50%
   */
  contentMin: NonNullable<PropertiesHyphen["min-inline-size"]>;
  /**
   * 水平方向の配置において、要素をコンテンツに応じた高さにするか
   * @default false
   */
  noStretch: boolean;
  /**
   * 左右どちらかの要素をサイドバーとして処理するか
   * @default left
   */
  side: "left" | "right";
  /**
   * 垂直方向の配置におけるサイドバーの幅。
   * @default 25%
   */
  sideWidth: NonNullable<PropertiesHyphen["flex-basis"]>;
  /**
   * CSS の gap の値
   * @default 0rem
   */
  space: NonNullable<PropertiesHyphen["gap"]>;
};

export const SidebarView = styled.div<ViewProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ noStretch }) => (noStretch ? "flex-start" : "")};
  gap: ${({ space }) => space};

  & > * {
    flex-grow: 1;
    flex-basis: ${({ sideWidth }) => sideWidth};
  }

  & > :first-child {
    flex-basis: ${({ side, sideWidth }) => (side === "right" ? 0 : sideWidth)};
    flex-grow: ${({ side }) => (side === "right" ? 999 : 1)};
    min-inline-size: ${({ contentMin, side }) =>
      side === "right" ? contentMin : ""};
  }

  & > :last-child {
    flex-basis: ${({ side, sideWidth }) => (side === "left" ? 0 : sideWidth)};
    flex-grow: ${({ side }) => (side === "left" ? 999 : 1)};
    min-inline-size: ${({ contentMin, side }) =>
      side === "left" ? contentMin : ""};
  }
`;

export type Props = PropsWithChildren<Partial<ViewProps>>;

export const Sidebar = ({
  children,
  contentMin = "50%",
  noStretch = false,
  side = "left",
  sideWidth = "25%",
  space = "0rem",
}: Props = {}): JSX.Element => {
  return (
    <SidebarView {...{ contentMin, noStretch, side, sideWidth, space }}>
      {children}
    </SidebarView>
  );
};
