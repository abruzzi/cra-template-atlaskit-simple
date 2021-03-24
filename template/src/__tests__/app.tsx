import { render } from "@testing-library/react";
import App from "../app";

test("sign up form", async () => {
  const { getByText } = render(<App />);
  const element = getByText("Create new account");
  expect(element).toBeDefined();
});
