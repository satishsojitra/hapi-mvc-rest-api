var UserController = require('../controller/UserController');

module.exports = function(){
	return [
		{
			method: 'GET',
			path: '/users',
			config: {
				handler: UserController.getAllUsers
			}		
		},
		{
			method: 'GET',
			path: '/posts',
			config: {
				handler: UserController.getAllPosts
			}		
		}
	]
}