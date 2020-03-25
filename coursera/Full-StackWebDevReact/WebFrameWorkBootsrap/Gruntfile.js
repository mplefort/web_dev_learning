'use strict';

module.exports = function(grunt) {
	// npm install --save-dev time-grunt jit-grunt
	// load in time-grunt to be used within grunt module
	require('time-grunt')(grunt);
	// load any other plugins/node modules when they are applied instead of manually loading other required modules
	require('jit-grunt')(grunt, {
		useminPrepare: 'grunt-usemin'
	});

	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'css/styles.css': 'css/styles.scss'
				}
			}
		}, // sass:
		watch: {
			files: 'css/*.scss',
			tasks: ['sass']
		}, // watch:
		// reload browser if src: changes
		browserSync: {
			dev: {
				bsFiles: {
					src: ['css/*.css', '*.html', 'js/*.js']
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './'
					}
				}
			}
		}, //browsersync
		// copy files into dist folder
		copy: {
			html: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: './',
						src: ['*.html'],
						dest: 'dist'
					}
				]
			},
			fonts: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: 'node_modules/font-awesome',
						src: ['fonts/*.*'],
						desk: 'dist'
					}
				]
			}
		},
		clean: {
			build: {
				src: ['dist/']
			}
		}, // clean
		imagemin: {
			dynamic: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: './',
						src: ['img/*.{png,jpg,gif}'],
						dest: 'dist/'
					}
				]
			}
		}, // imagemin
		useminPrepare: {
			foo: {
				dest: 'dist',
				src: ['contactus.html', 'aboutus.html', 'index.html']
			},
			options: {
				flow: {
					steps: {
						css: ['cssmin'],
						js: ['uglify']
					},
					post: {
						css: [
							{
								name: 'cssmin',
								createConfig: function(context, block) {
									var generated = context.options.generated;
									generated.options = {
										keepSpecialComments: 0,
										rebase: false
									};
								}
							}
						]
					}
				}
			}
		}, // useminPrepare
		concat: {
			options: {
				separator: ';'
			},
			dist: {}
		},
		uglify: {
			dist: {}
		},
		cssmin: {
			dist: {}
		},
		// adds a rev to the end of main.css and main.js files to avoid broswer cache loading old versions
		filerev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 20
			},
			release: {
				files: [
					{
						src: ['dist/js/*.js', 'dist/css/*.css']
					}
				]
			}
		}, // filerev
		usemin: {
			html: ['dist/contactus.html', 'dist/aboutus.html', 'dist/index.html'],
			options: {
				assetsDirs: ['dist', 'dist/css', 'dist/js']
			}
		},
		htmlmin: {
			dist: {
				options: {
					collapseWhitespace: true
				},
				files: {
					'dist/index.html': 'dist/index.html',
					'dist/contactus.html': 'dist/contactus.html',
					'dist/aboutus.html': 'dist/aboutus.html'
				}
			}
		}
	});

	// grunt.registerTask(taskName [str], [taskList], )
	grunt.registerTask('css', ['sass']);
	// watch task blocks as it watches, so start browserSync
	grunt.registerTask('default', ['browserSync', 'watch']);
	// build task
	grunt.registerTask('build', ['clean', 'copy', 'imagemin', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'fierev', 'usemin', 'htmlmin']);
};
