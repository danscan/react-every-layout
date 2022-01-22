import { styled } from "@linaria/react";
import type { PropertiesHyphen } from "csstype";
import type { PropsWithChildren } from "react";

export type ViewProps = {
  /**
   * minmax(min(x, 100%), 1fr) の x の値を表す、CSS の 長さの値
   * @default 250px
   */
  min: NonNullable<PropertiesHyphen["grid-template-columns"]>;
  /**
   * CSS の gap の値
   * @default 1rem
   */
  space: NonNullable<PropertiesHyphen["gap"]>;
};

export const GridView = styled.div<ViewProps>`
  display: grid;
  align-content: start;
  gap: ${({ space }) => space};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${({ min }) => min}, 100%), 1fr)
  );
`;

export type Props = PropsWithChildren<Partial<ViewProps>>;

export const Grid = ({
  children,
  min = "250px",
  space = "1rem",
}: Props): JSX.Element => {
  return <GridView {...{ min, space }}>{children}</GridView>;
};
