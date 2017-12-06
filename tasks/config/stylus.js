module.exports = function(grunt) {

  grunt.config.set('stylus', {
    dev: {
      files: [{
        expand: true,
        cwd: 'styles/',
        src: ['importer.styl'],
        dest: 'styles/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
};
