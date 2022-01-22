import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Stack as StackComponent } from "./Stack";

// HACK: for controls with react-codegen-typescript
const Stack: CssPropertiesFC<typeof StackComponent> = StackComponent;
export const StackStorybook = Stack;

export default {
  title: "layouts/Stack",
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <div style={{ width: "100vw", height: "100vh", border: "1px solid red" }}>
    <Stack {...args} />
  </div>
);

export const BasicStory: typeof Template = Template.bind({});
BasicStory.args = {
  children: (
    <>
      <h2 style={{ border: "1px solid blue" }}>h2</h2>
      <div style={{ border: "1px solid blue" }}>img</div>
      <p style={{ border: "1px solid blue" }}>p</p>
    </>
  ),
  space: "1rem",
};

// FYI: https://every-layout.dev/demos/stack-variants/
export const NestedStory = Template.bind({});
NestedStory.args = {
  children: (
    <>
      <h2 style={{ border: "1px solid blue" }}>h2</h2>
      <Stack space="0.5rem">
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
      </Stack>
      <h2 style={{ border: "1px solid blue" }}>h2</h2>
      <Stack space="0rem">
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
      </Stack>
    </>
  ),
  space: "1rem",
};

// FYI: https://every-layout.dev/demos/stack-recursion/
export const RecursiveStory = Template.bind({});
RecursiveStory.args = {
  children: (
    <>
      <h2 style={{ border: "1px solid blue" }}>h2</h2>
      <div style={{ border: "1px solid blue" }}>
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
      </div>
      <h2 style={{ border: "1px solid blue" }}>h2</h2>
      <div style={{ border: "1px solid blue" }}>
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
      </div>
    </>
  ),
  recursive: true,
  space: "1rem",
};

// FYI: https://every-layout.dev/demos/stack-split/
export const SplitAfterStory = Template.bind({});
SplitAfterStory.args = {
  children: (
    <>
      <h2 style={{ border: "1px solid blue" }}>h2</h2>
      <div style={{ border: "1px solid blue" }}>
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
      </div>
      <h2 style={{ border: "1px solid blue" }}>h2</h2>
      <div style={{ border: "1px solid blue" }}>
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
        <p style={{ border: "1px solid blue" }}>p</p>
      </div>
    </>
  ),
  splitAfter: 2,
  space: "1rem",
};
