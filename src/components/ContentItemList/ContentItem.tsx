import { Card, colors, Grid, alpha, Typography } from "@mui/material";
import { FC } from "react";
import { ContentItem } from "../../types/model";
import { isContentFolder } from "../../utils/type-guards";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";

export interface ContentItemListItemProps {
  contentItem: ContentItem;
  onClick: () => void;
}

const ContentItemListItem: FC<ContentItemListItemProps> = ({
  contentItem,
  onClick,
}) => {
  const isFolder = isContentFolder(contentItem);

  const { name } = contentItem;

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card
        onClick={onClick}
        sx={{
          boxShadow: 2,
          borderRadius: 2,
          m: 1,
          p: 2,
          minHeight: 150,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          transition: "0.3s",
          ":hover": {
            cursor: "pointer",
            background: alpha(colors.grey[500], 0.2),
          },
          ":active": {
            cursor: "pointer",
            background: alpha(colors.grey[500], 0.5),
          },
        }}
      >
        {isFolder ? (
          <FolderIcon
            sx={{
              fontSize: 120,
              color: colors.blue[500],
            }}
          />
        ) : (
          <DescriptionIcon
            sx={{ fontSize: 120, color: colors.grey[500] }}
            color="action"
          />
        )}
        <Typography
          variant="caption"
          component="div"
          sx={{
            fontSize: 18,
          }}
        >
          {name}
        </Typography>
      </Card>
    </Grid>
  );
};

export default ContentItemListItem;
