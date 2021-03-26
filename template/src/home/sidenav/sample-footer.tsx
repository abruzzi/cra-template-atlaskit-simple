import React from "react";
import Icon from "@atlaskit/icon";
import { CustomItemComponentProps } from "@atlaskit/menu";
import { Footer } from "@atlaskit/side-navigation";

import SampleIcon from "./next-gen-project-icon";

const Container: React.FC<CustomItemComponentProps> = (props) => {
  return <div {...props} />;
};

const ExampleFooter = () => (
  <Footer
    component={Container}
    iconBefore={<Icon label="mode" glyph={SampleIcon} />}
  >
    You're in a next-gen project
  </Footer>
);

export default ExampleFooter;
