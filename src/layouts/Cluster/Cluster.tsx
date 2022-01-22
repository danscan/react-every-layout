import { styled } from "@linaria/react";
import type { PropertiesHyphen } from "csstype";
import type { PropsWithChildren } from "react";

export type ViewProps = {
  /**
   * CSS の align-items の値
   * @default flex-start
   */
  align: NonNullable<PropertiesHyphen["align-items"]>;
  /**
   * CSS の justify-content の値
   * @default flex-start
   */
  justify: NonNullable<PropertiesHyphen["justify-content"]>;
  /**
   * CSS の gap の値
   * @default 1rem
   */
  space: NonNullable<PropertiesHyphen["gap"]>;
};

export const ClusterView = styled.div<ViewProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ space }) => space};
`;

export type Props = PropsWithChildren<Partial<ViewProps>>;

export const Cluster = ({
  align = "flex-start",
  children,
  justify = "flex-start",
  space = "1rem",
}: Props): JSX.Element => {
  return <ClusterView {...{ align, justify, space }}>{children}</ClusterView>;
};
