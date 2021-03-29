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

import {History} from 'history';

import fakeAuth from '../fake-auth';

const ProductHomeExample = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
);

const PopupContents = () => (
  <PopupMenuGroup>
    <Section>
      <ButtonItem
        description="What is this all about?"
        iconBefore={
          <QuestionCircleIcon
            primaryColor="#0065FF"
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

const NavigationBar = ({history}: {history: History}) => (
  <div>
    <AtlassianNavigation
      label="site"
      primaryItems={[
        <PrimaryButton>Features</PrimaryButton>,
        <ExploreDropdown />,
      ]}
      renderSignIn={() => 
        <ButtonItem onClick={() => {
          fakeAuth.logout(() => {
            history.push('/login');
          })
        }}>
          Logout
        </ButtonItem>
      }
      renderProductHome={ProductHomeExample}
    />
  </div>
);

export default NavigationBar;
