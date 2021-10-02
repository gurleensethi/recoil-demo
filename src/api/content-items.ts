import { ContentItem } from "../types/model";
import httpClient from "./http-client";

export async function getContentItems(
  parentId: string = "root"
): Promise<ContentItem[]> {
  return httpClient
    .get<ContentItem[]>("/content-items", { params: { parentId } })
    .then((res) => res.data);
}
