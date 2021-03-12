const core = require('@actions/core');
const github = require('@actions/github');

try {
//   // `who-to-greet` input defined in action metadata file
//   const nameToGreet = core.getInput('who-to-greet');
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
//   core.setOutput("time", time);
//   // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
// } catch (error) {
//   core.setFailed(error.message);
(function() {
  'use strict';
  var Rule = require('../rule');

  module.exports = {
    htmlLang: new Rule({
      name:    'Language of Page',

      message: 'Please add the lang attribute to the HTML tag',

      ruleUrl: 'https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html',

      level: 'A',

      template: false,

      callback: function(dom, reporter) {
        var lang = dom.$('html').attr('lang');
        if (typeof lang === 'undefined' || lang === '') {
          throw {
            reportType: 'error',
            el: dom.$('html').parent().html()
          };
        }
      }
    }),

    validLangAttr: new Rule({
      name:    'Lang attribute on html element must have a valid two-character language code',

      message: 'Please use a valid two-character ISO 639-1 Code as the value for the HTML tag&#39;s lang attribute',

      ruleUrl: 'https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html',

      level: 'A',

      template: false,

      callback: function(dom, reporter) {
        if (dom.$('html').attr('lang').length !== 2) {
          throw {
            reportType: 'error',
            el: dom.$('html').attr('lang')
          };
        }
      }
    })

  };
}());

}