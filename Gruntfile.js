module.exports = function(grunt) {
    "use strict";

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /**
     * GRUNTFILE CONFIGURATION ================================================
     */

    var baseConf = {
        less: {
            options: {
                compress: false,
                banner: "/*\n" +
"                _                   _              _\n" +
"               | |                 | |            (_)\n" +
"      __ _ _ __| |_ _   _ _ __   __| |_      _____ _ ___  ___\n" +
"     / _` | '__| __| | | | '_ \\ / _` \\ \\ /\\ / / _ \\ / __|/ _ \\\n" +
"    | (_| | |  | |_| |_| | | | | (_| |\\ V  V /  __/ \\__ \\  __/\n" +
"     \\__,_|_|   \\__|\\__,_|_| |_|\\__,_| \\_/\\_/ \\___|_|___/\\___|\n" +
"              Kreativagentur fuer die digitale Zeit\n" +
"   \n" +
" Copyright (C) 2015 Maximilian Scopp <maximilian.scopp at artundweise.de> \n*/\n\n", // messy, huh?
                sourceMap: true,
                outputSourceFiles: true
            },


            "build": {
                expand: true,
                cwd: 'Less/',
                src: 'inspector.less',
                //dest:  'inspector.css',
                ext: '.css',
            },
        },

        watch: {
            files: "**/*.less",
            tasks: ['less:build']
        }
    }

    grunt.initConfig(baseConf);

    // default BUILD watch task for Development
    grunt.registerTask('default', ['less:build', 'watch']);

    // BUILD Task
    grunt.registerTask('build', ['less:build']);
};
