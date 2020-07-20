---
slug: "convert-otf-and-ttf-to-eot-font-files"
type: "tech tidbit"
date: 2020-07-20
title: "Convert OTF and TTF to EOT font files"
excerpt: "With a basic command, we can transform OTF and TTF font files to EOT font files for when you still need to support older IE browsers such as IE8."
icon: 🔤
published: true
---

## Support for older Internet Explorer browsers?

At the time of writing, I had to offer support to older IE browsers like IE8 and IE9.
And while browsers have made huge strides in terms of font support, older IE versions are still lacking behind.
Modern browsers support filetypes like `.ttf`, `.woff` and `.woff2` but older Internet Explorer versions rely on `.eot` files.
With the rising popularity of the other filteypes, it wasn't even considered to provide `.eot` files to me.
But with the help of [eot-utils](https://www.w3.org/Tools/eot-utils/), I was able to quickly transform the `.ttf` files to `.eot` files.

## Using one of the eot-utils tools: mkeot

The [eot-utils](https://www.w3.org/Tools/eot-utils/) package is a collection of two small utils provided by the W3 to help you with older browser support: `mkeot` and `eotinfo`.
We're only interested in the `mkeot` command.

To install the `eot-utils`, following the instructions on their website.
Or if you're on a Mac, `brew` has them also available and so they are quickly installed by running the command:

```bash
brew install eot-utils
```

## The command to transform all my font files

After opening my terminal and navigating to the folder containing all my font files, I simply had to run:

```bash
find *.ttf -exec sh -c 'mkeot {} > $(basename {} .ttf).eot' \;
```

What the command does is make a list of all files that end on `.ttf` and executing the same command on each one of them: provide the file as an input to `mkeot` and save the output in `{basename}.eot`.
A font file like `foo.ttf` would thus be transformed to `foo.eot` while not adapting the original file.

## The font types of the future

If you want to support as many browsers as possible, it sounds like you're kind of obligated to support `.eot`, `.ttf` and `.woff`.
By combining these 3 font types. you're able to support most browsers, whether they're the desktop or mobile version.
From those font types, `.woff` is the most recent one.
It's supported by almost all browsers such as IE9 as you can see on [caniuse.com](https://caniuse.com/#feat=woff).
`.woff2` is its successor which provides better compression and is [W3C Recommendation since March 2018](https://www.w3.org/TR/WOFF2/).
If you're not sure which file type you should choose, your best bet is `.woff2` especially if you don't need to support very old browsers.
Most people will even recommend only going with `.woff2` support or if really necessary to go with `.woff` support.
Font file types like `.eot` are only relevant for IE8 and since Microsoft has [dropped support for IE8 since 2016](https://www.microsoft.com/en-ca/WindowsForBusiness/End-of-IE-support), you can motivate using the newer font file types.