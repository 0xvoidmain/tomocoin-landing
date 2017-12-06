module.exports = function(grunt) {

  grunt.config.set('cssmin', {
    dist: {
      src: ['styles/production.css'],
      dest: 'styles/production.min.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
