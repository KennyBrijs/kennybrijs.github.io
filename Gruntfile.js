module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'style/src/img',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'style/img'
          }]
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'style/src/sass',
          cssDir: 'style/css',
          environment: 'production'
        }
      },
    },
    watch: {
      css: {
        files: 'style/src/sass/*.sass',
        tasks: ['compass'],
      },
      img: {
        files: 'style/src/img/**/*.{png,jpg,gif}',
        tasks: ['imagemin']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['imagemin']);
};