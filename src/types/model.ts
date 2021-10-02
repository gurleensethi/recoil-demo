export interface ContentItem {
  id: string;
  name: string;
  createdAt: number;
  parentId: string;
}

export interface ContentFile extends ContentItem {
  content: string;
}

export interface ContentFolder extends ContentItem {
  childItems: (ContentFile | ContentFolder)[];
}
