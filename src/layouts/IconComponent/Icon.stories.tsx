import { ComponentMeta, ComponentStory } from "@storybook/react";
import type { FC } from "react";
import ArrowLeftIcon from "../../assets/arrow-left.svg";
import CheckIcon from "../../assets/check.svg";
import CloseIcon from "../../assets/close.svg";
import MenuIcon from "../../assets/menu.svg";
import type { CssPropertiesFC } from "../../utils/CssPropertiesFC";
import { Icon as IconComponent } from "./Icon";

// HACK: for controls with react-codegen-typescript
const Icon: CssPropertiesFC<typeof IconComponent> = IconComponent;
export const IconStorybook = Icon;

export default {
  title: "layouts/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <div style={{ width: "100vw", height: "100vh", border: "1px solid red" }}>
    <div style={{ border: "1px solid blue", width: "fit-content" }}>
      <Icon {...args} />
    </div>
  </div>
);

export const BasicStory: typeof Template = Template.bind({});
BasicStory.args = {
  children: (
    <>
      <CloseIcon />
      Close
    </>
  ),
  label: "Close",
  space: "0.25em",
};

const TemplateWithChildren: ComponentStory<FC> = ({ children }) => (
  <div style={{ width: "100vw", height: "100vh", border: "1px solid red" }}>
    {children}
  </div>
);

// FYI: https://every-layout.dev/demos/icon-casings/
export const CaseStory = TemplateWithChildren.bind({});
CaseStory.args = {
  children: (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <div>
        {["Close", "close", "CLOSE"].map((label) => (
          <div
            style={{
              border: "1px solid blue",
              width: "fit-content",
            }}
          >
            <Icon label={label} space="0.25em">
              <CloseIcon />
              {label}
            </Icon>
          </div>
        ))}
      </div>
      <div>
        {["Yes", "yes", "YES"].map((label) => (
          <div
            style={{
              border: "1px solid blue",
              width: "fit-content",
            }}
          >
            <Icon label={label} space="0.25em">
              <CheckIcon />
              {label}
            </Icon>
          </div>
        ))}
      </div>
      <div>
        {["Right", "right", "RIGHT"].map((label) => (
          <div
            style={{
              border: "1px solid blue",
              width: "fit-content",
            }}
          >
            <Icon label={label} space="0.25em">
              <ArrowLeftIcon />
              {label}
            </Icon>
          </div>
        ))}
      </div>
      <div>
        {["Menu", "menu", "MENU"].map((label) => (
          <div
            style={{
              border: "1px solid blue",
              width: "fit-content",
            }}
          >
            <Icon label={label} space="0.25em">
              <MenuIcon />
              {label}
            </Icon>
          </div>
        ))}
      </div>
    </div>
  ),
};

// FYI: https://every-layout.dev/demos/icon-sizes/
export const SizeStory = TemplateWithChildren.bind({});
SizeStory.args = {
  children: (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <div>
        {["16px", "24px", "32px"].map((fontSize) => (
          <div
            key={fontSize}
            style={{
              border: "1px solid blue",
              width: "fit-content",
              fontSize,
            }}
          >
            <Icon label="Close" space="0.25em">
              <CloseIcon />
              Close
            </Icon>
          </div>
        ))}
      </div>
      <div>
        {["16px", "24px", "32px"].map((fontSize) => (
          <div
            key={fontSize}
            style={{
              border: "1px solid blue",
              width: "fit-content",
              fontSize,
            }}
          >
            <Icon label="Check" space="0.25em">
              <CheckIcon />
              Yes
            </Icon>
          </div>
        ))}
      </div>
      <div>
        {["16px", "24px", "32px"].map((fontSize) => (
          <div
            key={fontSize}
            style={{
              border: "1px solid blue",
              width: "fit-content",
              fontSize,
            }}
          >
            <Icon label="Right" space="0.25em">
              <ArrowLeftIcon />
              Right
            </Icon>
          </div>
        ))}
      </div>
      <div>
        {["16px", "24px", "32px"].map((fontSize) => (
          <div
            key={fontSize}
            style={{
              border: "1px solid blue",
              width: "fit-content",
              fontSize,
            }}
          >
            <Icon label="Menu" space="0.25em">
              <MenuIcon />
              Menu
            </Icon>
          </div>
        ))}
      </div>
    </div>
  ),
};
