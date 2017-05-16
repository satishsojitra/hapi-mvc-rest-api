var config = {
	development: {
		host:'localhost',
		port: process.env.PORT || 3000
	},
	production: {
		host:'production',
		port: process.env.PORT || 8080
	}
}

exports.get = function get(env) {
  return config[env];
}