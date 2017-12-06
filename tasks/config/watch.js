module.exports = function(grunt) {

  grunt.config.set('watch', {
    assets: {

      // Assets to watch:
      files: ['js/**/*',
        'styles/**/*.styl',
        'tasks/pipeline.js',
        '!/js/production.*',
        '!styles/*.css',
        '!**/node_modules/**'],

      // When assets are changed:
      tasks: ['compileAssets', 'linkAssets' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
