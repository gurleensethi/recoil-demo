import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import ContentItemList from "../components/ContentItemList/ContentItemList";

const HomePage: FC = () => {
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
      <ContentItemList />
      <Toolbar />
    </>
  );
};

export default HomePage;
