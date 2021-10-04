import { atom, DefaultValue, selectorFamily } from "recoil";
import { getContentItems } from "../api/content-items";
import { ContentItem } from "../types/model";

const contentItemsReset = atom({
  key: "Content/contentItems",
  default: 0,
});

export const contentItems = selectorFamily<ContentItem[], string>({
  key: "Content/contentItems",
  get:
    (id: string) =>
    async ({ get }) => {
      get(contentItemsReset);
      const result = await getContentItems(id);
      return result;
    },
  set:
    (id: string) =>
    ({ set }, value) => {
      if (value instanceof DefaultValue) {
        set(contentItemsReset, (prev) => prev + 1);
      }
    },
});
