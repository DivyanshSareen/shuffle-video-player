import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "English",
    image: "categories/english.webp",
  },
  {
    _id: uuid(),
    categoryName: "Japanese",
    image: "categories/japanese.webp",
  },
  {
    _id: uuid(),
    categoryName: "Punjabi",
    image: "categories/punjabi.webp",
  },
  {
    _id: uuid(),
    categoryName: "AMV",
    image: "categories/amv.webp",
  },
  { _id: uuid(), categoryName: "Lofi", image: "categories/lofi.webp" },
  {
    _id: uuid(),
    categoryName: "Themes",
    image: "categories/theme.webp",
  },
];
