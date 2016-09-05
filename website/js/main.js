var app = angular.module("sampleApp", ['ui.router', "requsetService"]);

app.run(function ($state,$rootScope) {
    $rootScope.$state = $state;
});
app.controller("mainHeaderCtrl", function($scope) {
    $scope.headerView = "website/templates/components/header.html";
    $scope.url = $scope.headerView;
});
app.controller("mainFooterCtrl", function($scope) {
    $scope.footerView = "website/templates/components/footer.html";
    $scope.url = $scope.footerView;
});
// -=-=-=-=-=-=-=-=-=-=-Router=-=--=-=-=-=-=-=-=-=-=-=-
app.run([
    "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      return $rootScope.$stateParams = $stateParams;
    }
  ]);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        // ====Home====
        .state('home', {
            url: '/',
            templateUrl: 'website/templates/home.html'
        })
       //====Contacts====
        .state('contacts', {
            url: '/contacts',
            templateUrl: 'website/templates/contacts.html'
        })
       //====Blog====
        .state('blog', {
            url: '/blog',
            templateUrl: 'website/templates/blog.html'
        })
        //====Registration====
        .state('reg', {
            url: '/reg',
            templateUrl: 'website/templates/registration.html'
        })
        //====Sig-in====
        .state('sig-in', {
            url: '/sig-in',
            templateUrl: 'website/templates/sig-in.html'
        });
});

// -=-=-=-=-=-=-=-=-=-=-SLIDER=-=--=-=-=-=-=-=-=-=-=-=-

app.controller("galaryCtrl", function($scope, $rootScope, $interval) {
    $scope.photos = [
        {src: "website/images/slide-1.jpg", active : true , btnName: "BUSINES WORKS WITH TECNOLOGY", btnBanner: "We added technology to strategy. You get the multiplier effect"},
        {src: "website/images/slide-2.jpg", active : false , btnName: "PROFESSIONAL CONSULTING SERVICES", btnBanner: "We are the trusted advisor to the world's leading businesses"},
        {src: "website/images/slide-3.jpg", active : false , btnName: "BROADEN YOUR MARKET EDGE", btnBanner: "We work with our clients as we do with our colleagues"},
        {src: "website/images/slide-4.jpg", active : false , btnName: "WE AREA NETWORK OF LEADERS", btnBanner: "We develop unparalleled management insights"}
    ];

    $scope.photos.active = false;

    $scope.photoSrc = $scope.photos[0];
    $scope.btnSrc = $scope.photos[0];
    $scope.btnTitle = $scope.photos[0];
    $scope.showPhoto = function(index) {
        $scope.photoSrc = $scope.photos[index];
        $scope.btnSrc = $scope.photos[index];
        $scope.btnTitle = $scope.photos[index];
    };
    $scope.counter = 0;
    $interval(function () {
      $scope.counter++;
      $scope.photoSrc = $scope.photos[$scope.counter];
      $scope.btnSrc = $scope.photos[$scope.counter];
      $scope.btnTitle = $scope.photos[$scope.counter];
      for(var i = 0; i<$scope.photos.length; i++) {
           $scope.photos[i].active = false;
      }
      $scope.photos[$scope.counter].active = true;
      if ($scope.counter == 3) {
        $scope.counter = -1;
      }
    }, 3000);
});
// ==============BisinessBlock=============================

app.controller("bisinessBlockCtrl", function($scope) {
    $scope.serviceBlock = [
        {srcImg: "/website/images/icon-service-1.png", header:"BUSINESS CONSULTING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
        {srcImg: "/website/images/icon-service-2.png", header:"ENTERPRISE APPLICATION", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
        {srcImg: "/website/images/icon-service-3.png", header:"NEW STRATEGY", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
        {srcImg: "/website/images/icon-service-4.png", header:"IT MANAGEMENT", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
        {srcImg: "/website/images/icon-service-5.png", header:"OUTSOURSING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
        {srcImg: "/website/images/icon-service-6.png", header:"SALES & MARKETING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"}
    ];
});

// ==============Strategy-Block============================
app.controller("strategyCtrl", function($scope) {
    $scope.strategyBlock = [
        {srcImg: "/website/images/page1_img1.jpg", header:"QUESTIONS TO ASK:", item1:"Analysing your organisation business model", item2:"Identifying development opportunities", item3:"Defining your objectives", item4:"Identifying the key factors for success"},
        {srcImg: "/website/images/page1_img2.jpg", header:"THE COMPANY'S ROLE:", item1:"Identifying development opportunities", item2: "Analysing your organisation business model", item3:"Defining your objectives", item4:"Identifying the key factors for success"},
        {srcImg: "/website/images/page1_img3.jpg", header:"OUR KEY OFFERS:", item1:"Defining your objectives", item2: "Analysing your organisation business model", item3:"Identifying development opportunities",  item4:"Identifying the key factors for success"}
    ];
});
// ================VALIDATION===============================
app.controller("validCtrl", function ($scope, $location, $timeout, sendRequest) {
    $scope.regData = {};
    $scope.logData = {};
    $scope.mesData = {};
    $scope.messageReg = "";
    $scope.messageMes = "";
    $scope.messageLog = "";

    $scope.sendRequest = function () {
      var dataReg = $scope.regData;
      var dataLog = $scope.logData;
      var dataMes = $scope.mesData;

      if (dataReg) {
        sendRequest.send(dataReg,"/reg");
      } else if (dataLog) {
        sendRequest.send(dataLog,"/reg");
      } else if (dataMes) {
        sendRequest.send(dataMes,"/reg");
      }
      $scope.messageReg = "Registration successfully completed!";
      $scope.messageMes = "Message sent successfully!";
      $scope.messageLog = "Login successfully completed!";

      $timeout(function () {
        $location.path("/");
      }, 3000);
    }

});
