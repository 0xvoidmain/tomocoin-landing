module.exports = function(grunt) {

  grunt.config.set('uglify', {
    dist: {
      src: ['js/production.js'],
      dest: 'js/production.min.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
