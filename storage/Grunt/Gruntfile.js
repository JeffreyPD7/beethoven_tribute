// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'assets/sass/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'public/css/style.css': 'assets/sass/style.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'public/css/*.css',
                        'public/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: "http://localhost:8000/"
                    //server: './'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};
