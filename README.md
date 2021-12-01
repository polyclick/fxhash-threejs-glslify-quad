FXHash Three.js Square Screen Quad With Glslify Support
==========================

## What it offers

Perfect for writing custom shaders on a 2D plane.

Three.js boilerplate code for a square quad with custom shader & glslify support for use on FXHash.xyz
Glslify modules can be imported and used for faster prototyping.

![Quad With Custom Shader](readme/Quad.png?raw=true "Quad With Custom Shader")


## How it does that

Uses an orthographic projection camera to show a screen space quad (forced in square ratio).
Listens to window resizes to keep canvas & quad withing viewport bounds.
Passes the current time and resolution to the custom shader.

Uses `yushijinhun/three-minifier` at build time to reduce three.js filesize.
Without minifier, three.js is about 531 kb, after minifier ~ 365 kb
Then again, depends on how many extra modules you import.

## Getting started

Clone, download or copy this repo and run:

```
yarn install
yarn dev
```

Scene setup code can be found in `sketch.js`.
Write your custom shader with glslify support in `default.frag`.
Feel free to hack & break everything.

## Building for FXHash

The following command will create a deploy folder and zip bundle for FXhash.
Warn: will overwrite the contents in `dist` and `dist-zipped` if these are already present.

```
yarn build
```

## Keeping things up-to-date

Use the following command to check for packages that could be updated:

```
yarn outdated
```

To automatically upgrade all outdated packages:

```
yarn upgrade --all
```

## Suggestions?

Open a github issue and I'll see what I can do.


---
Follow me on twitter at https://twitter.com/polyclickkkkk  
See what I make with this on FXHash: https://fxhash.xyz/u/polyclick  
Instagram: https://instagram.com/polyclick
