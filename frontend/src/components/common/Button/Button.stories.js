import React from "react";

import Button from "./index";

export default {
  title: "Buttons",
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args}>button</Button>;

export const Primary = Template.bind({});
Primary.args = { secondary: false, disabled: false };
