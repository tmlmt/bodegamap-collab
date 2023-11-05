# Bodega Map - Collaboration

## Introduction

This repository is meant as a collaboration platform for the [Bodega Map](https://www.bodegamap.com). The Bodega Map is a web application mapping the traditional Danish pubs / locals in the Copenhagen Area, with functionalities for registered users.

![image](https://user-images.githubusercontent.com/10244927/218881806-fdea9abe-1264-4ece-9d1c-c1b532c473f2.png)

## Changelog

See corresponding [wiki page](https://www.bodegamap.com/wiki/roadmap-and-changelog)

## How to collaborate

### Found an issue with the website? 🐛

Check that it is not already listed in the [issues](https://github.com/tmlmt/bodegamap-collab/issues) list. If not, create a new one!

### Want to suggest updated metadata 🗃️ or submit a picture 📷 for some bodega?

Register as a user and you will be able to add / edit bodegas, and add pictures. Read more in the list of functionalities on [this wiki page](https://www.bodegamap.com/wiki/what-is-bodega-map).

### Have an idea? 💡

Open a [discussion](https://github.com/tmlmt/bodegamap-collab/discussions) first in the Ideas category 😊

### Want to translate in another language or a local dialect?

Currently, the website has Danish 🇩🇰, English 🇺🇸/🇬🇧 and Spanish 🇪🇦 translations, but it is structured so that adding new languages is really easy. There are two ways you can contribute:

#### 1. Indirect contribution by suggesting via a message, or if in doubt

Write a message with your suggestions (corrections, clarification on how to help, wish for a specific translation, etc.) in the [Discussions](https://github.com/tmlmt/bodegamap-collab/discussions) area.

#### 2. Direct contribution via a git pull request

If you'd like to make direct contributions to this repository and you are comfortable using git (we can also help you if you [message](https://github.com/tmlmt/bodegamap-collab/discussions) us), please follow this procedure:

- On Github:
  - Create an [account](https://github.com/signup)
  - [Fork](https://github.com/tmlmt/bodegamapvue-collab/fork) this repository
- On your machine, in a terminal:
  - Install git (see [official doc](https://github.com/git-guides/install-git))
  - Clone your fork-repository (`git clone https://github.com/<your-username>/<repository-name>.git`)
  - Create a new branch (`git branch <branch_name>`), for instance replacing `<branch_name>` by whatever you like
  - Make your contribution using your favorite IDE or text editor:
    - If you want to suggest a correction to an already existing language, make that modification in the corresponding file
    - If you want to suggest a translation into a new language, copy one of the existing ones (e.g. `locales/en.yaml`), rename it with the corresponding [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code (e.g. `locale/fi.yaml`) and translate all value strings. It is the values that need to be translated (right side of ":"), not the keys (left side of ":"). Refer to the english version to double-check the context.
  - Commit your changes (`git commit -am "<message>"` with a descriptive `<message>` of less than 50 characters)
  - Push your change (`git push`)
- Back to Github:
  - Create a pull request to this repo: see [official doc](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) or simply click on the suggested button when you go back to your fork repository on Github)

We will look at your request as soon as possible. This is the quickest way to implement a change, and the easiest for us.

## Rules

Please use English in your communication, so that we enable as many as possible to participate. All issues will be treated in English. There is however [a specific discussion category](https://github.com/tmlmt/bodegamap-collab/discussions/categories/dansk) for discussions in Danish 😊
