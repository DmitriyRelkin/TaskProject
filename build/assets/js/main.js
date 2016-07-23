var app = angular.module("sampleApp", ['ui.router']);
app.controller("mainHeaderCtrl", function($scope) {
    $scope.headerView = "header.html";

    $scope.url = $scope.headerView;
    
    $scope.showHeader = function() {
        $scope.url = $scope.headerView;
    }
});
app.controller("mainFooterCtrl", function($scope) {
    $scope.footerView = "footer.html";

    $scope.url = $scope.footerView;
    
    $scope.showHeader = function() {
        $scope.url = $scope.footerView;
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
// ==============BisinessBlock=============================

app.controller("bisinessBlockCtrl", function($scope) {
    $scope.serviceBlock = [
        {srcImg: "build/img/icon-service-1.png", header:"BUSINESS CONSULTING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
        {srcImg: "build/img/icon-service-2.png", header:"ENTERPRISE APPLICATION", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
        {srcImg: "build/img/icon-service-3.png", header:"NEW STRATEGY", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
        {srcImg: "build/img/icon-service-4.png", header:"IT MANAGEMENT", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
        {srcImg: "build/img/icon-service-5.png", header:"OUTSOURSING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
        {srcImg: "build/img/icon-service-6.png", header:"SALES & MARKETING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"}
    ];
});

// ==============Strategy-Block============================
app.controller("strategyCtrl", function($scope) {
    $scope.strategyBlock = [
        {srcImg: "build/img/page1_img1.jpg", header:"QUESTIONS TO ASK:", item1:"Analysing your organisation business model", item2:"Identifying development opportunities", item3:"Defining your objectives", item4:"Identifying the key factors for success"},
        {srcImg: "build/img/page1_img2.jpg", header:"THE COMPANY'S ROLE:", item1:"Identifying development opportunities", item2: "Analysing your organisation business model", item3:"Defining your objectives", item4:"Identifying the key factors for success"},
        {srcImg: "build/img/page1_img3.jpg", header:"OUR KEY OFFERS:", item1:"Defining your objectives", item2: "Analysing your organisation business model", item3:"Identifying development opportunities",  item4:"Identifying the key factors for success"}
    ];
});