import { styled } from "@linaria/react";
import type { PropertiesHyphen } from "csstype";
import type { HTMLAttributes, PropsWithChildren } from "react";

export type ViewProps = {
  /**
   * CSS の column-gap の値
   * @default 0rem
   */
  space: NonNullable<PropertiesHyphen["column-gap"]>;
};

export const IconView = styled.div<ViewProps>`
  display: inline-flex;
  align-items: baseline;
  column-gap: ${({ space }) => space};

  & svg {
    inline-size: 0.75em;
    inline-size: 1cap;
    block-size: 0.75em;
    block-size: 1cap;
  }
`;

export type Props = PropsWithChildren<
  Partial<ViewProps> & {
    /**
     * 支援技術において要素を画像として扱い、この値の aria-label を追加する
     */
    label: NonNullable<HTMLAttributes<JSX.Element>["aria-label"]>;
  }
>;

export const Icon = ({
  children,
  label,
  space = "0rem",
}: Props): JSX.Element => {
  return (
    <IconView {...{ space }} role="img" aria-label={label}>
      {children}
    </IconView>
  );
};
