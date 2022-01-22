import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Box as BoxComponent } from "./Box";

// HACK: for controls with react-codegen-typescript
const Box: CssPropertiesFC<typeof BoxComponent> = BoxComponent;
export const BoxStorybook = Box;

export default {
  title: "layouts/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <div style={{ width: "50%", border: "1px solid black" }}>
    <Box {...args} />
  </div>
);

export const BoxStory: typeof Template = Template.bind({});
BoxStory.args = {
  children: "Box",
};

export const InvertBoxStory = Template.bind({});
InvertBoxStory.args = {
  children: "invert Box",
  invert: true,
};
