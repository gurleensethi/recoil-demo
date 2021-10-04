import { FC, useEffect } from "react";
import ContentItemList from "../components/ContentItemList/ContentItemList";
import { useRecoilValueLoadable, useResetRecoilState } from "recoil";
import { contentItems } from "../state/content";
import RootPage from "../components/layout/RootPage";
import { ContentFolder } from "../types/model";
import { useHistory, useParams } from "react-router";
import { Button } from "@mui/material";

export interface HomePageProps {}

export interface HomePageParams {
  parentContentId?: string;
}

const HomePage: FC<HomePageProps> = () => {
  const history = useHistory();
  const { parentContentId } = useParams<HomePageParams>();
  const contentItemsState = useRecoilValueLoadable(
    contentItems(parentContentId || "root")
  );
  const refetch = useResetRecoilState(contentItems(parentContentId || "root"));

  useEffect(() => {
    refetch();
  }, [parentContentId, refetch]);

  const handleFolderItemClick = (item: ContentFolder) => {
    history.push(`/folder/${item.id}`);
  };
  const handleFileItemClick = () => {};

  return (
    <RootPage>
      {contentItemsState.state === "loading" && "loading..."}
      {contentItemsState.state === "hasValue" && (
        <ContentItemList
          contentItems={contentItemsState.contents}
          onFolderClick={handleFolderItemClick}
          onFileClick={handleFileItemClick}
        />
      )}
      {contentItemsState.state === "hasError" && (
        <div>
          Error occurred...<Button onClick={refetch}>Retry</Button>
        </div>
      )}
    </RootPage>
  );
};

export default HomePage;
