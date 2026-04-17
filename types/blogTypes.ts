import type { PortableTextBlock } from "sanity";

export default interface BlogTypes {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  featuredImage: { asset: { url: string } };
  author: {
    name: string;
    image: { asset: { url: string } };
  };
  categories: string[];
  publishedAt: string;
  body: PortableTextBlock[]; // ONLY SANITY
  featured: boolean;
}