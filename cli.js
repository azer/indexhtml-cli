#!/usr/bin/env node

var command = require("new-command")();
var parse = require('raw-body');
var html = require("indexhtml");
var read = require("fs").readFileSync;
var path = require("path");
var stdin = process.stdin;

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

  if (options.content) generate(options)();
  else parse(stdin, command, generate(options));
}

function generate(options) {
  return function(err, res) {
    if (err) throw err;
    if (res) options.content = res.toString();

    console.log(html(options));
  };
}
