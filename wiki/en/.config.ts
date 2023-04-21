import { WikiOutline } from "../../../types/wiki";

export const sidebar: WikiOutline[] = [
  {
    text: "Introduction",
    collapsible: false,
    items: [
      { text: "What is Bodega Map?", link: "what-is-bodega-map" },
      { text: "About the author", link: "author" },
      { text: "Roadmap and Changelog", link: "roadmap-and-changelog" },
      {
        text: "Contribution",
        items: [
          { text: "Can I contribute?", link: "collaboration" },
          { text: "Contributors", link: "contributors" },
        ],
      },
    ],
  },
  {
    text: "Q&A",
    collapsible: false,
    items: [{ text: "What is a bodega?", link: "what-is-a-bodega" }],
  },
  {
    text: "Legal",
    collapsible: true,
    items: [{ text: "Privacy Policy", link: "privacy-policy" }],
  },
];
