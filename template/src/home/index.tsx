import SideNavigation from "./sidenav/side-navigation";
import {History} from 'history';
import Navigation from "./atlassian-navigation";
import fakeAuth from '../fake-auth';
import { Redirect } from 'react-router';

type HomeProps = {
  history: History;
}

const Home = ({ history }: HomeProps) => {
  if(!fakeAuth.isAuthenticated) {
    return <Redirect to="/login" />
  }

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
        <Navigation history={history} />
      </div>

      <div
        style={{
          height: `calc(100% - 56px)`,
          minHeight: 600,
          display: "flex",
        }}
      >
        <div
          style={{
            minHeight: 600,
            borderRight: "1px solid #DFE1E6",
          }}
        >
          <SideNavigation />
        </div>
      </div>
    </div>
  );
};

export default Home;
