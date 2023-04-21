import { WikiOutline } from "../../../types/wiki";

export const sidebar: WikiOutline[] = [
  {
    text: "Introduktion",
    collapsible: false,
    items: [
      { text: "Hvad er Bodega Map?", link: "what-is-bodega-map" },
      { text: "Hvem står bag det?", link: "author" },
      { text: "Roadmap og Changelog", link: "roadmap-and-changelog" },
      {
        text: "Bidrag",
        items: [
          { text: "Må jeg bidrage?", link: "collaboration" },
          { text: "Bidragydere", link: "contributors" },
        ],
      },
    ],
  },
  {
    text: "Q&A",
    collapsible: false,
    items: [{ text: "Hvad er en bodega?", link: "what-is-a-bodega" }],
  },
];
