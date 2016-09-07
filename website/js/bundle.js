(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function() {
  "use strict";

  var config          = require('./config/routerConfig.js');
  var initServices    = require('./services/initServices.js');
	var initControllers = require('./controllers/initControllers.js');
	var initDirectives  = require('./directives/initDirectives.js');

  var module = angular.module("sampleApp", [
    'ui.router',
    "requsetService"
  ]);

  module.run(function ($state,$rootScope) {
      $rootScope.$state = $state;
  });
  module.run([
      "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        return $rootScope.$stateParams = $stateParams;
      }
  ]);

  initServices(module);
  initControllers(module);
  initDirectives(module);

  config(module);
}());

},{"./config/routerConfig.js":2,"./controllers/initControllers.js":4,"./directives/initDirectives.js":11,"./services/initServices.js":14}],2:[function(require,module,exports){
module.exports = function(module) {
  "use strict";
  module.config(function($stateProvider, $urlRouterProvider) {
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
};

},{}],3:[function(require,module,exports){
module.exports = function(module) {
  // ==============BisinessBlock=============================
  module.controller("bisinessBlockCtrl", function($scope) {
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
  module.controller("strategyCtrl", function($scope) {
      $scope.strategyBlock = [
          {srcImg: "/website/images/page1_img1.jpg", header:"QUESTIONS TO ASK:", item1:"Analysing your organisation business model", item2:"Identifying development opportunities", item3:"Defining your objectives", item4:"Identifying the key factors for success"},
          {srcImg: "/website/images/page1_img2.jpg", header:"THE COMPANY'S ROLE:", item1:"Identifying development opportunities", item2: "Analysing your organisation business model", item3:"Defining your objectives", item4:"Identifying the key factors for success"},
          {srcImg: "/website/images/page1_img3.jpg", header:"OUR KEY OFFERS:", item1:"Defining your objectives", item2: "Analysing your organisation business model", item3:"Identifying development opportunities",  item4:"Identifying the key factors for success"}
      ];
  });

};

},{}],4:[function(require,module,exports){
module.exports = function(module) {
	require('./homePageController.js')(module);
	require('./layoutsController.js')(module);
	require('./sliderController.js')(module);
	require('./validationController.js')(module);
};

},{"./homePageController.js":3,"./layoutsController.js":5,"./sliderController.js":6,"./validationController.js":7}],5:[function(require,module,exports){
module.exports = function(module) {
  module.controller("mainHeaderCtrl", function($scope) {
    $scope.url = "website/templates/components/header.html";
  });
  module.controller("mainFooterCtrl", function($scope) {
    $scope.url = "website/templates/components/footer.html";
  });
  module.controller("goToTopCtrl", function($scope) {
    $scope.url = "website/templates/components/backToTop.html";
  });
};

},{}],6:[function(require,module,exports){
module.exports = function(module) {
  module.controller("galaryCtrl", function($scope, $rootScope, $interval) {
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
};

},{}],7:[function(require,module,exports){
module.exports = function(module) {
  // ================VALIDATION===============================
  module.controller("validCtrl", function ($scope, $location, $timeout, sendRequest) {
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

};

},{}],8:[function(require,module,exports){
module.exports = function(module) {
	'use strict';
	module
	.directive('backToTop', function() {
		return {
			restrict: 'A',
			link: function($scope, element) {
				var $window = $(window);
				var $body = (window.opera) ? (document.compatMode == 'CSS1Compat' ? $('html') : $('body')) : $('html,body');
				$window.scroll(function() {
					if ($window.scrollTop() <= 0) {
						$(element).css({opacity: 0 , visibility: 'hidden', cursor: 'initial'});
						$(element).blur();
					} else {
						$(element).css({opacity: 1 , visibility: 'visible', cursor: 'pointer'});
					}
				});

				element.bind('click', function() {
					$body.animate({scrollTop: 0}, 'fast');
				});

			}
		};
	});
};

},{}],9:[function(require,module,exports){
module.exports = function(module) {
  'use strict';
  angular.module("sampleApp").directive('validateEmail', function() {
    var EMAIL_REGEXP = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        // only apply the validator if ngModel is present and Angular has added the email validator
        if (ctrl && ctrl.$validators.email) {

          // this will overwrite the default Angular email validator
          ctrl.$validators.email = function(modelValue) {
            return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
          };
        }
      }
    };
  });
}

},{}],10:[function(require,module,exports){
module.exports = function(module) {
  'use strict';
  angular.module("sampleApp").directive('validateFullname', function() {
    var FULLNAME_REGEXP = /^[A-Z][a-zA-Z']+[ ]+[A-Z][a-zA-Z'\- ]*$/;
    // var FULLNAME_REGEXP = /^([a-zA-Z'-]+\s+){1,4}[a-zA-z'-]+$/;

    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {

          ctrl.$validators['fullname'] = function(modelValue) {

            return ctrl.$isEmpty(modelValue) || FULLNAME_REGEXP.test(modelValue);
          };
        }
      };
  });
};

},{}],11:[function(require,module,exports){
module.exports = function(module) {
	require('./email-directive.js')(module);
	require('./fullName-directive.js')(module);
	require('./password-check-directive.js')(module);
	require('./required-text-directive.js')(module);
	require('./backToTop-directive.js')(module);
};

},{"./backToTop-directive.js":8,"./email-directive.js":9,"./fullName-directive.js":10,"./password-check-directive.js":12,"./required-text-directive.js":13}],12:[function(require,module,exports){
module.exports = function(module) {
  angular.module("sampleApp").directive("passwordVerify", function() {
     return {
        require: "ngModel",
        scope: {
          passwordVerify: '='
        },
        link: function(scope, element, attrs, ctrl) {
          scope.$watch(function() {
              var combined;

              if (scope.passwordVerify || ctrl.$viewValue) {
                 combined = scope.passwordVerify + '_' + ctrl.$viewValue;
              }
              return combined;
          }, function(value) {
              if (value) {
                  ctrl.$parsers.unshift(function(viewValue) {
                      var origin = scope.passwordVerify;
                      if (origin !== viewValue) {
                          ctrl.$setValidity("passwordVerify", false);
                          return undefined;
                      } else {
                          ctrl.$setValidity("passwordVerify", true);
                          return viewValue;
                      }
                  });
              }
          });
       }
     };
  });
};

},{}],13:[function(require,module,exports){
module.exports = function(module) {
  'use strict';
  angular.module("sampleApp").directive('validateText', function() {
    var TEXT_REGEXP = /([A-Za-z])\w+/;

    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {

          ctrl.$validators['mandatory'] = function(modelValue) {

            return ctrl.$isEmpty(modelValue) || TEXT_REGEXP.test(modelValue);
          };
        }
      };
  });
};

},{}],14:[function(require,module,exports){
module.exports = function(module) {
	require('./requestService.js')(module);
};

},{"./requestService.js":15}],15:[function(require,module,exports){
module.exports = function(module) {
  var module = angular.module("requsetService", []);
  module.factory("sendRequest", function ($http) {
      var data;
      return {
          send: function(url, data) {
             $http.post(url, data)
              .success(function (data) {
                  $scope.PostDataResponse = data;
                  console.log('Status: 200 OK');
              })
              .error(function (data) {
                  console.log('Status: 501');
              });
              console.log(data);
          }
      };
  });
};

},{}]},{},[1])