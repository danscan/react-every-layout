import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Cover as CoverComponent } from "./Cover";

// HACK: for controls with react-codegen-typescript
const Cover: CssPropertiesFC<typeof CoverComponent> = CoverComponent;
export const CoverStorybook = Cover;

export default {
  title: "layouts/Cover",
  component: Cover,
} as ComponentMeta<typeof Cover>;

const Template: ComponentStory<typeof Cover> = (args) => (
  <div style={{ width: "100vw", height: "100vh", border: "1px solid red" }}>
    <Cover {...args} />
  </div>
);

export const BasicStory: typeof Template = Template.bind({});
BasicStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>header</div>
      <h1 style={{ border: "1px solid blue" }}>Cover</h1>
      <div style={{ border: "1px solid blue" }}>footer</div>
    </>
  ),
  minHeight: "calc(100vh - calc(100vh - 100%))",
  centered: "h1",
  space: "1rem",
};

// FYI: https://every-layout.dev/demos/cover-html-book/
export const BookCoverStory = Template.bind({});
BookCoverStory.args = {
  children: (
    <>
      <div>
        <h1 style={{ border: "1px solid blue" }}>How To Create A Book Cover</h1>
        <p style={{ border: "1px solid blue" }}>With Flexbox &amp; Love</p>
      </div>
      <p style={{ border: "1px solid blue" }}>By Heydon Pickering</p>
    </>
  ),
  minHeight: "calc(50vh - calc(50vh - 100%))",
  centered: "div",
  space: "1rem",
};

// FYI: https://every-layout.dev/demos/cover-page-intro/
export const LayoutStory = Template.bind({});
LayoutStory.args = {
  children: (
    <>
      <header style={{ border: "1px solid blue" }}>
        <div>Header</div>
      </header>
      <div style={{ border: "1px solid blue" }}>
        Welcome To My Site, Visitor!
      </div>
      <p style={{ border: "1px solid blue" }}>What I do</p>
    </>
  ),
  minHeight: "calc(100vh - calc(100vh - 100%))",
  centered: "div",
  space: "1rem",
  noPad: true,
};
