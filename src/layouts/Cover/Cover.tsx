import type { PropertiesHyphen } from "csstype";
import type { PropsWithChildren } from "react";
import styled from "styled-components";

export type ViewProps = {
  /**
   * 単純なセレクタとして、 Cover 内に中央揃えされる主要素を指定
   * @default h1
   */
  centered: keyof JSX.IntrinsicElements;
  /**
   * Cover の最小の高さ
   * @default calc(100vh - calc(100vh - 100%))
   */
  minHeight: NonNullable<PropertiesHyphen["min-block-size"]>;
  /**
   * コンテナ要素のパディングにも space を適用するか
   * @default false
   */
  noPad: boolean;
  /**
   * 全ての子要素の間や周囲にできる最小のスペース
   * @default 0rem
   */
  space:
    | NonNullable<PropertiesHyphen["padding"]>
    | NonNullable<PropertiesHyphen["margin-block"]>;
};

export const CoverView = styled.div<ViewProps>`
  display: flex;
  flex-direction: column;
  min-block-size: ${({ minHeight }) => minHeight};
  padding: ${({ noPad, space }) => (noPad ? "0px" : space)};

  & > * {
    margin-block: ${({ space }) => space};
  }

  /* HACK: use styled-components for nth-child */
  & > ${({ centered }) => centered} {
    margin-block: auto;
  }

  /* HACK: use styled-components for nth-child */
  & > :first-child:not(${({ centered }) => centered}) {
    margin-block-start: 0;
  }

  /* HACK: use styled-components for nth-child */
  & > :last-child:not(${({ centered }) => centered}) {
    margin-block-end: 0;
  }
`;

export type Props = PropsWithChildren<Partial<ViewProps>>;

export const Cover = ({
  centered = "h1",
  children,
  minHeight = "calc(100vh - calc(100vh - 100%))",
  noPad = false,
  space = "0rem",
}: Props = {}): JSX.Element => {
  return (
    <CoverView {...{ centered, minHeight, noPad, space }}>{children}</CoverView>
  );
};
