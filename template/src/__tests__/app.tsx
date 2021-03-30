import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import App from "../app";

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

test("Sign up form", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  const element = getByText("Create a new account");
  expect(element).toBeInTheDocument();
});
