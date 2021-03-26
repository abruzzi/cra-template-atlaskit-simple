import SideNavigation from "./side-navigation";
import { HORIZONTAL_GLOBAL_NAV_HEIGHT } from "@atlaskit/atlassian-navigation";
import { N40 } from "@atlaskit/theme/colors";

import Navigation from "./atlassian-navigation";

const Home = () => {
  return (
    <div
      onClick={(e) => e.preventDefault()}
      style={{
        height: "100vh",
        width: "100vw",
        minHeight: 600,
      }}
    >
      <div style={{ zIndex: 10, position: "relative" }}>
        <Navigation />
      </div>

      <div
        style={{
          height: `calc(100% - ${HORIZONTAL_GLOBAL_NAV_HEIGHT}px)`,
          minHeight: 600,
          display: "flex",
        }}
      >
        <div
          style={{
            minHeight: 600,
            borderRight: `1px solid ${N40}`,
          }}
        >
          <SideNavigation />
        </div>
      </div>
    </div>
  );
};

export default Home;
