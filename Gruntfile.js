module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'style/src/img',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'style/img',
          }]
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'style/src/sass',
          cssDir: 'style/css',
          environment: 'production',
        }
      },
    },
    coffee: {
      compile: {
        expand: true,
        cwd: 'style/src/coffee',
        src: ['**/*.coffee'],
        dest: 'style/js',
        ext: '.js',
      },
    },
    watch: {
      css: {
        files: 'style/src/sass/*.sass',
        tasks: ['compass'],
      },
      js: {
        files: 'style/src/coffee/*.coffee',
        tasks: ['coffee'],
      },
      img: {
        files: 'style/src/img/**/*.{png,jpg,gif}',
        tasks: ['imagemin'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');
  
  grunt.registerTask('default', ['compass', 'coffee', 'imagemin']);
};