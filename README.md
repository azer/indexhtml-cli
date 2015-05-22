## indexhtml-cli

Generate an [index.html](http://github.com/azer/indexhtml) file that includes specified HTML, JS and CSS files.

## Install

```bash
$ npm install indexhtml-cli
```

## Usage

```bash
$ echo "<h1>yo</h1>" > yo.html
$ indexhtml "hello world" yo.html foo.js bar.css qux.css > index.html
```

Outputs:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>hello world</title>
    <link rel="stylesheet" href="bar.css" />
    <link rel="stylesheet" href="qux.css" />
  </head>
<body>
  <h1>yo</h1>
  <script type="text/javascript" src="foo.js"></script>
</body>
</html>
```
```
