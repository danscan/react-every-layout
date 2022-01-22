import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Grid as GridComponent } from "./Grid";

// HACK: for controls with react-codegen-typescript
const Grid: CssPropertiesFC<typeof GridComponent> = GridComponent;
export const GridStorybook = Grid;

export default {
  title: "layouts/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <div style={{ width: "100vw", height: "100vh", border: "1px solid red" }}>
    <Grid {...args} />
  </div>
);

export const BasicStory: typeof Template = Template.bind({});
BasicStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>item 1</div>
      <div style={{ border: "1px solid blue" }}>item 2</div>
      <div style={{ border: "1px solid blue" }}>item 3</div>
      <div style={{ border: "1px solid blue" }}>item 4</div>
      <div style={{ border: "1px solid blue" }}>item 5</div>
    </>
  ),
  min: "100px",
  space: "1rem",
};

// FYI: https://every-layout.dev/demos/grid-cards/
export const CardsStory = Template.bind({});
CardsStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>Layout</div>
      <div style={{ border: "1px solid blue" }}>Css</div>
      <div style={{ border: "1px solid blue" }}>Web Design</div>
      <div style={{ border: "1px solid blue" }}>Code</div>
      <div style={{ border: "1px solid blue" }}>Front End</div>
      <div style={{ border: "1px solid blue" }}>Development</div>
    </>
  ),
  min: "250px",
  space: "1rem",
};

export const AutoFillStory = Template.bind({});
AutoFillStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>Layout</div>
      <div style={{ border: "1px solid blue" }}>Css</div>
    </>
  ),
  min: "250px",
  space: "1rem",
};
