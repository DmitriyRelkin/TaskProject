module.exports = function(module) {
	require('./authService.js')(module);
	require('./sendMessageService.js')(module);
};
