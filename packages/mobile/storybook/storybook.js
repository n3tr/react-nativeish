/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions, global-require */

import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";

// import stories
configure(() => {
  require("react-native-components/stories");
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: "localhost" });
AppRegistry.registerComponent("mobile", () => StorybookUI);
export default StorybookUI;
