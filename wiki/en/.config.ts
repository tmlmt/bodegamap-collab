import { WikiOutline } from "../../../types/wiki";

export const sidebar: WikiOutline[] = [
  {
    text: "Introduction",
    collapsible: false,
    items: [
      { text: "What is Bodega Map?", link: "what-is-bodega-map" },
      { text: "About the authors", link: "authors" },
      { text: "Roadmap and Changelog", link: "roadmap-and-changelog" },
      { text: "Can I contribute?", link: "collaboration" },
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
  /* {
    text: "References",
    collapsible: true,
    items: [
      {
        text: "Books",
        items: [
          { text: "Stamsteder", link: "stamsteder" },
          { text: "Bodega Blues", link: "bodega-blues" },
        ],
      },
    ],
  }, */
];
