import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  console.log(header);

  //Check if logo is already loaded
});
