import type { PropertiesHyphen } from "csstype";
import type { PropsWithChildren } from "react";
import styled from "styled-components";
export type ViewProps = {
  /**
   * 水平方向のレイアウトで受け入れられる最大の項目数を表す数値
   * @default 4
   */
  limit: number;
  /**
   * CSS の gap の値
   * @default 0rem
   */
  space: NonNullable<PropertiesHyphen["gap"]>;
  /**
   * 要素の幅のブレイクポイント
   */
  threshold: NonNullable<PropertiesHyphen["flex-basis"]>;
};

export const SwitcherView = styled.div<ViewProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ space }) => space};

  & > * {
    flex-basis: calc((${({ threshold }) => threshold} - 100%) * 999);
    flex-grow: 1;
  }

  /* HACK: use styled-components for nth-child */
  & > :nth-last-child(n + ${({ limit }) => limit + 1}),
  & > :nth-last-child(n + ${({ limit }) => limit + 1}) ~ * {
    flex-basis: 100%;
  }
`;

export type Props = PropsWithChildren<
  Partial<Omit<ViewProps, "threshold">> & Pick<ViewProps, "threshold">
>;

export const Switcher = ({
  children,
  limit = 4,
  space = "0rem",
  threshold,
}: Props): JSX.Element => {
  return (
    <SwitcherView {...{ limit, space, threshold }}>{children}</SwitcherView>
  );
};
