---
title: Bodega Map | Roadmap and Changelog
description: List of changes and plans for future developments
head:
  meta:
    - property: "og:type"
      content: "article"
    - property: "article:author"
      content: "https://github.com/tmlmt"
    - property: "article:published_time"
      content: "2023-03-17"
    - property: "article:modified_time"
      content: "2023-11-01"
    - property: "article:section"
      content: "Introduction"
---

# 🚀 Roadmap and Changelog

## Roadmap

We have more ideas than we have the time to develop, and you are more than welcome to give your opinion: see more info [here](./collaboration)

The plans might change over time, but the focus in the coming period will revolve around:

- Adding a caption (for image credits)
- Progressive loading of bodegas (performance)
- Star ranking of bodegas (for registered users)
- Ability to main and share lists of places (for registered users)
- Bug fixes and maybe some feature requests you have submitted in the [collaboration repository](https://github.com/tmlmt/bodegamap-collab/issues)

## Changelog (user-facing changes)

### v2.0.3-2.0.4

Various fixes for v2.0

### v2.0.2

#### 🔥 Performance

- Lazy-loading of sidebars and bottom panel

### v2.0.1

#### 🔥 Performance

- **Map:** Only fetch initial bodegas at first map load

#### 🩹 Fixes

- Load bodegas under review upon login

### v2.0.0 🎉🎉

Two new major user functionalities and numerous adjustements under the hood signal the end of the launch version v1 and the start of a new development phase.

#### 🚀 Enhancements

- User-added bodegas and user-submitted edit suggestions
- **wiki:** Functionalities and collaboration pages updated for v2.0.0

### v1.32.0

#### 🚀 Enhancements

- **login:** Press Enter to submit form

#### 🔥 Performance

- **css:** Use minimized css for UI components

#### 🩹 Fixes

- **RightSidebar:** Top margin of visited flag
- **seo:** Homepage head and default bodega og:image

### v1.31.1

#### 🩹 Fixes

- **wiki:** Image sizes

### v1.31.0

#### 🚀 Enhancements

- **wiki:** Update and add pictures to presentation page

#### 🩹 Fixes

- Top margin of direct link icon
- **seo:** Title and description of bodega og:
- **wiki:** add changelog of v1.16.0 and older

### v1.30.0

#### 🚀 Enhancements

- Each bodega is now identified by a unique 8-character hash, which enables more controlled direct links, and SEO optimisation.

#### 🩹 Fixes

- Weird behaviour of the Menubar layout when loading the page

### v1.29.0

#### 🚀 Enhancements

- **reCAPTCHA:** Use recaptcha.net domain to avoid google.com cookies
- Direct link to bodega

### v1.28.1

#### 🔁 Revert

- Do not lazy load locales (cf [v1.27.0](v1.27.0)) as the feature is buggy in the i18n module

### v1.28.0

#### 🚀 Enhancements

- **bottomPanel:** Smoother resizing of table

#### 🔥 Performance

- **RightSidebar:** Generate image thumbnails on the fly

#### 🩹 Fixes

- **en:** Typo in `Hide List`
- **RightSidebar:** Portrait images not automatically rotated

### v1.27.1

#### 🩹 Fixes

- Filters not working sometimes

### v1.27.0

#### 🚀 Enhancements

- Unified login, verification and registration flow
- Show spinning wheel when login and register forms are submitted

#### 🔥 Performance

- Lazy loading of locales

#### 🩹 Fixes

- **login:** Localize links

### v1.26.2

#### 🩹 Fixes

- Minor fix in admin section

### v1.26.1

#### 🩹 Fixes

- Bottom panel not showing all properties when opened first time
- Menu dropdown stays below sidebar
- Do not redraw map twice after applying filters

### v1.26.0

#### 🚀 Enhancements

- Improved sign in/out experience
- **Header:** Turn logo into link to home page

### v1.25.0

#### 🚀 Enhancements

- **RightSidebar:** Specify in orange when a bodega closes soon

#### 🩹 Fixes

- **pwa:** Allow cross-origin access of app icons and enable installing Bodega Map as an app from the browser

### v1.24.0

#### 🚀 Enhancements

- **seo:** Add description and article meta data to all wiki pages

#### ❤️ Contributors

- **wiki:** Add 'A Classic Enthusiast' as a contributor

#### 🔥 Performance

- **RightSidebar:** Optimize image sizes and add placeholder for thumbnails

#### 🩹 Fixes

- **wiki:** [EN] Spanish translation is not mentioned

### v1.23.1

#### 🩹 Fixes

- Preferred language is not correctly remembered
- Bodegas now correctly load after sign-in

#### 🏡 Chore

- Various updates under the hood

### v1.23.0

#### 🚀 Enhancements

- User management for admins

### v1.22.7

#### 🏡 Chore

- Various updates under the hood

### v1.22.6

#### 🩹 Fixes

- **RightSidebar:** Image sizes

### v1.22.5

#### 🔥 Performance

- 20% faster loading of bodega clusters

#### 🏡 Chore

- Various updates under the hood

### v1.22.4

#### 📦 Build / ✅ Tests / 🏡 Chore

- Various updates and improvements under the hood.

### v1.22.3

#### 🏡 Chore

- Various updates under the hood

### v1.22.2

#### 🩹 Fixes

- **seo:** Title on index page and preferred locale

### v1.22.1

#### 🩹 Fixes

- Various PWA fixes, including icon background and header border

### v1.22.0: PWA Edition

#### 🚀 Enhancements

- Turn the website into a minimal [Progressive Web Map](https://web.dev/progressive-web-apps/): no offline feature yet, but adds the possibility on mobile devices to save the Bodega Map on your homescreen:
  - Why? This facilitates quick access to the map, and maximizes screen use (e.g. no address bar or tab management bars that are typically in web browsers)
  - How? On iPhone, this is only feasible using _Safari_: click on the share button and select `Save on homescreen`. On Android, select the similar option in the menu of your favorite web browser.

#### 🩹 Fixes

- **security:** (Re-)allow geolocation feature
- Only auto-trigger geolocate on firefox (temp-fix due to on-going issue)
- Toast messages wider than the screen on mobile devices

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

### v1.16.0

- **feat**: show temporarily and permanently closed bodegas
- **feat(locale)**: add Spanish locale

### v1.15.0

- **perf**: progressive loading of metadata. 75% reduction of metadata payload at start
- **feat**: allow smaller zoom (down to 5)

### v1.14.0

- feat(seo): major improvements in SEO
- feat(stats): show stats in percentages
- feat(Lighthouse): add explicit width to logo
- perf: install ReCaptcha only once
- fix(images): image size in fullscreen and other fixes

### v1.13.1

- **Add** (non-feature): Umami analytics
- Improve: replace About by Wiki
- Improve (wiki): clarify way to suggest ideas
- _Fix_: WikiSidebar width
- _Fix_ (wiki): css for code

### v1.13.0

- **Add**: Wiki section
- **Add**: call for collaboration in RightSidebar
- Improve: show image navigators only if more than 1 image
- \_Fix: various fixes for images

### v1.12.0

- **Add**: Direct link to custom center and zoom level + continuous update of URL in address bar to be able to quickly copy-paste
- _Fix_: visibility of name search field in Menubar

### v1.11.0

- **Add**: statistics page

### v1.10.1

- Improve: don't hide menubar with sidepanels
- Improve: load reCaptcha on contact page only
- _Fix_: locales

### v1.10.0

- **Add**: link to Google Maps directions on click to address
- **Add**: games (billard, table football, darts)
- Improve: only show characteristics that are set (no maybes)
- Improve: allow one more zoom level down
- _Fix_: title link color
- _Fix_: labels for visited checkbox in FilterSidebar
- _Fix_: various locales typos
- _Fix_: email verification flow error handling
- _Fix_: registration success message
- _Fix_: allow +, æ, ø, å in email addresses (closes tmlmt/bodegamap-collab#17)

### v1.9.0

- Improve: openingHours- show all days of week and write "closed" explicitely on closed days
- Improve: menu now says either "show list" or "hide list", and not always the first one
- _Fix_ (MAJOR): do not prevent visitors from registering (it was showing "you need to be logged in")
- _Fix_: hide bottom panel when navigating out of map
- _Fix_: translate bottom panel
- _Fix_: translate short days (e.g. Mon -> Man, Sat -> Lør)

### v1.8.0

- Enhance: new About page with link to collab repo
- _Fix_: ensure DataTable is updated when a bodega is modified
- _Fix_: hide visited filter if not logged in

### v1.7.1

- Improve: resizeability of DataTable
- _Fix_ (major): fetch of visited bodegas
- _Fix_: visited flag alignment for long bodega names
- _Fix_: callbackUrl for login step of registration
- _Fix_: typo in registration mail

### v1.7.0

- **Add**: user registration and email verification flows
- **Add**: password change and recovery flows
- **Add**: possibility to tag visited bodegas, and filter visited bodegas
- Improve: move login errors messages to toast
- Improve: show bodega name directly has an h2 title
- _Fix_: autofill not working

### v1.6.0

- Improved: turned title into link to home page
- _Fix_: Various details in About page
- _Fix_: Make page title reactive

### v1.5.0

- **Add**: minzoom and maxbounds

### v1.4.0

- Improved: About page
- Enhanced: reset list of bodegas with those in the Stamsted book and a couple of extras

### v1.3.0

- _Fix_: Restore reset markers on click outside layer
- _Fix_: Fix RightSidebar self-closing when clicking in it
- _Fix_: multiple other issues

### v1.2.2

- _Edit_: switch domain to bodegamap.com
- _Edit_: switch geoLocate to tracking mode
- _Fix_: geoLocate trigger on load (desktop)
- _Fix_: locale en.json, locale setting and cookie use
- _Fix_: removed unused variable in header

### v1.2.1

- Localize metadata

### v1.2.0

- Add: donation link

### v1.1.0

- Fix and improvements on the Contact Page

### v1.0.0

Minimum Viable Product 🎉🎉🎉
