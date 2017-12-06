module.exports = function(grunt) {

    grunt.config.set('clean', {
      dist: ['styles/*.css', 'js/production.*']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
  };
