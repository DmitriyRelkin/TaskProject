module.exports = function(module) {
  "use strict";

// angular
module
.config(config);

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    /* HomePage */
    .state('home', {
        url: '/',
        templateUrl: 'website/templates/home.html',
        controller: 'homePageCtrl',
        controllerAs: 'vm'
    })
    /* ContactPage */
    .state('contacts', {
        url: '/contacts',
        templateUrl: 'website/templates/contacts.html',
        controller: 'contactPageCtrl',
        controllerAs: 'vm'
    })
    /* BlogPage */
    .state('blog', {
        url: '/blog',
        templateUrl: 'website/templates/blog.html',
        controller: 'blogContentCtrl',
        controllerAs: 'vm'
    })
    /* RegistrationPage */
    .state('reg', {
        url: '/reg',
        templateUrl: 'website/templates/registration.html',
        controller: 'registrationContentCtrl',
        controllerAs: 'vm'
    })
    /* AuthorizationPage */
    .state('sign-in', {
        url: '/sign-in',
        templateUrl: 'website/templates/sig-in.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
    });
  };
};
