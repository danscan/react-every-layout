import { ComponentMeta, ComponentStory } from "@storybook/react";
import reactHookFormImage from "../../assets/react-hook-form.png";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Frame as FrameComponent } from "./Frame";

// HACK: for controls with react-codegen-typescript
const Frame: CssPropertiesFC<typeof FrameComponent> = FrameComponent;
export const FrameStorybook = Frame;

export default {
  title: "layouts/Frame",
  component: Frame,
} as ComponentMeta<typeof Frame>;

const Template: ComponentStory<typeof Frame> = (args) => (
  <div style={{ width: "50%", border: "1px solid red" }}>
    <Frame {...args} />
  </div>
);

// FYI: https://every-layout.dev/demos/frames-in-cards/
export const BasicStory: typeof Template = Template.bind({});
BasicStory.args = {
  children: (
    <img src={reactHookFormImage} alt="image of react hook form icon" />
  ),
  ratio: "16 / 9",
};

export const ThumbnailStory: typeof Template = Template.bind({});
ThumbnailStory.args = {
  children: (
    <img src={reactHookFormImage} alt="image of react hook form icon" />
  ),
  ratio: "1 / 1",
};
