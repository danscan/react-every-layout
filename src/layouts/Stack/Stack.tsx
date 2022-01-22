import type { PropertiesHyphen } from "csstype";
import type { PropsWithChildren } from "react";
import styled from "styled-components";

export type ViewProps = {
  /**
   * スペースが再帰的に適用されるか
   * @default false
   */
  recursive: boolean;
  /**
   * 要素同士の gap の値
   * @default 0rem
   */
  space: NonNullable<PropertiesHyphen["row-gap"]>;
  /**
   * Stack を区分けするために後ろに auto margin を適用する要素の位置
   * @default -1
   */
  splitAfter: number;
};

export const StackView = styled.div<ViewProps>`
  inline-size: 100%;
  block-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: ${({ space }) => space};

  & * {
    display: ${({ recursive }) => (recursive ? "flex" : "")};
    flex-direction: ${({ recursive }) => (recursive ? "column" : "")};
    justify-content: ${({ recursive }) => (recursive ? "flex-start" : "")};
    row-gap: ${({ recursive, space }) => (recursive ? space : "")};
  }

  & > :only-child {
    block-size: ${({ splitAfter }) => (splitAfter > 0 ? "100%" : "")};
  }

  /* HACK: use styled-components for nth-child */
  & > :nth-child(${({ splitAfter }) => splitAfter}) {
    margin-block-end: auto;
  }
`;

export type Props = PropsWithChildren<Partial<ViewProps>>;

export const Stack = ({
  recursive = false,
  space = "0rem",
  splitAfter = -1,
  children,
}: Props = {}): JSX.Element => {
  return (
    <StackView {...{ recursive, space, splitAfter }}>{children}</StackView>
  );
};
