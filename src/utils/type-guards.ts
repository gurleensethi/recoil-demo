import { ContentFile, ContentFolder, ContentItem } from "../types/model";

export function isContentFile(obj: ContentItem): obj is ContentFile {
  return obj && !!(obj as any).content;
}

export function isContentFolder(obj: ContentItem): obj is ContentFolder {
  return obj && !!(obj as any).children && Array.isArray((obj as any).children);
}
