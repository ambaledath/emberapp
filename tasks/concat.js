module.exports = {
	option: {
		separator: '\n'
	},
	dist: {
		src: ['app/**/*.js'],
		dest: 'dist/js/<%= pkg.name %>.js'
	}
};