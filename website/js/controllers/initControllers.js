module.exports = function(module) {
	require('./homePageController.js')(module);
	require('./contactsPageController.js')(module);
	require('./blogPageController.js')(module);
	require('./registrationPageController.js')(module);
	require('./loginPageController.js')(module);
};
