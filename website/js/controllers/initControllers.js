module.exports = function(module) {
	require('./homePageController.js')(module);
	require('./headerController.js')(module);
	require('./footerController.js')(module);
	require('./scrollTopController.js')(module);
	require('./sliderController.js')(module);
	require('./validationController.js')(module);
	require('./blogPageController.js')(module);
};
