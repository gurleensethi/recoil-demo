import { FC } from "react";
import ContentItemList from "../components/ContentItemList/ContentItemList";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { contentItems, currentParentId } from "../state/content";
import RootPage from "../components/layout/RootPage";
import { ContentFolder } from "../types/model";

const HomePage: FC = () => {
  const [parentId, setParentId] = useRecoilState(currentParentId);
  const contentItemsState = useRecoilValueLoadable(contentItems);

  const handleFolderItemClick = (item: ContentFolder) => {
    setParentId(item.id);
  };
  const handleFileItemClick = () => {};

  return (
    <RootPage>
      {contentItemsState.state === "loading" ? (
        "loading..."
      ) : (
        <ContentItemList
          contentItems={contentItemsState.contents}
          onFolderClick={handleFolderItemClick}
          onFileClick={handleFileItemClick}
        />
      )}
    </RootPage>
  );
};

export default HomePage;
