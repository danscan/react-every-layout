import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Sidebar as SidebarComponent } from "./Sidebar";

// HACK: for controls with react-codegen-typescript
const Sidebar: CssPropertiesFC<typeof SidebarComponent> = SidebarComponent;
export const SidebarStorybook = Sidebar;

export default {
  title: "layouts/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <div style={{ width: "100vw", height: "100vh", border: "1px solid red" }}>
    <Sidebar {...args} />
  </div>
);

// FYI: https://every-layout.dev/demos/sidebar-media-object/
export const MediaObjectStory: typeof Template = Template.bind({});
MediaObjectStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>Media</div>
      <div style={{ border: "1px solid blue" }}>
        <h1>Title</h1>
        <p>Object</p>
      </div>
    </>
  ),
  sideWidth: "33%",
  contentMin: "60%",
  space: "1rem",
};

// FYI: https://every-layout.dev/demos/sidebar-input-with-button/
export const FormButtonStory = Template.bind({});
FormButtonStory.args = {
  children: (
    <>
      <input type="text" style={{ border: "1px solid blue" }} />
      <button type="submit" style={{ border: "1px solid blue" }}>
        SearchText
      </button>
    </>
  ),
  sideWidth: "20%",
  contentMin: "80%",
  side: "right",
};

export const HeaderStory = Template.bind({});
HeaderStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>Logo</div>
      <div
        style={{
          border: "1px solid blue",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>About</div>
        <div>Blog</div>
        <div>Shop</div>
        <div>Contact</div>
        <div>Accessibility</div>
      </div>
    </>
  ),
  sideWidth: "4rem",
  contentMin: "60%",
  space: "1rem",
};

export const LayoutStory = Template.bind({});
LayoutStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>Nav</div>
      <div style={{ border: "1px solid blue" }}>
        <div>Text 1</div>
        <div>Text 2</div>
        <div>Text 3</div>
        <div>Text 4</div>
        <div>Text 5</div>
      </div>
    </>
  ),
  sideWidth: "25%",
  contentMin: "70%",
  noStretch: true,
  space: "1rem",
};
