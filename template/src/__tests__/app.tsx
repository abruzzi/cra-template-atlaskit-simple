import { render } from "@testing-library/react";
import App from "../app";

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

test("sign up form", async () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  const element = getByText("Create a new account");
  expect(element).toBeDefined();
});
