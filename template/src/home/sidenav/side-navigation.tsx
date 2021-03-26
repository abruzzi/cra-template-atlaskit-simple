import WorkIcon from "@atlaskit/icon/glyph/folder";
import CustomerIcon from "@atlaskit/icon/glyph/person";
import SettingsIcon from "@atlaskit/icon/glyph/settings";
import LanguageIcon from "@atlaskit/icon/glyph/world";

import {
  ButtonItem,
  LinkItem,
  NavigationFooter,
  NavigationHeader,
  NestableNavigationContent,
  NestingItem,
  Section,
  SideNavigation,
} from "@atlaskit/side-navigation";

import SampleHeader from "./sample-header";
import SampleFooter from "./sample-footer";

const LanguageSettings = () => {
  return (
    <NestingItem
      iconBefore={<LanguageIcon label="" />}
      id="3-1"
      title="Language settings"
    >
      <Section>
        <ButtonItem>Customize</ButtonItem>

        <NestingItem id="3-1-1" title="German Settings">
          <Section>
            <ButtonItem>Hallo Welt!</ButtonItem>
          </Section>
        </NestingItem>
        <NestingItem id="3-1-2" title="English Settings">
          <Section>
            <ButtonItem>Hello World!</ButtonItem>
          </Section>
        </NestingItem>
      </Section>
    </NestingItem>
  );
};

const MySideNavigation = () => {
  return (
    <SideNavigation label="project">
      <NavigationHeader>
        <SampleHeader />
      </NavigationHeader>
      <NestableNavigationContent>
        <Section>
          <ButtonItem iconBefore={<WorkIcon label="" />}>Your work</ButtonItem>
          <LinkItem href="#" iconBefore={<CustomerIcon label="" />}>
            Your customers
          </LinkItem>
          <NestingItem
            id="1"
            iconBefore={<SettingsIcon label="" />}
            title="Settings"
            testId="settings-nesting-item"
          >
            <Section>
              <LanguageSettings />
            </Section>
          </NestingItem>
        </Section>
      </NestableNavigationContent>
      <NavigationFooter>
        <SampleFooter />
      </NavigationFooter>
    </SideNavigation>
  );
};

export default MySideNavigation;
