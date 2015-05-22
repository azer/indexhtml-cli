#!/usr/bin/env node

var command = require("new-command")();
var generate = require("indexhtml");
var read = require("fs").readFileSync;
var path = require("path");

create(command._);

function create (params) {
  var options = {
    js: [],
    css: []
  };

  params.forEach(function (value) {
    var ext = path.extname(value);

    if (ext == '') return options.title = value;
    if (ext == '.js') return options.js.push(value);
    if (ext == '.css') return options.css.push(value);
    if (ext == '.html') return options.content = read(value).toString();

    throw new Error('Unrecognized parameter: ' + ext);
  });

  console.log(generate(options));
}
