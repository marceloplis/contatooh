/**
 * http://usejsdoc.org/
 */
module.exports = {
	env: 'development',
	db: 'mongodb://127.0.0.1:27017/contatooh',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	seleniumUser: process.env.SELENIUM_USER,
	seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD		
};