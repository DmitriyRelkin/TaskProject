var app = angular.module("sampleApp", ['ui.router']);
app.controller("mainHeaderCtrl", function($scope) {
    $scope.headerView = "website/templates/components/header.html";
    $scope.url = $scope.headerView;
/*    $scope.showHeader = function() {
        $scope.url = $scope.headerView;
    }*/
});
app.controller("mainFooterCtrl", function($scope) {
    $scope.footerView = "website/templates/components/footer.html";
    $scope.url = $scope.footerView;
/*    $scope.showHeader = function() {
        $scope.url = $scope.footerView;
    }*/
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

app.controller("galaryCtrl", function($scope) {
    $scope.photos = [
        {src: "website/images/slide-1.jpg", desc:"1", btnName: "BUSINES WORKS WITH TECNOLOGY", btnBanner: "We added technology to strategy. You get the multiplier effect"},
        {src: "website/images/slide-2.jpg", desc:"2", btnName: "PROFESSIONAL CONSULTING SERVICES", btnBanner: "We are the trusted advisor to the world's leading businesses"},
        {src: "website/images/slide-3.jpg", desc:"3", btnName: "BROADEN YOUR MARKET EDGE", btnBanner: "We work with our clients as we do with our colleagues"},
        {src: "website/images/slide-4.jpg", desc:"4", btnName: "WE AREA NETWORK OF LEADERS", btnBanner: "We develop unparalleled management insights"}
    ];
    $scope.photoSrc = $scope.photos[0];
    $scope.btnSrc = $scope.photos[0];
    $scope.btnImplication = $scope.photos[0];
    $scope.showPhoto = function(index) {
        $scope.photoSrc = $scope.photos[index];
        $scope.btnSrc = $scope.photos[index];
        $scope.btnImplication = $scope.photos[index];
    };
});
// ======================NAV-SLIDER================================
    app.controller('NavigationController', function ($scope) {
        // Must use a wrapper object, otherwise "activeItem" won't work
        $scope.states = {};
        $scope.states.activeItem = 'item1';
        $scope.items = [{
            id: 'item1',
            title: 'slide1'
        }, {
            id: 'item2',
            title: 'slide2'
        },{
            id: 'item3',
            title: 'slide3'
        }, {
            id: 'item4',
            title: 'slide4'
        }];
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
app.controller("validCtrl", function ($scope) {
    $scope.newUser = [];
    $scope.message = "";
    $scope.pattern = new RegExp("[a-z]");
    $scope.addNewUser = function (userDetails) {
        $scope.newUser.push({
            user: userDetails.name,
            email: userDetails.email,
            pass: userDetails.userPass,
            passCfm: userDetails.userPassCfm
        });
        $scope.message = "Registration successfully completed!";
    }
    $scope.validationError = function (error) {
        if (angular.isDefined(error)) {
            if (error.required) {
                return "Field must not be empty!";
            } else if (error.email) {
                return "Please enter a valid email!";
            } else if (error.password) {
                return "Please enter a valid password!";
            }
        }
    }
/*    $scope.patternValidate = function(sample) {
        if (myForm.sample.$error.pattern && sample == userPass) {
            return "OK!!"
        }
    }*/
});

