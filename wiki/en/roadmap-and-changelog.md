---
title: Bodega Map | Roadmap and Changelog
---

# 🚀 Roadmap and Changelog

## Roadmap

We have more ideas than we have the time to develop, and you are more than welcome to give your opinion: see more info [here](./collaboration)

The plans might change over time, but the focus in the coming period will revolve around:

- Enabling to propose changes to bodega data, and propose the addition of new bodegas to the map (for registered users)
- Improvements to images: adding a caption (for image credits) and fixing the orientation for portrait images
- Progressive loading of bodegas (performance)
- Direct link to a specific bodega, and bodega-specific detail page
- Star ranking of bodegas (for registered users)
- Ability to main and share lists of places (for registered users)
- Bug fixes and maybe some feature requests listed in the [collaboration repository](https://github.com/tmlmt/bodegamap-collab/issues)

## Changelog

### v1.21.1

#### 🩹 Fixes

- Use relative url in Privacy Policy
- Canonical url and title for map called with with specific coordinates (e.g. https://www.bodegamap.com/@12,55,12z)

#### 🏡 Chore

- Port to Umami Analytics v2

### v1.21.0: Wiki Updates Edition

#### 🚀 Enhancements

- **menu:** Add flags to locale switcher
- **wiki:** Add [Privacy Policy](/en/wiki/privacy-policy)
- **head:** Add metatag for [Facebook Page](https://www.facebook.com/bodegamap) Insights

#### 🩹 Fixes

- **wiki:** Restore reactivity with locale change
- **wiki:** Inform about fallback locale only once

#### 💅 Refactors

- **wiki:** Author and contributors

### v1.20.2

#### 🩹 Fixes

- **seo:** correction in metatags attributes

### v1.20.1

#### 🩹 Fixes

- **map:** Cluster radius and sizes

### v1.20.0: Cluster Edition

#### 🚀 Enhancements

- **Cluster bodegas**: bodegas are now clustered when you browse the map, when there's more bodegas within a certain radius than the map can display without overlapping them. Before, some bodegas may have appear not to exist because you needed to zoom in further in order for the marker to appear due to the non-overlapping rule.
  - The count within a cluster circle indicate the number of bodegas contained in the cluster
  - A click on a cluster will zoom you into the zoom level where the cluster is further broken down

#### 🩹 Fixes

- **filters:** Re-establish name search field

### v1.19.0: Sharing Edition

#### 🚀 Enhancements

- **Sharing link with filters:** open the filter panel (filter icon in the upper left corner of the map), and once you've set up the desired filter, click on the sharing icon <i class="pi pi-share-alt"></i> to copy a link to the clipboard. It will lead to where the map is currently located, and with filters pre-set.

#### 🩹 Fixes

- **layout:** Fix height on Chrome mobile

### v1.18.0: Mobile-friendly Edition

#### 🚀 Enhancements

- Mobile-keyboard-friendly input fields
- Dismiss keyboard on Enter in search field

#### 🩹 Fixes

- Various bug fixes

### v1.17.0: Summer Edition

#### 🚀 Enhancements

- **filters:** Add livemusic, tv and outdoor seating as additional bodega characteristics

#### 🩹 Fixes

- **seo:** Improvement in metatags

### v1.16.1

#### 🩹 Fixes

- Various bug fixes

### v1.16.0 and older

See [Releases](https://github.com/tmlmt/bodegamap-collab/discussions/categories/announcements?discussions_q=is%3Aopen+category%3AAnnouncements+sort%3Adate_created)
