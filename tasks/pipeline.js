var cssFilesToInject = [
  'styles/lib/**/*.css',
  'styles/**/*.css',
  '!styles/production.css',
  '!styles/production.min.css'
];
var jsFilesToInject = [
  'js/dependencies/jquery-1.11.0.min.js',
  'js/dependencies/**/*.js',
  'js/**/*.js',
  '!js/production.js',
  '!js/production.min.js'
];
module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
  return require('path').join(cssPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
  return require('path').join(jsPath);
});
