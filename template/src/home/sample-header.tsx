import Icon from "@atlaskit/icon";
import { CustomItemComponentProps } from "@atlaskit/menu";

import { Header } from "@atlaskit/side-navigation";

import SampleIcon from "./sample-logo";

const Container: React.FC<CustomItemComponentProps> = (props) => {
  return <div {...props} />;
};

const ExampleHeader = () => {
  return (
    <Header
      component={Container}
      description="Next-gen service desk"
      iconBefore={<Icon label="" glyph={SampleIcon} size="medium" />}
    >
      NXTGen Industries
    </Header>
  );
};

export default ExampleHeader;
