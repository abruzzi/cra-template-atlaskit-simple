import LoginForm from "./login-form";
import heroImage from "./hero.svg";
import { History } from 'history';

const loginContainerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "#fefefe",
};

const heroImageStyles = {
  maxWidth: "36%",
  opacity: 1,
};

type LoginProps = {
  history: History;
};

const Login = ({ history }: LoginProps) => {
  return (
    <div style={loginContainerStyles}>
      <img src={heroImage} style={heroImageStyles} alt="" />
      <LoginForm history={history} />
    </div>
  );
};

export default Login;
