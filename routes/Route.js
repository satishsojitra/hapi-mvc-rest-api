var UserController = require('../controller/UserController');

module.exports = function(){
	return [
		{
			method: 'GET',
			path: '/users',
			config: {
				handler: UserController.getAllUsers,
				description: 'Gets all user list'
			}		
		},
		{
			method: 'GET',
			path: '/posts',
			config: {
				handler: UserController.getAllPosts,
				description: 'Gets all user posts'
			}		
		}
	]
}