module.exports = function(grunt) {
  grunt.registerTask('build', [
    'clean',
    'compileAssets',
    'concat',
    'uglify',
    'cssmin',
    'sails-linker:prodJs',
    'sails-linker:prodStyles'
  ]);
};
