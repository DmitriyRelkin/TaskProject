module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name module.controller:bisinessBlockCtrl
  * @description
  * This is the home page content controller.
  *
  **/
  module.controller("homePageCtrl", function($scope, $rootScope, $interval) {
    /**
    * @ngdoc property
    * @name photos
    * @description
    * It keeps the array, in which objects with links of pictures, headers, button name, and button text.
    **/
    $scope.photos = [
        {src: "website/images/slide-1.jpg", active : true , btnName: "BUSINES WORKS WITH TECNOLOGY", btnBanner: "We added technology to strategy. You get the multiplier effect"},
        {src: "website/images/slide-2.jpg", active : false , btnName: "PROFESSIONAL CONSULTING SERVICES", btnBanner: "We are the trusted advisor to the world's leading businesses"},
        {src: "website/images/slide-3.jpg", active : false , btnName: "BROADEN YOUR MARKET EDGE", btnBanner: "We work with our clients as we do with our colleagues"},
        {src: "website/images/slide-4.jpg", active : false , btnName: "WE AREA NETWORK OF LEADERS", btnBanner: "We develop unparalleled management insights"}
    ];
    /**
    * @ngdoc property
    * @description
    * For the initial display of the slider at the first page load
    **/
    $scope.photoSrc = $scope.photos[0];
    $scope.btnSrc = $scope.photos[0];
    $scope.btnTitle = $scope.photos[0];
    /**
    * @ngdoc function
    * @name showSlide
    * @description
    * This function opens the selected slide by click
    * @param [index]
    **/
    $scope.showSlide = function(index) {
      $scope.photoSrc = $scope.photos[index];
      $scope.btnSrc = $scope.photos[index];
      $scope.btnTitle = $scope.photos[index];
    };
    /**
    * @ngdoc property
    * @name counter
    * @description
    * This property serves as a counter for the function, which switches the slides.
    **/
    $scope.counter = 0;
    /**
    * @ngdoc function
    * @description
    * This function which switches the slides
    **/
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
    /**
    * @ngdoc property
    * @name serviceBlock
    * @description
    * It keeps the array, in which objects with links of pictures, headers, and paragraphs with text.
    **/
    $scope.serviceBlock = [
      {srcImg: "/website/images/icon-service-1.png", header:"BUSINESS CONSULTING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
      {srcImg: "/website/images/icon-service-2.png", header:"ENTERPRISE APPLICATION", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
      {srcImg: "/website/images/icon-service-3.png", header:"NEW STRATEGY", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
      {srcImg: "/website/images/icon-service-4.png", header:"IT MANAGEMENT", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
      {srcImg: "/website/images/icon-service-5.png", header:"OUTSOURSING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"},
      {srcImg: "/website/images/icon-service-6.png", header:"SALES & MARKETING", paragraph: "Vestibulum quis felis ut enim aliquam iaculis. Nullam pharetra tortor at quam viverra volutpat. Phasellus vel faucibus dolor. Curabitur"}
    ];
    /**
    * @ngdoc property
    * @name strategyBlock
    * @description
    * It keeps the array, in which objects with links of pictures, headers, items text.
    **/
    $scope.strategyBlock = [
      {srcImg: "/website/images/page1_img1.jpg", header:"QUESTIONS TO ASK:", item1:"Analysing your organisation business model", item2:"Identifying development opportunities", item3:"Defining your objectives", item4:"Identifying the key factors for success"},
      {srcImg: "/website/images/page1_img2.jpg", header:"THE COMPANY'S ROLE:", item1:"Identifying development opportunities", item2: "Analysing your organisation business model", item3:"Defining your objectives", item4:"Identifying the key factors for success"},
      {srcImg: "/website/images/page1_img3.jpg", header:"OUR KEY OFFERS:", item1:"Defining your objectives", item2: "Analysing your organisation business model", item3:"Identifying development opportunities",  item4:"Identifying the key factors for success"}
    ];
  });
};
