module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client//scripts/app.js',
                dest: 'public/javascripts/app.min.js'
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "angular-animate/angular-animate.min.js",
                    "angular-animate/angular-animate.min.js.map"
                ],
                "dest": "public/vendor/"
            },
            angularRoute: {
                expand:true,
                cwd:"node_modules",
                src:[
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                "dest": "public/vendor/"
            },

            bootstrap: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "bootstrap/dist/css/bootstrap.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
                    "bootstrap/dist/js/bootstrap.min.js"
                ],
                "dest": "public/vendor/"
            },
            styles: {
                expand: true,
                cwd: "client/stylesheets",
                src: [
                    "style.css"
                ],
                "dest": "public/stylesheets/"
            },
            views: {
                expand: true,
                cwd: "client/views/",
                src: [
                    "index.html",
                    "carousel.html",
                    "headBarTwo.html",
                    "home.html",
                    "homePageThumbnails.html",
                    "userinfo.html"



                ],
                "dest": "public/views/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};