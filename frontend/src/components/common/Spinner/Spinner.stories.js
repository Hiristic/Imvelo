import React from "react";

import Spinner from "./Spinner";

export default {
  title: "Spinner",
  component: Spinner,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = { color: "#000", size: "32px" };
