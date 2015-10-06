module.exports = function(grunt){
	grunt.initConfig ({
		concat:{
			dist:{
				src: [	
					  'node_modules/underscore/underscore-min.js',
					  'node_modules/backbone/backbone-min.js',
					  'node_modules/backbone.stickit/backbone.stickit.js',
					  'node_modules/backbone.marionette/lib/backbone.marionette.min.js'
					],
				dest: 'public/js/build/dependencies.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat'); //run the: grunt concat
}