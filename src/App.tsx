import { FC } from "react";
import { CssBaseline } from "@mui/material";
import { RecoilRoot } from "recoil";
import HomePage from "./pages/HomePage";

const App: FC = () => {
  return (
    <RecoilRoot>
      <CssBaseline />
      <HomePage />
    </RecoilRoot>
  );
};

export default App;
