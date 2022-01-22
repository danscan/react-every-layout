import { styled } from "@linaria/react";
import type { PropertiesHyphen } from "csstype";
import type { PropsWithChildren } from "react";

export type ViewProps = {
  /**
   * テキストも中央揃えにするか
   * @default false
   */
  andText: boolean;
  /**
   * コンテンツの両端の最小限のスペース
   * @default 0rem
   */
  gutters: NonNullable<PropertiesHyphen["padding-inline"]>;
  /**
   * 子要素をそのコンテンツ幅に基づいて中央揃えにさせるか
   * @default false
   */
  intrinsic: boolean;
  /**
   * CSS の max-inline-size の値
   */
  max: NonNullable<PropertiesHyphen["max-inline-size"]>;
};

export const CenterView = styled.div<ViewProps>`
  box-sizing: content-box;
  display: ${({ intrinsic }) => (intrinsic ? "flex" : "block")};
  flex-direction: ${({ intrinsic }) => (intrinsic ? "column" : "")};
  align-items: ${({ intrinsic }) => (intrinsic ? "center" : "")};
  max-inline-size: ${({ max }) => max};
  margin-inline: auto;
  padding-inline: ${({ gutters }) => gutters};

  text-align: ${({ andText }) => (andText ? "center" : "")};
`;

export type Props = PropsWithChildren<
  Partial<Omit<ViewProps, "max">> & Pick<ViewProps, "max">
>;

export const Center = ({
  andText = false,
  children,
  gutters = "0rem",
  intrinsic = false,
  max,
}: Props): JSX.Element => {
  return (
    <CenterView {...{ andText, gutters, intrinsic, max }}>
      {children}
    </CenterView>
  );
};
