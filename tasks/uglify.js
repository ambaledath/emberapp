module.exports = {
	options: {
		banner: "/*! <%= grunt.template.today('mm/dd/yyyy') %>*/\n"
	},
	dist: {
		files: {
			'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'] 
		}
	}
};