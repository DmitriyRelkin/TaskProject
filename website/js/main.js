(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./config/routerConfig.js":2,"./controllers/initControllers.js":4,"./directives/initDirectives.js":10,"./services/initServices.js":13}],2:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
module.exports = function(module) {
	require('./email-directive.js')(module);
	require('./fullName-directive.js')(module);
	require('./password-check-directive.js')(module);
	require('./required-text-directive.js')(module);
};

},{"./email-directive.js":8,"./fullName-directive.js":9,"./password-check-directive.js":11,"./required-text-directive.js":12}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
module.exports = function(module) {
	require('./requestService.js')(module);
};

},{"./requestService.js":14}],14:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92NC40LjMvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJqcy9jb25maWcvcm91dGVyQ29uZmlnLmpzIiwianMvY29udHJvbGxlcnMvaG9tZVBhZ2VDb250cm9sbGVyLmpzIiwianMvY29udHJvbGxlcnMvaW5pdENvbnRyb2xsZXJzLmpzIiwianMvY29udHJvbGxlcnMvbGF5b3V0c0NvbnRyb2xsZXIuanMiLCJqcy9jb250cm9sbGVycy9zbGlkZXJDb250cm9sbGVyLmpzIiwianMvY29udHJvbGxlcnMvdmFsaWRhdGlvbkNvbnRyb2xsZXIuanMiLCJqcy9kaXJlY3RpdmVzL2VtYWlsLWRpcmVjdGl2ZS5qcyIsImpzL2RpcmVjdGl2ZXMvZnVsbE5hbWUtZGlyZWN0aXZlLmpzIiwianMvZGlyZWN0aXZlcy9pbml0RGlyZWN0aXZlcy5qcyIsImpzL2RpcmVjdGl2ZXMvcGFzc3dvcmQtY2hlY2stZGlyZWN0aXZlLmpzIiwianMvZGlyZWN0aXZlcy9yZXF1aXJlZC10ZXh0LWRpcmVjdGl2ZS5qcyIsImpzL3NlcnZpY2VzL2luaXRTZXJ2aWNlcy5qcyIsImpzL3NlcnZpY2VzL3JlcXVlc3RTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG5cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGNvbmZpZyAgICAgICAgICA9IHJlcXVpcmUoJy4vY29uZmlnL3JvdXRlckNvbmZpZy5qcycpO1xuICB2YXIgaW5pdFNlcnZpY2VzICAgID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9pbml0U2VydmljZXMuanMnKTtcblx0dmFyIGluaXRDb250cm9sbGVycyA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvaW5pdENvbnRyb2xsZXJzLmpzJyk7XG5cdHZhciBpbml0RGlyZWN0aXZlcyAgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvaW5pdERpcmVjdGl2ZXMuanMnKTtcblxuXG5cbiAgdmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKFwic2FtcGxlQXBwXCIsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICBcInJlcXVzZXRTZXJ2aWNlXCJcbiAgXSk7XG5cbiAgbW9kdWxlLnJ1bihmdW5jdGlvbiAoJHN0YXRlLCRyb290U2NvcGUpIHtcbiAgICAgICRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xuICB9KTtcbiAgbW9kdWxlLnJ1bihbXG4gICAgICBcIiRyb290U2NvcGVcIiwgXCIkc3RhdGVcIiwgXCIkc3RhdGVQYXJhbXNcIiwgZnVuY3Rpb24oJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGU7XG4gICAgICAgIHJldHVybiAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgICAgIH1cbiAgXSk7XG5cbiAgaW5pdFNlcnZpY2VzKG1vZHVsZSk7XG4gIGluaXRDb250cm9sbGVycyhtb2R1bGUpO1xuICBpbml0RGlyZWN0aXZlcyhtb2R1bGUpO1xuXG4gIGNvbmZpZyhtb2R1bGUpO1xufSgpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBtb2R1bGUuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLy8gPT09PUhvbWU9PT09XG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd3ZWJzaXRlL3RlbXBsYXRlcy9ob21lLmh0bWwnXG4gICAgICAgIH0pXG4gICAgICAgLy89PT09Q29udGFjdHM9PT09XG4gICAgICAgIC5zdGF0ZSgnY29udGFjdHMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvY29udGFjdHMnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd3ZWJzaXRlL3RlbXBsYXRlcy9jb250YWN0cy5odG1sJ1xuICAgICAgICB9KVxuICAgICAgIC8vPT09PUJsb2c9PT09XG4gICAgICAgIC5zdGF0ZSgnYmxvZycsIHtcbiAgICAgICAgICAgIHVybDogJy9ibG9nJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnd2Vic2l0ZS90ZW1wbGF0ZXMvYmxvZy5odG1sJ1xuICAgICAgICB9KVxuICAgICAgICAvLz09PT1SZWdpc3RyYXRpb249PT09XG4gICAgICAgIC5zdGF0ZSgncmVnJywge1xuICAgICAgICAgICAgdXJsOiAnL3JlZycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3dlYnNpdGUvdGVtcGxhdGVzL3JlZ2lzdHJhdGlvbi5odG1sJ1xuICAgICAgICB9KVxuICAgICAgICAvLz09PT1TaWctaW49PT09XG4gICAgICAgIC5zdGF0ZSgnc2lnLWluJywge1xuICAgICAgICAgICAgdXJsOiAnL3NpZy1pbicsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3dlYnNpdGUvdGVtcGxhdGVzL3NpZy1pbi5odG1sJ1xuICAgICAgICB9KTtcbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgLy8gPT09PT09PT09PT09PT1CaXNpbmVzc0Jsb2NrPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbW9kdWxlLmNvbnRyb2xsZXIoXCJiaXNpbmVzc0Jsb2NrQ3RybFwiLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICRzY29wZS5zZXJ2aWNlQmxvY2sgPSBbXG4gICAgICAgICAge3NyY0ltZzogXCIvd2Vic2l0ZS9pbWFnZXMvaWNvbi1zZXJ2aWNlLTEucG5nXCIsIGhlYWRlcjpcIkJVU0lORVNTIENPTlNVTFRJTkdcIiwgcGFyYWdyYXBoOiBcIlZlc3RpYnVsdW0gcXVpcyBmZWxpcyB1dCBlbmltIGFsaXF1YW0gaWFjdWxpcy4gTnVsbGFtIHBoYXJldHJhIHRvcnRvciBhdCBxdWFtIHZpdmVycmEgdm9sdXRwYXQuIFBoYXNlbGx1cyB2ZWwgZmF1Y2lidXMgZG9sb3IuIEN1cmFiaXR1clwifSxcbiAgICAgICAgICB7c3JjSW1nOiBcIi93ZWJzaXRlL2ltYWdlcy9pY29uLXNlcnZpY2UtMi5wbmdcIiwgaGVhZGVyOlwiRU5URVJQUklTRSBBUFBMSUNBVElPTlwiLCBwYXJhZ3JhcGg6IFwiVmVzdGlidWx1bSBxdWlzIGZlbGlzIHV0IGVuaW0gYWxpcXVhbSBpYWN1bGlzLiBOdWxsYW0gcGhhcmV0cmEgdG9ydG9yIGF0IHF1YW0gdml2ZXJyYSB2b2x1dHBhdC4gUGhhc2VsbHVzIHZlbCBmYXVjaWJ1cyBkb2xvci4gQ3VyYWJpdHVyXCJ9LFxuICAgICAgICAgIHtzcmNJbWc6IFwiL3dlYnNpdGUvaW1hZ2VzL2ljb24tc2VydmljZS0zLnBuZ1wiLCBoZWFkZXI6XCJORVcgU1RSQVRFR1lcIiwgcGFyYWdyYXBoOiBcIlZlc3RpYnVsdW0gcXVpcyBmZWxpcyB1dCBlbmltIGFsaXF1YW0gaWFjdWxpcy4gTnVsbGFtIHBoYXJldHJhIHRvcnRvciBhdCBxdWFtIHZpdmVycmEgdm9sdXRwYXQuIFBoYXNlbGx1cyB2ZWwgZmF1Y2lidXMgZG9sb3IuIEN1cmFiaXR1clwifSxcbiAgICAgICAgICB7c3JjSW1nOiBcIi93ZWJzaXRlL2ltYWdlcy9pY29uLXNlcnZpY2UtNC5wbmdcIiwgaGVhZGVyOlwiSVQgTUFOQUdFTUVOVFwiLCBwYXJhZ3JhcGg6IFwiVmVzdGlidWx1bSBxdWlzIGZlbGlzIHV0IGVuaW0gYWxpcXVhbSBpYWN1bGlzLiBOdWxsYW0gcGhhcmV0cmEgdG9ydG9yIGF0IHF1YW0gdml2ZXJyYSB2b2x1dHBhdC4gUGhhc2VsbHVzIHZlbCBmYXVjaWJ1cyBkb2xvci4gQ3VyYWJpdHVyXCJ9LFxuICAgICAgICAgIHtzcmNJbWc6IFwiL3dlYnNpdGUvaW1hZ2VzL2ljb24tc2VydmljZS01LnBuZ1wiLCBoZWFkZXI6XCJPVVRTT1VSU0lOR1wiLCBwYXJhZ3JhcGg6IFwiVmVzdGlidWx1bSBxdWlzIGZlbGlzIHV0IGVuaW0gYWxpcXVhbSBpYWN1bGlzLiBOdWxsYW0gcGhhcmV0cmEgdG9ydG9yIGF0IHF1YW0gdml2ZXJyYSB2b2x1dHBhdC4gUGhhc2VsbHVzIHZlbCBmYXVjaWJ1cyBkb2xvci4gQ3VyYWJpdHVyXCJ9LFxuICAgICAgICAgIHtzcmNJbWc6IFwiL3dlYnNpdGUvaW1hZ2VzL2ljb24tc2VydmljZS02LnBuZ1wiLCBoZWFkZXI6XCJTQUxFUyAmIE1BUktFVElOR1wiLCBwYXJhZ3JhcGg6IFwiVmVzdGlidWx1bSBxdWlzIGZlbGlzIHV0IGVuaW0gYWxpcXVhbSBpYWN1bGlzLiBOdWxsYW0gcGhhcmV0cmEgdG9ydG9yIGF0IHF1YW0gdml2ZXJyYSB2b2x1dHBhdC4gUGhhc2VsbHVzIHZlbCBmYXVjaWJ1cyBkb2xvci4gQ3VyYWJpdHVyXCJ9XG4gICAgICBdO1xuICB9KTtcbiAgLy8gPT09PT09PT09PT09PT1TdHJhdGVneS1CbG9jaz09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbW9kdWxlLmNvbnRyb2xsZXIoXCJzdHJhdGVneUN0cmxcIiwgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAkc2NvcGUuc3RyYXRlZ3lCbG9jayA9IFtcbiAgICAgICAgICB7c3JjSW1nOiBcIi93ZWJzaXRlL2ltYWdlcy9wYWdlMV9pbWcxLmpwZ1wiLCBoZWFkZXI6XCJRVUVTVElPTlMgVE8gQVNLOlwiLCBpdGVtMTpcIkFuYWx5c2luZyB5b3VyIG9yZ2FuaXNhdGlvbiBidXNpbmVzcyBtb2RlbFwiLCBpdGVtMjpcIklkZW50aWZ5aW5nIGRldmVsb3BtZW50IG9wcG9ydHVuaXRpZXNcIiwgaXRlbTM6XCJEZWZpbmluZyB5b3VyIG9iamVjdGl2ZXNcIiwgaXRlbTQ6XCJJZGVudGlmeWluZyB0aGUga2V5IGZhY3RvcnMgZm9yIHN1Y2Nlc3NcIn0sXG4gICAgICAgICAge3NyY0ltZzogXCIvd2Vic2l0ZS9pbWFnZXMvcGFnZTFfaW1nMi5qcGdcIiwgaGVhZGVyOlwiVEhFIENPTVBBTlknUyBST0xFOlwiLCBpdGVtMTpcIklkZW50aWZ5aW5nIGRldmVsb3BtZW50IG9wcG9ydHVuaXRpZXNcIiwgaXRlbTI6IFwiQW5hbHlzaW5nIHlvdXIgb3JnYW5pc2F0aW9uIGJ1c2luZXNzIG1vZGVsXCIsIGl0ZW0zOlwiRGVmaW5pbmcgeW91ciBvYmplY3RpdmVzXCIsIGl0ZW00OlwiSWRlbnRpZnlpbmcgdGhlIGtleSBmYWN0b3JzIGZvciBzdWNjZXNzXCJ9LFxuICAgICAgICAgIHtzcmNJbWc6IFwiL3dlYnNpdGUvaW1hZ2VzL3BhZ2UxX2ltZzMuanBnXCIsIGhlYWRlcjpcIk9VUiBLRVkgT0ZGRVJTOlwiLCBpdGVtMTpcIkRlZmluaW5nIHlvdXIgb2JqZWN0aXZlc1wiLCBpdGVtMjogXCJBbmFseXNpbmcgeW91ciBvcmdhbmlzYXRpb24gYnVzaW5lc3MgbW9kZWxcIiwgaXRlbTM6XCJJZGVudGlmeWluZyBkZXZlbG9wbWVudCBvcHBvcnR1bml0aWVzXCIsICBpdGVtNDpcIklkZW50aWZ5aW5nIHRoZSBrZXkgZmFjdG9ycyBmb3Igc3VjY2Vzc1wifVxuICAgICAgXTtcbiAgfSk7XG5cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRyZXF1aXJlKCcuL2hvbWVQYWdlQ29udHJvbGxlci5qcycpKG1vZHVsZSk7XG5cdHJlcXVpcmUoJy4vbGF5b3V0c0NvbnRyb2xsZXIuanMnKShtb2R1bGUpO1xuXHRyZXF1aXJlKCcuL3NsaWRlckNvbnRyb2xsZXIuanMnKShtb2R1bGUpO1xuXHRyZXF1aXJlKCcuL3ZhbGlkYXRpb25Db250cm9sbGVyLmpzJykobW9kdWxlKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICBtb2R1bGUuY29udHJvbGxlcihcIm1haW5IZWFkZXJDdHJsXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS51cmwgPSBcIndlYnNpdGUvdGVtcGxhdGVzL2NvbXBvbmVudHMvaGVhZGVyLmh0bWxcIjtcbiAgfSk7XG4gIG1vZHVsZS5jb250cm9sbGVyKFwibWFpbkZvb3RlckN0cmxcIiwgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLnVybCA9IFwid2Vic2l0ZS90ZW1wbGF0ZXMvY29tcG9uZW50cy9mb290ZXIuaHRtbFwiO1xuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICBtb2R1bGUuY29udHJvbGxlcihcImdhbGFyeUN0cmxcIiwgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkaW50ZXJ2YWwpIHtcbiAgICAgICRzY29wZS5waG90b3MgPSBbXG4gICAgICAgICAge3NyYzogXCJ3ZWJzaXRlL2ltYWdlcy9zbGlkZS0xLmpwZ1wiLCBhY3RpdmUgOiB0cnVlICwgYnRuTmFtZTogXCJCVVNJTkVTIFdPUktTIFdJVEggVEVDTk9MT0dZXCIsIGJ0bkJhbm5lcjogXCJXZSBhZGRlZCB0ZWNobm9sb2d5IHRvIHN0cmF0ZWd5LiBZb3UgZ2V0IHRoZSBtdWx0aXBsaWVyIGVmZmVjdFwifSxcbiAgICAgICAgICB7c3JjOiBcIndlYnNpdGUvaW1hZ2VzL3NsaWRlLTIuanBnXCIsIGFjdGl2ZSA6IGZhbHNlICwgYnRuTmFtZTogXCJQUk9GRVNTSU9OQUwgQ09OU1VMVElORyBTRVJWSUNFU1wiLCBidG5CYW5uZXI6IFwiV2UgYXJlIHRoZSB0cnVzdGVkIGFkdmlzb3IgdG8gdGhlIHdvcmxkJ3MgbGVhZGluZyBidXNpbmVzc2VzXCJ9LFxuICAgICAgICAgIHtzcmM6IFwid2Vic2l0ZS9pbWFnZXMvc2xpZGUtMy5qcGdcIiwgYWN0aXZlIDogZmFsc2UgLCBidG5OYW1lOiBcIkJST0FERU4gWU9VUiBNQVJLRVQgRURHRVwiLCBidG5CYW5uZXI6IFwiV2Ugd29yayB3aXRoIG91ciBjbGllbnRzIGFzIHdlIGRvIHdpdGggb3VyIGNvbGxlYWd1ZXNcIn0sXG4gICAgICAgICAge3NyYzogXCJ3ZWJzaXRlL2ltYWdlcy9zbGlkZS00LmpwZ1wiLCBhY3RpdmUgOiBmYWxzZSAsIGJ0bk5hbWU6IFwiV0UgQVJFQSBORVRXT1JLIE9GIExFQURFUlNcIiwgYnRuQmFubmVyOiBcIldlIGRldmVsb3AgdW5wYXJhbGxlbGVkIG1hbmFnZW1lbnQgaW5zaWdodHNcIn1cbiAgICAgIF07XG4gICAgICAkc2NvcGUucGhvdG9zLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgJHNjb3BlLnBob3RvU3JjID0gJHNjb3BlLnBob3Rvc1swXTtcbiAgICAgICRzY29wZS5idG5TcmMgPSAkc2NvcGUucGhvdG9zWzBdO1xuICAgICAgJHNjb3BlLmJ0blRpdGxlID0gJHNjb3BlLnBob3Rvc1swXTtcbiAgICAgICRzY29wZS5zaG93UGhvdG8gPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICRzY29wZS5waG90b1NyYyA9ICRzY29wZS5waG90b3NbaW5kZXhdO1xuICAgICAgICAgICRzY29wZS5idG5TcmMgPSAkc2NvcGUucGhvdG9zW2luZGV4XTtcbiAgICAgICAgICAkc2NvcGUuYnRuVGl0bGUgPSAkc2NvcGUucGhvdG9zW2luZGV4XTtcbiAgICAgIH07XG4gICAgICAkc2NvcGUuY291bnRlciA9IDA7XG4gICAgICAkaW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuY291bnRlcisrO1xuICAgICAgICAkc2NvcGUucGhvdG9TcmMgPSAkc2NvcGUucGhvdG9zWyRzY29wZS5jb3VudGVyXTtcbiAgICAgICAgJHNjb3BlLmJ0blNyYyA9ICRzY29wZS5waG90b3NbJHNjb3BlLmNvdW50ZXJdO1xuICAgICAgICAkc2NvcGUuYnRuVGl0bGUgPSAkc2NvcGUucGhvdG9zWyRzY29wZS5jb3VudGVyXTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTwkc2NvcGUucGhvdG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgJHNjb3BlLnBob3Rvc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAkc2NvcGUucGhvdG9zWyRzY29wZS5jb3VudGVyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoJHNjb3BlLmNvdW50ZXIgPT0gMykge1xuICAgICAgICAgICRzY29wZS5jb3VudGVyID0gLTE7XG4gICAgICAgIH1cbiAgICAgIH0sIDMwMDApO1xuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICAvLyA9PT09PT09PT09PT09PT09VkFMSURBVElPTj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbW9kdWxlLmNvbnRyb2xsZXIoXCJ2YWxpZEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCAkdGltZW91dCwgc2VuZFJlcXVlc3QpIHtcbiAgICAgICRzY29wZS5yZWdEYXRhID0ge307XG4gICAgICAkc2NvcGUubG9nRGF0YSA9IHt9O1xuICAgICAgJHNjb3BlLm1lc0RhdGEgPSB7fTtcbiAgICAgICRzY29wZS5tZXNzYWdlUmVnID0gXCJcIjtcbiAgICAgICRzY29wZS5tZXNzYWdlTWVzID0gXCJcIjtcbiAgICAgICRzY29wZS5tZXNzYWdlTG9nID0gXCJcIjtcblxuICAgICAgJHNjb3BlLnNlbmRSZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YVJlZyA9ICRzY29wZS5yZWdEYXRhO1xuICAgICAgICB2YXIgZGF0YUxvZyA9ICRzY29wZS5sb2dEYXRhO1xuICAgICAgICB2YXIgZGF0YU1lcyA9ICRzY29wZS5tZXNEYXRhO1xuXG4gICAgICAgIGlmIChkYXRhUmVnKSB7XG4gICAgICAgICAgc2VuZFJlcXVlc3Quc2VuZChkYXRhUmVnLFwiL3JlZ1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhTG9nKSB7XG4gICAgICAgICAgc2VuZFJlcXVlc3Quc2VuZChkYXRhTG9nLFwiL3JlZ1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhTWVzKSB7XG4gICAgICAgICAgc2VuZFJlcXVlc3Quc2VuZChkYXRhTWVzLFwiL3JlZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICAkc2NvcGUubWVzc2FnZVJlZyA9IFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWQhXCI7XG4gICAgICAgICRzY29wZS5tZXNzYWdlTWVzID0gXCJNZXNzYWdlIHNlbnQgc3VjY2Vzc2Z1bGx5IVwiO1xuICAgICAgICAkc2NvcGUubWVzc2FnZUxvZyA9IFwiTG9naW4gc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZCFcIjtcblxuICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvXCIpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgIH1cbiAgfSk7XG5cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKFwic2FtcGxlQXBwXCIpLmRpcmVjdGl2ZSgndmFsaWRhdGVFbWFpbCcsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBFTUFJTF9SRUdFWFAgPSAvXlthLXpdK1thLXowLTkuX10rQFthLXpdK1xcLlthLXouXXsyLDV9JC87XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsbSwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICAgLy8gb25seSBhcHBseSB0aGUgdmFsaWRhdG9yIGlmIG5nTW9kZWwgaXMgcHJlc2VudCBhbmQgQW5ndWxhciBoYXMgYWRkZWQgdGhlIGVtYWlsIHZhbGlkYXRvclxuICAgICAgICBpZiAoY3RybCAmJiBjdHJsLiR2YWxpZGF0b3JzLmVtYWlsKSB7XG5cbiAgICAgICAgICAvLyB0aGlzIHdpbGwgb3ZlcndyaXRlIHRoZSBkZWZhdWx0IEFuZ3VsYXIgZW1haWwgdmFsaWRhdG9yXG4gICAgICAgICAgY3RybC4kdmFsaWRhdG9ycy5lbWFpbCA9IGZ1bmN0aW9uKG1vZGVsVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjdHJsLiRpc0VtcHR5KG1vZGVsVmFsdWUpIHx8IEVNQUlMX1JFR0VYUC50ZXN0KG1vZGVsVmFsdWUpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoXCJzYW1wbGVBcHBcIikuZGlyZWN0aXZlKCd2YWxpZGF0ZUZ1bGxuYW1lJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIEZVTExOQU1FX1JFR0VYUCA9IC9eW0EtWl1bYS16QS1aJ10rWyBdK1tBLVpdW2EtekEtWidcXC0gXSokLztcbiAgICAvLyB2YXIgRlVMTE5BTUVfUkVHRVhQID0gL14oW2EtekEtWictXStcXHMrKXsxLDR9W2EtekEteictXSskLztcblxuICAgIHJldHVybiB7XG4gICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxtLCBhdHRycywgY3RybCkge1xuXG4gICAgICAgICAgY3RybC4kdmFsaWRhdG9yc1snZnVsbG5hbWUnXSA9IGZ1bmN0aW9uKG1vZGVsVmFsdWUpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGN0cmwuJGlzRW1wdHkobW9kZWxWYWx1ZSkgfHwgRlVMTE5BTUVfUkVHRVhQLnRlc3QobW9kZWxWYWx1ZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0cmVxdWlyZSgnLi9lbWFpbC1kaXJlY3RpdmUuanMnKShtb2R1bGUpO1xuXHRyZXF1aXJlKCcuL2Z1bGxOYW1lLWRpcmVjdGl2ZS5qcycpKG1vZHVsZSk7XG5cdHJlcXVpcmUoJy4vcGFzc3dvcmQtY2hlY2stZGlyZWN0aXZlLmpzJykobW9kdWxlKTtcblx0cmVxdWlyZSgnLi9yZXF1aXJlZC10ZXh0LWRpcmVjdGl2ZS5qcycpKG1vZHVsZSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgYW5ndWxhci5tb2R1bGUoXCJzYW1wbGVBcHBcIikuZGlyZWN0aXZlKFwicGFzc3dvcmRWZXJpZnlcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVpcmU6IFwibmdNb2RlbFwiLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgIHBhc3N3b3JkVmVyaWZ5OiAnPSdcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICAgICAgc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgY29tYmluZWQ7XG5cbiAgICAgICAgICAgICAgaWYgKHNjb3BlLnBhc3N3b3JkVmVyaWZ5IHx8IGN0cmwuJHZpZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICBjb21iaW5lZCA9IHNjb3BlLnBhc3N3b3JkVmVyaWZ5ICsgJ18nICsgY3RybC4kdmlld1ZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICAgICAgICB9LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGN0cmwuJHBhcnNlcnMudW5zaGlmdChmdW5jdGlvbih2aWV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luID0gc2NvcGUucGFzc3dvcmRWZXJpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbiAhPT0gdmlld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KFwicGFzc3dvcmRWZXJpZnlcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KFwicGFzc3dvcmRWZXJpZnlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICB9XG4gICAgIH07XG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgYW5ndWxhci5tb2R1bGUoXCJzYW1wbGVBcHBcIikuZGlyZWN0aXZlKCd2YWxpZGF0ZVRleHQnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgVEVYVF9SRUdFWFAgPSAvKFtBLVphLXpdKVxcdysvO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzLCBjdHJsKSB7XG5cbiAgICAgICAgICBjdHJsLiR2YWxpZGF0b3JzWydtYW5kYXRvcnknXSA9IGZ1bmN0aW9uKG1vZGVsVmFsdWUpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGN0cmwuJGlzRW1wdHkobW9kZWxWYWx1ZSkgfHwgVEVYVF9SRUdFWFAudGVzdChtb2RlbFZhbHVlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRyZXF1aXJlKCcuL3JlcXVlc3RTZXJ2aWNlLmpzJykobW9kdWxlKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICB2YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoXCJyZXF1c2V0U2VydmljZVwiLCBbXSk7XG4gIG1vZHVsZS5mYWN0b3J5KFwic2VuZFJlcXVlc3RcIiwgZnVuY3Rpb24gKCRodHRwKSB7XG4gICAgICB2YXIgZGF0YTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2VuZDogZnVuY3Rpb24odXJsLCBkYXRhKSB7XG4gICAgICAgICAgICAgJGh0dHAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAkc2NvcGUuUG9zdERhdGFSZXNwb25zZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdHVzOiAyMDAgT0snKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmVycm9yKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdHVzOiA1MDEnKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH0pO1xufTtcbiJdfQ==
