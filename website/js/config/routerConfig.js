module.exports = function(module) {
  "use strict";
  module.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        /* HomePage */
        .state('home', {
            url: '/',
            templateUrl: 'website/templates/home.html'
        })
        /* ContactPage */
        .state('contacts', {
            url: '/contacts',
            templateUrl: 'website/templates/contacts.html'
        })
        /* BlogPage */
        .state('blog', {
            url: '/blog',
            templateUrl: 'website/templates/blog.html'
        })
        /* RegistrationPage */
        .state('reg', {
            url: '/reg',
            templateUrl: 'website/templates/registration.html'
        })
        /* AuthorizationPage */
        .state('sig-in', {
            url: '/sig-in',
            templateUrl: 'website/templates/sig-in.html'
        });
  });
};
