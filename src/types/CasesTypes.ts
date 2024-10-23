export interface IFSuccessStory {
  title: string;
  description: string;
  images: {
    src: string;
    desc?: string;
  }[];
  location?: string;
  previewDesc: string;
  slug: string;
}
