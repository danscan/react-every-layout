import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Cluster as ClusterComponent } from "./Cluster";

// HACK: for controls with react-codegen-typescript
const Cluster: CssPropertiesFC<typeof ClusterComponent> = ClusterComponent;
export const ClusterStorybook = Cluster;

export default {
  title: "layouts/Cluster",
  component: Cluster,
} as ComponentMeta<typeof Cluster>;

const Template: ComponentStory<typeof Cluster> = (args) => (
  <div style={{ width: "100vw", height: "100vh", border: "1px solid red" }}>
    <Cluster {...args} />
  </div>
);

export const BasicStory: typeof Template = Template.bind({});
BasicStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>Tag A</div>
      <div style={{ border: "1px solid blue" }}>Tag BB</div>
      <div style={{ border: "1px solid blue" }}>Tag CCC</div>
    </>
  ),
};

// FYI: https://every-layout.dev/demos/cluster-ctas/
export const CtasStory = Template.bind({});
CtasStory.args = {
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
  align: "center",
};

// FYI: https://every-layout.dev/demos/cluster-header/
export const HeaderStory = Template.bind({});
HeaderStory.args = {
  children: (
    <>
      <div style={{ border: "1px solid blue" }}>Logo</div>
      <Cluster {...{ justify: "flex-start", align: "center", space: "0.5rem" }}>
        <div style={{ border: "1px solid blue" }}>About</div>
        <div style={{ border: "1px solid blue" }}>Blog</div>
        <div style={{ border: "1px solid blue" }}>Shop</div>
        <div style={{ border: "1px solid blue" }}>Contact</div>
        <div style={{ border: "1px solid blue" }}>Accessibility</div>
      </Cluster>
    </>
  ),
  justify: "space-between",
  align: "center",
  space: "2rem",
};
