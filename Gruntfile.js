(function () {
    'use strict';

    module.exports = function (grunt) {

        function addApiConfig() {
            var apiConfig,
                body,
                doctype,
                html,
                index;

            index = 'wwwroot/index.cshtml';
            body = '</body>';
            doctype = '<!DOCTYPE html>';
            apiConfig = [
                "  <script>",
                "  (function () {",
                "      'use strict';",
                "      function config(barkbaudConfig) {",
                "          barkbaudConfig.apiUrl = '/';",
                "      }",
                "      config.$inject = ['barkbaudConfig'];",
                "      angular.module('barkbaud')",
                "          .config(config);",
                "  }());",
                "  </script>"
            ];
            html = grunt.file.read(index);
            html = html.replace(doctype, '@{Layout = "";}\n' + doctype);
            html = html.replace(body, apiConfig.join("\n") + body);
            grunt.file.write(index, html);
            grunt.file.delete(index);
        }

        grunt.loadNpmTasks('grunt-contrib-copy');

        grunt.initConfig({
            copy: {
                build: {
                    files: [{
                        expand: true,
                        cwd: 'wwwroot/bower_components/barkbaud-ui/build',
                        src: ['**/*.*'],
                        dest: 'wwwroot/',
                        rename: function (dest, src) {
                            if (src.indexOf('html') > -1) {
                                return dest + src.replace(/\.html$/, ".cshtml");
                            }
                            return dest + src;
                        }
                    }]
                },
                view: {
                    files: [{
                        expand: true,
                        cwd: 'wwwroot',
                        src: ['index.cshtml'],
                        dest: 'Views/Home'
                    }]
                }
            }
        });

        // Added the AngularJS config to make the api calls relative
        grunt.registerTask('api', addApiConfig);
        grunt.registerTask('build', [
            'copy:build',
            'api',
            'copy:view'
        ]);
        grunt.registerTask('default', ['build']);
    };
}());
