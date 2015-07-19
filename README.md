# Gridify: In-Browser Vertical Rhythm Measurement Tool

Gridify is inspired by the grid at [sassline.com](https://sassline.com/).

## Demo

![Gridify Example](http://cloud.ahfr.org/c997f0/39b4de1a5c0a30bab839.png)

## Usage

1. Copy [the bookmarklet](gridify.bookmarklet.js) to a new bookmark in your browser
2. Click the bookmarklet
3. Give the prompt a selector (e.g. `#main`) to attach itself to.

---

Gridify uses the page's root element's `font-size` to determine how to size itself.
In other words, it sizes the grid according to [the `rem` unit](http://www.w3.org/TR/css3-values/#rem-unit).

## Building/Contributing

1. This project depends on [babel](http://babeljs.io) (implicitly, via [`babelify`](http://www.npmjs.org/babelify)), [`uglifyify`](http://www.npmjs.org/uglifyify), and [`browserify`](http://www.npmjs.org/browserify).
2. `npm run build` - this will print compiled code to STDOUT.
3. `npm run build:bookmarklet` - this will write minified + compiled code to [gridify.bookmarklet.js](gridify.bookmarklet.js).
