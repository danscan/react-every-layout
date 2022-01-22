import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Switcher as SwitcherComponent } from "./Switcher";

// HACK: for controls with react-codegen-typescript
const Switcher: CssPropertiesFC<typeof SwitcherComponent> = SwitcherComponent;
export const SwitcherStorybook = Switcher;

export default {
  title: "layouts/Switcher",
  component: Switcher,
} as ComponentMeta<typeof Switcher>;

const Template: ComponentStory<typeof Switcher> = (args) => (
  <div style={{ width: "100vw", height: "100vh", border: "1px solid red" }}>
    <Switcher {...args} />
  </div>
);

// FYI: https://every-layout.dev/demos/switcher-basic/
export const BasicStory: typeof Template = Template.bind({});
BasicStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>item 1</div>
      <div style={{ border: "1px solid blue" }}>item 2</div>
      <div style={{ border: "1px solid blue" }}>item 3</div>
    </>
  ),
  threshold: "414px",
  space: "1rem",
};

export const ItemsStory = Template.bind({});
ItemsStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>item 1</div>
      <div style={{ border: "1px solid blue" }}>item 2</div>
      <div style={{ border: "1px solid blue" }}>item 3</div>
      <div style={{ border: "1px solid blue" }}>item 4</div>
      <div style={{ border: "1px solid blue" }}>item 5</div>
      <div style={{ border: "1px solid blue" }}>item 6</div>
    </>
  ),
  limit: 6,
  threshold: "414px",
  space: "1rem",
};

export const ThresholdItemsStory = Template.bind({});
ThresholdItemsStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>item 1</div>
      <div style={{ border: "1px solid blue" }}>item 2</div>
      <div style={{ border: "1px solid blue" }}>item 3</div>
      <div style={{ border: "1px solid blue" }}>item 4</div>
      <div style={{ border: "1px solid blue" }}>item 5</div>
      <div style={{ border: "1px solid blue" }}>item 6</div>
    </>
  ),
  limit: 6,
  threshold: "101%",
  space: "1rem",
};

export const LimitedItemsStory = Template.bind({});
LimitedItemsStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>item 1</div>
      <div style={{ border: "1px solid blue" }}>item 2</div>
      <div style={{ border: "1px solid blue" }}>item 3</div>
      <div style={{ border: "1px solid blue" }}>item 4</div>
      <div style={{ border: "1px solid blue" }}>item 5</div>
      <div style={{ border: "1px solid blue" }}>item 6</div>
    </>
  ),
  limit: 5,
  threshold: "414px",
  space: "1rem",
};
