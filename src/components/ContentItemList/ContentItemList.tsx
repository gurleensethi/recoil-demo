import { Grid } from "@mui/material";
import { FC } from "react";
import { ContentFile, ContentFolder, ContentItem } from "../../types/model";
import { isContentFile, isContentFolder } from "../../utils/type-guards";
import ContentItemListItem from "./ContentItem";

export interface ContentItemListProps {
  contentItems: ContentItem[];
  onFileClick: (contentFile: ContentFile) => void;
  onFolderClick: (contentFolder: ContentFolder) => void;
}

const ContentItemList: FC<ContentItemListProps> = ({
  contentItems,
  onFileClick,
  onFolderClick,
}) => {
  const handleItemClick = (contentItem: ContentItem) => {
    if (isContentFolder(contentItem)) {
      onFolderClick(contentItem);
    } else if (isContentFile(contentItem)) {
      onFileClick(contentItem);
    }
  };

  return (
    <Grid
      container
      justifyContent="flex-start"
      mx="auto"
      sx={{
        maxWidth: (theme) => {
          return theme.breakpoints.values.md;
        },
      }}
      direction="row"
    >
      {contentItems.map((item) => (
        <ContentItemListItem
          contentItem={item}
          key={item.id}
          onClick={() => handleItemClick(item)}
        />
      ))}
    </Grid>
  );
};

export default ContentItemList;
