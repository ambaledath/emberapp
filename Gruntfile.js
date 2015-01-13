
function config(name) {
	return require('./tasks/' + name + ".js");
}

module.exports = function(grunt) {

	// configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: config('less'),
		concat: config('concat'),
		jshint: config('jshint'),
		emberTemplates: config('emberTemplates'),
		uglify: config('uglify'),
		watch: config('watch')
	});

	// load plugins
	Object.keys(require('./package.json').devDependencies).forEach(function(dep) {
		if(dep.substring(0,6) == "grunt-") {
			//console.log(dep);
			grunt.loadNpmTasks(dep);
		}
	});

	// tasks
	var tasks = ['less', 'concat', 'jshint', 'emberTemplates', 'uglify', 'watch'];

	grunt.registerTask('default', tasks);

};