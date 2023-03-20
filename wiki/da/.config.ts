import { WikiOutline } from "../../../types/wiki";

export const sidebar: WikiOutline[] = [
  {
    text: "Introduktion",
    collapsible: false,
    items: [
      { text: "Hvad er Bodega Map?", link: "what-is-bodega-map" },
      { text: "Hvem står bag det?", link: "authors" },
      { text: "Roadmap og Changelog", link: "roadmap-and-changelog" },
      { text: "Må jeg bidrage?", link: "collaboration" },
    ],
  },
  {
    text: "Q&A",
    collapsible: false,
    items: [{ text: "Hvad er en bodega?", link: "what-is-a-bodega" }],
  },
  /* {
    text: "Referencer",
    collapsible: true,
    items: [
      {
        text: "Bøger",
        items: [
          { text: "Stamsteder", link: "stamsteder" },
          { text: "Bodega Blues", link: "bodega-blues" },
        ],
      },
    ],
  }, */
];
