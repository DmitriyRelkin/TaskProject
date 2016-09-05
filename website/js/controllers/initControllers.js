module.exports = function(module) {
	require('./homePageController.js')(module);
	require('./layoutsController.js')(module);
	require('./sliderController.js')(module);
	require('./validationController.js')(module);
};
