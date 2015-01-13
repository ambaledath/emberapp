module.exports = {
	options: {
    compress: true,
    yuicompress: true,
    optimization: 2
  },
  dist: {
		files: {
			'dist/css/style.min.css': 'less/style.less'
		}
	}
};