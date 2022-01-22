import { ComponentMeta, ComponentStory } from "@storybook/react";
import reactHookFormImage from "../../assets/react-hook-form.png";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Reel as ReelComponent } from "./Reel";

// HACK: for controls with react-codegen-typescript
const Reel: CssPropertiesFC<typeof ReelComponent> = ReelComponent;
export const ReelStorybook = Reel;

export default {
  title: "layouts/Reel",
  component: Reel,
} as ComponentMeta<typeof Reel>;

const Template: ComponentStory<typeof Reel> = (args) => (
  <div style={{ width: "100vw", height: "100vh", border: "1px solid red" }}>
    <Reel {...args} />
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
  space: "1rem",
};

// FYI: https://every-layout.dev/demos/reel-cards/
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
      <div style={{ border: "1px solid blue" }}>item 1</div>
      <div style={{ border: "1px solid blue" }}>item 2</div>
      <div style={{ border: "1px solid blue" }}>item 3</div>
      <div style={{ border: "1px solid blue" }}>item 4</div>
    </>
  ),
  space: "1rem",
};

// FYI: https://every-layout.dev/demos/reel-images/
export const ImagesStory = Template.bind({});
ImagesStory.args = {
  children: (
    <>
      <img src={reactHookFormImage} alt="image of react hook form icon" />
      <img src={reactHookFormImage} alt="image of react hook form icon" />
      <img src={reactHookFormImage} alt="image of react hook form icon" />
    </>
  ),
  space: "1rem",
  height: "50vh",
};

// FYI: https://every-layout.dev/demos/reel-links/
export const LinksStory = Template.bind({});
LinksStory.args = {
  children: (
    <>
      <a href="#" style={{ border: "1px solid blue" }}>
        Home
      </a>
      <a href="#" style={{ border: "1px solid blue" }}>
        About
      </a>
      <a href="#" style={{ border: "1px solid blue" }}>
        Pricing
      </a>
      <a href="#" style={{ border: "1px solid blue" }}>
        Documentation
      </a>
      <a href="#" style={{ border: "1px solid blue" }}>
        Forum
      </a>
      <a href="#" style={{ border: "1px solid blue" }}>
        Accessibility
      </a>
    </>
  ),
  space: "1rem",
  noBar: true,
};

export const ScrollStory = Template.bind({});
ScrollStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>item 1</div>
      <div style={{ border: "1px solid blue" }}>item 2</div>
      <div style={{ border: "1px solid blue" }}>item 3</div>
      <div style={{ border: "1px solid blue" }}>item 4</div>
      <div style={{ border: "1px solid blue" }}>item 5</div>
    </>
  ),
  space: "1rem",
  height: "100px",
  itemWidth: "250px",
  thumbColor: "red",
  trackColor: "green",
};
