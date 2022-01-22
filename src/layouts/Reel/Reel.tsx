import { styled } from "@linaria/react";
import type { PropertiesHyphen } from "csstype";
import type { PropsWithChildren } from "react";

export type ViewProps = {
  /**
   * CSS の block-size (scroll 含む) の値
   * @default auto
   */
  height: NonNullable<PropertiesHyphen["block-size"]>;
  /**
   * 子要素の flex-basis の値
   * @default auto
   */
  itemWidth: NonNullable<PropertiesHyphen["flex-basis"]>;
  /**
   * スクロールバーを非表示にするか
   * @default false
   */
  noBar: boolean;
  /**
   * CSS の column-gap の値
   * @default 0rem
   */
  space: NonNullable<PropertiesHyphen["column-gap"]>;
  /**
   * スクロールバーのつまみの色
   * @default rgba(0, 0, 0, 0.5)
   */
  thumbColor: NonNullable<PropertiesHyphen["scrollbar-color"]>;
  /**
   * スクロールバーのトラックの色
   * @default transparent
   */
  trackColor: NonNullable<PropertiesHyphen["scrollbar-color"]>;
};

export const ReelView = styled.div<ViewProps>`
  --scroll-height: 0.5rem

  display: flex;
  block-size: ${({ height, noBar }) =>
    noBar ? height : `calc(${height} - var(--scroll-height)`};
  /* NOTE: https://caniuse.com/?search=overflow-inline */
  overflow-x: ${({ noBar }) => (noBar ? "overlay" : "scroll")};
  overflow-inline: ${({ noBar }) => (noBar ? "overlay" : "scroll")};
  /* NOTE: https://caniuse.com/?search=overflow-block */
  overflow-y: hidden;
  overflow-block: hidden;
  overscroll-behavior-inline: contain;
  column-gap: ${({ space }) => space};

  /* scrollbar-gutter: ${({ noBar }) => (noBar ? "auto" : "stable")}; */
  scrollbar-width: ${({ noBar }) => (noBar ? "none" : "var(--scroll-height)")};
  &:hover {
    scrollbar-width: var(--scroll-height);

    &::-webkit-scrollbar {
      display: block;
    }
  }

  &::-webkit-scrollbar {
    display: ${({ noBar }) => (noBar ? "none" : "")};
    appearance: none;
    block-size: var(--scroll-height);
  }
  scrollbar-color: ${({ thumbColor, trackColor }) =>
    `${thumbColor} ${trackColor}`};
  &::-webkit-scrollbar-track {
    background-color: ${({ trackColor }) => trackColor};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ thumbColor }) => thumbColor};

    border-radius: calc(var(--scroll-height) / 2);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  @media (prefers-color-scheme: light) {
    /* FYI(Horizontal Scroll Shadows): https://javascript.plainenglish.io/how-to-create-horizontal-vertical-scroll-shadows-26aa7a7f00a0 */
    background-image: linear-gradient(to right, white, white),
      linear-gradient(to left, white, white),
      linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0)),
      linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0));
    background-position: left center, right center, left center, right center;
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: 16px 100%, 16px 100%, 8px 100%, 8px 100%;
    background-attachment: local, local, scroll, scroll;
  }

  & > * {
    flex: 0 0 ${({ itemWidth }) => itemWidth};
  }

  & > img {
    inline-size: auto;
    block-size: 100%;
    flex-basis: auto;
  }
`;

export type Props = PropsWithChildren<Partial<ViewProps>>;

export const Reel = ({
  children,
  height = "auto",
  itemWidth = "auto",
  noBar = false,
  space = "0rem",
  thumbColor = "rgba(0, 0, 0, 0.5)",
  trackColor = "transparent",
}: Props = {}): JSX.Element => {
  return (
    <ReelView {...{ height, itemWidth, noBar, space, thumbColor, trackColor }}>
      {children}
    </ReelView>
  );
};
