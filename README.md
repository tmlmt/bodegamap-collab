# Bodega Map - Collaboration

## Introduction

This repository is meant as a collaboration platform for the [Bodega Map](https://www.bodegamap.com). The Bodega Map is a web application mapping the traditional Danish pubs / locals in the Copenhagen Area, with functionalities for registered users.

![image](https://user-images.githubusercontent.com/10244927/218881806-fdea9abe-1264-4ece-9d1c-c1b532c473f2.png)

## Changelog

### Main app

- [v1.12.0](https://github.com/tmlmt/bodegamap-collab/discussions/27) (06-03-2023)
- [v1.11.0](https://github.com/tmlmt/bodegamap-collab/discussions/26) (03-03-2023)
- [v1.10.1](https://github.com/tmlmt/bodegamap-collab/discussions/23) (26-02-2023)
- [v1.10.0](https://github.com/tmlmt/bodegamap-collab/discussions/21) (20-02-2023)
- v1.9.x: initial public release
- v1.8 and below: alpha / beta releases

### Collab repo

- v1.0.0 (17-03-2023): locales and wiki sections open sourced

## How to collaborate

### Found an issue with the website? 🐛

Check that it is not already listed in the [issues](https://github.com/tmlmt/bodegamap-collab/issues) list. If not, create a new one!

### Want to suggest updated metadata 🗃️ or submit a picture 📷 for some bodega?

Create a new discussion in the [bodegas](https://github.com/tmlmt/bodegamap-collab/discussions/categories/bodegas) catagory of the [discussion](https://github.com/tmlmt/bodegamap-collab/discussions) section.

Regarding pictures, please include your name and the date at which the picture was taken, to properly credit you 😊

### Have an idea? 💡

Open a [discussion](https://github.com/tmlmt/bodegamap-collab/discussions) first in the Ideas category 😊

### Want to translate in another language or a local dialect?

Currently, the website has Danish 🇩🇰 and English 🇺🇸/🇬🇧 translations, but it is structured so that adding new languages is really easy. There are two ways you can contribute:

#### 1. Indirect contribution by suggesting via a message, or if in doubt

Write a message with your suggestions (corrections, clarification on how to help, wish for a specific translation, etc.) in the [Discussions](https://github.com/tmlmt/bodegamap-collab/discussions) area.

#### 2. Direct contribution via a git pull request

If you'd like to make direct contributions to this repository and you are comfortable using git (we can also help you if you [message](https://github.com/tmlmt/bodegamap-collab/discussions) us), please follow this procedure:

- Install git (see [official doc](https://github.com/git-guides/install-git))
- Clone this repository (`git clone https://github.com/tmlmt/bodegamap-collab.git`)
  - If you want to suggest a correction to an already existing language, make that modification in the corresponding file
  - If you want to suggest a translation into a new language, copy one of the existing ones (e.g. `locales/en.json`), rename it with the corresponding [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code (e.g. `locale/fi.json`) and translate all value strings.
- Commit your changes (`git commit -am "<message>"` with a descriptive `<message>` of less than 50 characters)
- Push your change (`git push`)
- Create a pull request to this repo (see [official doc](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request))

We will look at your request as soon as possible. This is the quickest way to implement a change, and the easiest for us.

## Rules

Please use English in your communication, so that we enable as many as possible to participate. All issues will be treated in English. There is however [a specific discussion category](https://github.com/tmlmt/bodegamap-collab/discussions/categories/dansk) for discussions in Danish 😊
