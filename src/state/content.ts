import { atom, selector } from "recoil";
import { getContentItems } from "../api/content-items";
import { ContentItem } from "../types/model";

export const currentParentId = atom({
  key: "Content/currentParentId",
  default: "root",
});

export const contentItems = selector<ContentItem[]>({
  key: "Content/contentItems",
  get: async ({ get }) => {
    const parentId = get(currentParentId);
    const result = await getContentItems(parentId);
    return result;
  },
});
