import { FC } from "react";
import { CssBaseline } from "@mui/material";
import { RecoilRoot } from "recoil";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <RecoilRoot>
        <BrowserRouter>
          <Switch>
            <Route component={HomePage} path="/folder/:parentContentId?" />
            <Redirect to="/folder" />
          </Switch>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
