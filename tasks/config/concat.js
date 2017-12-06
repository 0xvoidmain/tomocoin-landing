module.exports = function(grunt) {

  grunt.config.set('concat', {
    js: {
      src: require('../pipeline').jsFilesToInject,
      dest: 'js/production.js'
    },
    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: 'styles/production.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
