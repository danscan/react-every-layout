import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Center as CenterComponent } from "./Center";

// HACK: for controls with react-codegen-typescript
const Center: CssPropertiesFC<typeof CenterComponent> = CenterComponent;
export const CenterStorybook = Center;

export default {
  title: "layouts/Center",
  component: Center,
} as ComponentMeta<typeof Center>;

const Template: ComponentStory<typeof Center> = (args) => (
  <div style={{ width: "100vw", height: "100vh", border: "1px solid black" }}>
    <Center {...args} />
  </div>
);

export const BasicStory: typeof Template = Template.bind({});
BasicStory.args = {
  children: <div style={{ border: "1px solid red" }}>Contents</div>,
  gutters: "1rem",
  max: "100px",
};

// FYI: https://every-layout.dev/demos/center-documentation-layout/
export const AndTextStory = Template.bind({});
AndTextStory.args = {
  children: <div style={{ border: "1px solid red" }}>Contents</div>,
  gutters: "1rem",
  max: "100px",
  andText: true,
};

export const IntrinsicStory = Template.bind({});
IntrinsicStory.args = {
  children: <div style={{ border: "1px solid red" }}>Contents</div>,
  gutters: "1rem",
  intrinsic: true,
};
