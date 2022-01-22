import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Imposter as ImposterComponent } from "./Imposter";

// HACK: for controls with react-codegen-typescript
const Imposter: CssPropertiesFC<typeof ImposterComponent> = ImposterComponent;
export const ImposterStorybook = Imposter;

export default {
  title: "layouts/Imposter",
  component: Imposter,
} as ComponentMeta<typeof Imposter>;

const Template: ComponentStory<typeof Imposter> = (args) => (
  <div style={{ width: "100vw", height: "100vh", border: "1px solid black" }}>
    <div style={{ position: "relative", border: "1px solid red" }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Imposter {...args} />
    </div>
  </div>
);

// FYI: https://every-layout.dev/demos/imposter-over-text/
export const BasicStory: typeof Template = Template.bind({});
BasicStory.args = {
  children: (
    <div style={{ background: "white" }}>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
    </div>
  ),
  margin: "1rem",
};

export const BreakoutStory = Template.bind({});
BreakoutStory.args = {
  children: (
    <div style={{ background: "white" }}>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
    </div>
  ),
  margin: "1rem",
  breakout: true,
};

export const FixedStory = Template.bind({});
FixedStory.args = {
  children: (
    <div style={{ background: "white" }}>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
      <p style={{ border: "1px solid blue" }}>
        You can't see all the content, because of this box.
      </p>
    </div>
  ),
  margin: "1rem",
  fixed: true,
};
