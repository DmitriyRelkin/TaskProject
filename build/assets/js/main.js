var app = angular.module("sampleApp", ['ui.router']);
app.controller("mainHeaderCtrl", function($scope) {
    $scope.headerView = "header.html";

    $scope.url = $scope.headerView;
    
    $scope.showHeader = function() {
        $scope.url = $scope.headerView;
    }
});
// -=-=-=-=-=-=-=-=-=-=-Router=-=--=-=-=-=-=-=-=-=-=-=-
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        // ====Home====
        .state('home', {
            url: '/',
            templateUrl: '/home.html'
        })
       //====Contacts====
        .state('contacts', {
            url: '/contacts',
            templateUrl: '/contacts.html'
        })
       //====Blog====
        .state('blog', {
            url: '/blog',
            templateUrl: '/blog.html'
        })
        //====Registration====
        .state('reg', {
            url: '/reg',
            templateUrl: '/registration.html'
        })
        //====Sig-in====
        .state('sig-in', {
            url: '/sig-in',
            templateUrl: '/sig-in.html'
        });
});

// -=-=-=-=-=-=-=-=-=-=-SLIDER=-=--=-=-=-=-=-=-=-=-=-=-

app.controller("galaryCtrl", function($scope) {
    $scope.photos = [
        {src: "build/img/slide-1.jpg", desc:"1"},
        {src: "build/img/slide-2.jpg", desc:"2"},
        {src: "build/img/slide-3.jpg", desc:"3"},
        {src: "build/img/slide-4.jpg", desc:"4"}
    ];
    $scope.photoSrc = $scope.photos[0];
    $scope.showPhoto = function(index) {
        $scope.photoSrc = $scope.photos[index];
    };
});