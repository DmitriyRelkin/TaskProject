module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name module.controller:galaryCtrl
  * @description
  * This is the slider controller, and slider function.
  * The second function switch slides.
  *
  * @param index pressed slide
  *
  **/
  module.controller("sliderCtrl", function($scope, $rootScope, $interval) {
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
  });
};
