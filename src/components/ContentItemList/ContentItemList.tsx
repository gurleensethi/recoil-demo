import { Grid, List } from "@mui/material";
import { FC } from "react";
import { ContentFile, ContentFolder } from "../../types/model";
import ContentItemListItem from "./ContentItem";

export interface ContentItemListProps {}

const DEMO_LIST: (ContentFile | ContentFolder)[] = [
  {
    id: "anc",
    createdAt: Date.now(),
    name: "Notes",
    parentId: "root",
    content: "# Hello World",
  },
  {
    id: "anc",
    createdAt: Date.now(),
    name: "Notes",
    parentId: "root",
    children: [],
  },
  {
    id: "anc",
    createdAt: Date.now(),
    name: "Notes",
    parentId: "root",
    children: [],
  },
  {
    id: "anc",
    createdAt: Date.now(),
    name: "Notes",
    parentId: "root",
    content: "# Hello World",
  },
  {
    id: "anc",
    createdAt: Date.now(),
    name: "Notes",
    parentId: "root",
    content: "# Hello World",
  },
];

const ContentItemList: FC<ContentItemListProps> = () => {
  return (
    <Grid
      container
      justifyContent={{
        xs: "center",
        sm: "flex-start",
      }}
      mx="auto"
      sx={{
        maxWidth: (theme) => {
          return theme.breakpoints.values.md;
        },
      }}
      direction="row"
    >
      {DEMO_LIST.map((item) => (
        <ContentItemListItem contentItem={item} key={item.id} />
      ))}
    </Grid>
  );
};

export default ContentItemList;
