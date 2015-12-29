module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'img',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'img/build/'
            }]
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['imagemin']);

};