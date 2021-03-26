import { useState } from "react";

import {
  AtlassianNavigation,
  ProductHome,
  PrimaryButton,
  PrimaryDropdownButton,
} from "@atlaskit/atlassian-navigation";
import { AtlassianIcon, AtlassianLogo } from "@atlaskit/logo";
import Popup from "@atlaskit/popup";
import { ButtonItem, PopupMenuGroup, Section } from "@atlaskit/menu";
import QuestionCircleIcon from "@atlaskit/icon/glyph/question-circle";
import { colors } from "@atlaskit/theme";

const ProductHomeExample = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
);

const PopupContents = () => (
  <PopupMenuGroup>
    <Section>
      <ButtonItem
        description="But what is an Atlassian, anyway?"
        iconBefore={
          <QuestionCircleIcon
            primaryColor={colors.B300}
            label=""
            size="medium"
          />
        }
      >
        About
      </ButtonItem>
    </Section>
  </PopupMenuGroup>
);
const ExploreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popup
      content={PopupContents}
      isOpen={isOpen}
      placement="bottom-start"
      onClose={() => setIsOpen(false)}
      trigger={(triggerProps) => (
        <PrimaryDropdownButton
          {...triggerProps}
          isSelected={isOpen}
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        >
          Explore
        </PrimaryDropdownButton>
      )}
    />
  );
};
const AtlassianNavigationBar = () => (
  <div>
    <AtlassianNavigation
      label="site"
      primaryItems={[
        <PrimaryButton>Issues</PrimaryButton>,
        <ExploreDropdown />,
      ]}
      renderProductHome={ProductHomeExample}
    />
  </div>
);

export default AtlassianNavigationBar;
