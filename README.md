# Earth: A Hugo theme

The Hugo theme for [cariad.earth](https://cariad.earth).

## Features

- Responsive; tested on iPhones and iPads
- Respects the system light/dark mode
- Local fonts; no calls to Google Fonts
- Minimal + local JavaScript
- Table of contents
- OpenGraph / Twitter cards
- Emoji favicon
- Fathom Analytics
- Resizes and converts images to WebP
- Featured images
- Code syntax highlighting with Dracula theme

## Installation

```console
cd <your Hugo site>
git submodule add https://github.com/cariad/earth.git themes/earth
```

In your `config.toml`, set the theme to `earth`:

```toml
theme = "earth"
```

## Configuration

### Site

In your `config.[toml|json|yaml]`:

```toml

[author]
# Full name of your site's author.
name = "Danny Sausages"

[author.twitter]
# Twitter account of your site's author. Optional.
creator = "@CariadEccleston"

# Twitter account of your site's brand.
# Optional and defaults to the creator above.
site = "@PrinterOnFire"

[params]
  # Name of the image in your images page bundle to display in the sidebar.
  # Optional and defaults to no image.
  avatar = "me"

  # Fathom Analytics (referral link: https://usefathom.com/ref/TVWIFS) site ID.
  # Optional and defaults to no Fathom integration.
  fathom = "MACARONI"

  # Emoji to use as the site's favicon.
  # Optional and defaults to 🔥.
  favicon = "🔥"

  # Greeting to show in the sidebar and home page.
  greeting = "Hello! I'm Danny Sausages and I'm your personal chef."

  # Path to your image page bundle.
  # Optional and defaults to "/images".
  images = "/images"

[params.opengraph]
# Name of the image in your images page bundle.
# Optional and defaults to no OpenGraph image.
image = "opengraph"

[params.sideNav]
  # Title of the page list in the sidebar.
  # Optional and defaults to "Pages".
  title = "Pages"

[params.sideNav.home]
  # Whether or not to include a home link in the sidebar page list.
  # Optional and defaults to true.
  include = true

  # Title of the home link in the sidebar page list.
  # Optional and defaults to "Home".
  title = "Home"

  # URI of the home link in the sidebar page list.
  # Optional and defaults to "/".
  uri = "/"
```

### Sections

To include a section on the home page or sidebar, create an `_index.md` file in the section's directory with the following front matter:

```yaml
---
# Label for links to more of the section's pages.
# Optional and defaults to "More".
more_text: More posts

# Puts the section on the home page.
# Optional and defaults to false.
on_home: true

# Puts the section in the sidebar.
# Optional and defaults to false.
on_side: true

# Section title.
# Required.
title: Blog posts

# Prescribes the (ascending) order of sections.
# Optional and defaults to whatever Hugo believes is best.
# Must be >0 if specified.
weight: 1
---
```

### Pages

```yaml
---
# Describes the featured image for the header and OpenGraph.
# Optional and defaults to no image.
image:
  # Name of the image in your images page bundle.
  name: hello

# Puts the page in the side bar.
# Optional and defaults to false.
on_side: true

# Prescribes the (ascending) order of pages.
# Optional and defaults to whatever Hugo believes is best.
# Must be >0 if specified.
weight: 1
---
```

To hide your site's greeting from a page (for example, if the greeting repeats information on the page) then set `include_greeting: false`

## Images

To embed images, they must be stored in a [page bundle](https://gohugo.io/content-management/page-bundles/).

Your bundle's `index.md` should contain data like this:

```yaml
---
headless: true
resources:
  # "name" is the reference to this image from shortcodes and the "image" front
  # matter property.
  - name: parade
    params:
      # Accessible text.
      alt: An ice cream parade on Pluto.

      # Anchor point when the image is resized. Choose from "TopLeft", "Top",
      # "TopRight", "Left", "Center", "Right", "BottomLeft", "Bottom",
      # "BottomRight" or "Smart".
      # Optional and defaults to "Smart".
      anchor: Top

    src:  spine.jpg
    title: Ice Cream Parade
---
```

To embed this image in a page, use the `image` shortcode:

```markdown
Do you remember last year's ice cream parade?

{{< image parade >}}

It was so good!
```

## Contributing

Found a bug? Got a feature request? Great! Please [raise an issue](https://github.com/cariad/earth/issues).

Want to contribute a code change? Superb! Please [raise an issue](https://github.com/cariad/earth/issues) before submitting a pull request. I won't accept any pulls from anyone who anyone I haven't assigned an issue to.

Full contribution guidelines are in [CONTRIBUTING.md](CONTRIBUTING.md).

## Licences

### Fonts

Figtree is &copy; 2022 Erik Kennedy and redistributed under the [SIL Open Font License](static/fonts/figtree/OFL.txt). <!-- cspell:disable-line -->

### Theme

This theme is released under the [MIT Licence](/LICENSE) and remains the copyright of Cariad Eccleston. This grants you permission to use the theme without restriction as long as [the licence text](/LICENSE) is included with any copies that you redistribute.

**Credit is not required, but a link to [cariad/earth](https://github.com/cariad/earth) or [cariad.earth](https://cariad.earth) would be appreciated!&nbsp;🚀**
