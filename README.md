Github Actions version of AriaLinter [![Dependencies](https://david-dm.org/MaggieFero/arialinter.svg)]
============
This repo is for a set of Github Actions based on the AriaLinter project's simple accessibility linter for HTML documents.

## Getting Started
*WARNING:* This repo does not contain any working Github Actions yet.


### Nodejs

You can use it with nodejs like a regular library

Install the package from npm

```shell
$ npm install arialinter-githubactions --save-dev
```

Then, using arialinter, is as easy as:

```javascript
var AriaLinter = require('arialinter-githubactions');

AriaLinter.initialize('https://github.com/', function() {
  if (AriaLinter.evaluate()){
    console.log('All rules were successfully passed');
  } else {
    console.log('AriaLinter found ' + AriaLinter.getErrorsFound() + ' accessibility issues');
    console.log(AriaLinter.getReport('text', 'https://github.com/'));
  }
});
```

You can also pass an options argument to the evaluate() method:

```javascript
var AriaLinter = require('arialinter-githubactions');

AriaLinter.initialize('https://github.com/', function() {
  if (AriaLinter.evaluate({level: 'A', template: true})){
    console.log('All rules were successfully passed');
  } else {
    console.log('AriaLinter found ' + AriaLinter.getErrorsFound() + ' accessibility issues');
    console.log(AriaLinter.getReport('text', 'https://github.com/'));
  }
});
```

### CLI

To run arialinter from the command line:

```shell
$ npm install -g arialinter-githubactions
```

Display all the rules

```javascript
$ arialinter-githubactions --rules
```

Execute the linter just for templates

```javascript
$ arialinter-githubactions --templates test/testFiles/template.html
```

Execute the linter using all the rules of the level A

```javascript
$ arialinter-githubactions --level A  test/testFiles/index.html
```

Execute the linter using all the rules of the level A and the rules that just apply for templates

```javascript
$ arialinter-githubactions --level A --templates test/testFiles/index.html
```

## Related projects:
* [AriaLinter](https://github.com/globant-ui/arialinter) The original, now-deprecated linter this is based on.
* [A11YLint](https://github.com/DuaneOBrien/A11YLint-Brackets). A11YLint is an extension for the Brackets IDE which
aims to bring the same kind of in-context, immediate feedback that you get from JSLint/JSHint and other linting tools,
but regarding issues in your HTML that would affect how accessible your content is.
* [gulp-arialinter](https://github.com/Charca/gulp-arialinter). Gulp plugin for the accessibility tool AriaLinter.

## Resources:
* Accessibility
 * WAI-ARIA Authoring Practices: http://www.w3.org/TR/wai-aria-practices/
 * http://www.w3.org/TR/WCAG20-TECHS/html.html
 * http://dev.w3.org/html5/alt-techniques/
 * https://dvcs.w3.org/hg/aria-unofficial/raw-file/tip/index.html
 * http://www.openajax.org/member/wiki/Accessibility_-_WCAG20_Validation_Rules

## License

AriaLinter Copyright (c) 2013 Globant UI Developers; Github Actions sample code copyright 2019 Github

Licensed under the MIT license.
