# DHDK Group Project for the course [Information Modeling and Web Technologies](https://www.unibo.it/en/teaching/course-unit-catalogue/course-unit/2022/454464) ![version](https://img.shields.io/badge/version-0.0.1-blue.svg)

## Overview
This repository hosts the web project ["Discovering Bologna"](https://mary-lev.github.io/bologna/), a digital magazine exploring various facets of Bologna through themed issues.

## Framework and Styling
The Bootstrap framework is employed for the fundamental structure and semantic organization of our web pages. Bootstrap's default styling is applied to our service pages. Each magazine issue features a unique default style:
- **Historical Issue (Aldrovandi)**: Renaissance
- **Tourist Issue**: 19th Century Handwriting
- **Feminist Issue**: Bauhaus

## Mixing Maps, Magazines and Metadata
- **Interactive Style Switcher**: A script enables on-the-fly style changes across the site.
- **Metadata Interaction**: Articles are tagged with 'Persons' and 'Places' metadata, extracted via JavaScript and highlighted within the text upon user interaction.
- **Interactive Map**: Utilizes Leaflet with Stamen Watercolor Tile for a themed map of Bologna, marking locations with custom annotations.

## Renaissance Style
- **Inspiration**: Derived from Aldrovandi’s ornithology work, reflecting antique book characteristics.
- **Background**: Imitates the texture of old book pages.
- **Typography**: Uses Metamorphous, Rosarivo, and MedievalSharp fonts for an authentic Renaissance look, with capolettera for initial capitals and adjusted kerning and letter spacing.
- **Design Elements**: Includes a triangle motif for textual decoration and a sticky metadata block styled as a bookmark.
- **Mobile Experience**: The Renaissance style is adapted to a single-column layout on mobile devices, omitting the metadata block for clarity.

## Hippie Style
- **Background**: Features psychedelic patterns.
- **Color Scheme**: Combines forest green, goldenrod, and saddle brown.
- **Typography**: Combines Spice Rice and Arvo fonts for a mix of flair and simplicity.

## Contribution
Feel free to contribute to improving the website by submitting pull requests or opening issues for any bugs or enhancements you identify.

## License
This project is released under the MIT License. See the LICENSE file for more details.