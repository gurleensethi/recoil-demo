import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export interface RootPageProps {}

const RootPage: FC<RootPageProps> = ({ children }) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton size="large" color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Home</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {children}
      <Toolbar />
    </>
  );
};

export default RootPage;
