(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(vars) {
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
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92NC40LjMvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJqcy9jb25maWcvcm91dGVyQ29uZmlnLmpzIiwianMvY29udHJvbGxlcnMvaG9tZVBhZ2VDb250cm9sbGVyLmpzIiwianMvY29udHJvbGxlcnMvaW5pdENvbnRyb2xsZXJzLmpzIiwianMvY29udHJvbGxlcnMvbGF5b3V0c0NvbnRyb2xsZXIuanMiLCJqcy9jb250cm9sbGVycy9zbGlkZXJDb250cm9sbGVyLmpzIiwianMvY29udHJvbGxlcnMvdmFsaWRhdGlvbkNvbnRyb2xsZXIuanMiLCJqcy9kaXJlY3RpdmVzL2VtYWlsLWRpcmVjdGl2ZS5qcyIsImpzL2RpcmVjdGl2ZXMvZnVsbE5hbWUtZGlyZWN0aXZlLmpzIiwianMvZGlyZWN0aXZlcy9pbml0RGlyZWN0aXZlcy5qcyIsImpzL2RpcmVjdGl2ZXMvcGFzc3dvcmQtY2hlY2stZGlyZWN0aXZlLmpzIiwianMvZGlyZWN0aXZlcy9yZXF1aXJlZC10ZXh0LWRpcmVjdGl2ZS5qcyIsImpzL3NlcnZpY2VzL2luaXRTZXJ2aWNlcy5qcyIsImpzL3NlcnZpY2VzL3JlcXVlc3RTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFycykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgY29uZmlnICAgICAgICAgID0gcmVxdWlyZSgnLi9jb25maWcvcm91dGVyQ29uZmlnLmpzJyk7XG4gIHZhciBpbml0U2VydmljZXMgICAgPSByZXF1aXJlKCcuL3NlcnZpY2VzL2luaXRTZXJ2aWNlcy5qcycpO1xuXHR2YXIgaW5pdENvbnRyb2xsZXJzID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9pbml0Q29udHJvbGxlcnMuanMnKTtcblx0dmFyIGluaXREaXJlY3RpdmVzICA9IHJlcXVpcmUoJy4vZGlyZWN0aXZlcy9pbml0RGlyZWN0aXZlcy5qcycpO1xuXG5cblxuICB2YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoXCJzYW1wbGVBcHBcIiwgW1xuICAgICd1aS5yb3V0ZXInLFxuICAgIFwicmVxdXNldFNlcnZpY2VcIlxuICBdKTtcblxuICBtb2R1bGUucnVuKGZ1bmN0aW9uICgkc3RhdGUsJHJvb3RTY29wZSkge1xuICAgICAgJHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGU7XG4gIH0pO1xuICBtb2R1bGUucnVuKFtcbiAgICAgIFwiJHJvb3RTY29wZVwiLCBcIiRzdGF0ZVwiLCBcIiRzdGF0ZVBhcmFtc1wiLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAkcm9vdFNjb3BlLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICAgICAgcmV0dXJuICRyb290U2NvcGUuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAgICAgfVxuICBdKTtcblxuICBpbml0U2VydmljZXMobW9kdWxlKTtcbiAgaW5pdENvbnRyb2xsZXJzKG1vZHVsZSk7XG4gIGluaXREaXJlY3RpdmVzKG1vZHVsZSk7XG5cbiAgY29uZmlnKG1vZHVsZSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgbW9kdWxlLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC8vID09PT1Ib21lPT09PVxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnd2Vic2l0ZS90ZW1wbGF0ZXMvaG9tZS5odG1sJ1xuICAgICAgICB9KVxuICAgICAgIC8vPT09PUNvbnRhY3RzPT09PVxuICAgICAgICAuc3RhdGUoJ2NvbnRhY3RzJywge1xuICAgICAgICAgICAgdXJsOiAnL2NvbnRhY3RzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnd2Vic2l0ZS90ZW1wbGF0ZXMvY29udGFjdHMuaHRtbCdcbiAgICAgICAgfSlcbiAgICAgICAvLz09PT1CbG9nPT09PVxuICAgICAgICAuc3RhdGUoJ2Jsb2cnLCB7XG4gICAgICAgICAgICB1cmw6ICcvYmxvZycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3dlYnNpdGUvdGVtcGxhdGVzL2Jsb2cuaHRtbCdcbiAgICAgICAgfSlcbiAgICAgICAgLy89PT09UmVnaXN0cmF0aW9uPT09PVxuICAgICAgICAuc3RhdGUoJ3JlZycsIHtcbiAgICAgICAgICAgIHVybDogJy9yZWcnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd3ZWJzaXRlL3RlbXBsYXRlcy9yZWdpc3RyYXRpb24uaHRtbCdcbiAgICAgICAgfSlcbiAgICAgICAgLy89PT09U2lnLWluPT09PVxuICAgICAgICAuc3RhdGUoJ3NpZy1pbicsIHtcbiAgICAgICAgICAgIHVybDogJy9zaWctaW4nLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd3ZWJzaXRlL3RlbXBsYXRlcy9zaWctaW4uaHRtbCdcbiAgICAgICAgfSk7XG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gIC8vID09PT09PT09PT09PT09QmlzaW5lc3NCbG9jaz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG1vZHVsZS5jb250cm9sbGVyKFwiYmlzaW5lc3NCbG9ja0N0cmxcIiwgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAkc2NvcGUuc2VydmljZUJsb2NrID0gW1xuICAgICAgICAgIHtzcmNJbWc6IFwiL3dlYnNpdGUvaW1hZ2VzL2ljb24tc2VydmljZS0xLnBuZ1wiLCBoZWFkZXI6XCJCVVNJTkVTUyBDT05TVUxUSU5HXCIsIHBhcmFncmFwaDogXCJWZXN0aWJ1bHVtIHF1aXMgZmVsaXMgdXQgZW5pbSBhbGlxdWFtIGlhY3VsaXMuIE51bGxhbSBwaGFyZXRyYSB0b3J0b3IgYXQgcXVhbSB2aXZlcnJhIHZvbHV0cGF0LiBQaGFzZWxsdXMgdmVsIGZhdWNpYnVzIGRvbG9yLiBDdXJhYml0dXJcIn0sXG4gICAgICAgICAge3NyY0ltZzogXCIvd2Vic2l0ZS9pbWFnZXMvaWNvbi1zZXJ2aWNlLTIucG5nXCIsIGhlYWRlcjpcIkVOVEVSUFJJU0UgQVBQTElDQVRJT05cIiwgcGFyYWdyYXBoOiBcIlZlc3RpYnVsdW0gcXVpcyBmZWxpcyB1dCBlbmltIGFsaXF1YW0gaWFjdWxpcy4gTnVsbGFtIHBoYXJldHJhIHRvcnRvciBhdCBxdWFtIHZpdmVycmEgdm9sdXRwYXQuIFBoYXNlbGx1cyB2ZWwgZmF1Y2lidXMgZG9sb3IuIEN1cmFiaXR1clwifSxcbiAgICAgICAgICB7c3JjSW1nOiBcIi93ZWJzaXRlL2ltYWdlcy9pY29uLXNlcnZpY2UtMy5wbmdcIiwgaGVhZGVyOlwiTkVXIFNUUkFURUdZXCIsIHBhcmFncmFwaDogXCJWZXN0aWJ1bHVtIHF1aXMgZmVsaXMgdXQgZW5pbSBhbGlxdWFtIGlhY3VsaXMuIE51bGxhbSBwaGFyZXRyYSB0b3J0b3IgYXQgcXVhbSB2aXZlcnJhIHZvbHV0cGF0LiBQaGFzZWxsdXMgdmVsIGZhdWNpYnVzIGRvbG9yLiBDdXJhYml0dXJcIn0sXG4gICAgICAgICAge3NyY0ltZzogXCIvd2Vic2l0ZS9pbWFnZXMvaWNvbi1zZXJ2aWNlLTQucG5nXCIsIGhlYWRlcjpcIklUIE1BTkFHRU1FTlRcIiwgcGFyYWdyYXBoOiBcIlZlc3RpYnVsdW0gcXVpcyBmZWxpcyB1dCBlbmltIGFsaXF1YW0gaWFjdWxpcy4gTnVsbGFtIHBoYXJldHJhIHRvcnRvciBhdCBxdWFtIHZpdmVycmEgdm9sdXRwYXQuIFBoYXNlbGx1cyB2ZWwgZmF1Y2lidXMgZG9sb3IuIEN1cmFiaXR1clwifSxcbiAgICAgICAgICB7c3JjSW1nOiBcIi93ZWJzaXRlL2ltYWdlcy9pY29uLXNlcnZpY2UtNS5wbmdcIiwgaGVhZGVyOlwiT1VUU09VUlNJTkdcIiwgcGFyYWdyYXBoOiBcIlZlc3RpYnVsdW0gcXVpcyBmZWxpcyB1dCBlbmltIGFsaXF1YW0gaWFjdWxpcy4gTnVsbGFtIHBoYXJldHJhIHRvcnRvciBhdCBxdWFtIHZpdmVycmEgdm9sdXRwYXQuIFBoYXNlbGx1cyB2ZWwgZmF1Y2lidXMgZG9sb3IuIEN1cmFiaXR1clwifSxcbiAgICAgICAgICB7c3JjSW1nOiBcIi93ZWJzaXRlL2ltYWdlcy9pY29uLXNlcnZpY2UtNi5wbmdcIiwgaGVhZGVyOlwiU0FMRVMgJiBNQVJLRVRJTkdcIiwgcGFyYWdyYXBoOiBcIlZlc3RpYnVsdW0gcXVpcyBmZWxpcyB1dCBlbmltIGFsaXF1YW0gaWFjdWxpcy4gTnVsbGFtIHBoYXJldHJhIHRvcnRvciBhdCBxdWFtIHZpdmVycmEgdm9sdXRwYXQuIFBoYXNlbGx1cyB2ZWwgZmF1Y2lidXMgZG9sb3IuIEN1cmFiaXR1clwifVxuICAgICAgXTtcbiAgfSk7XG4gIC8vID09PT09PT09PT09PT09U3RyYXRlZ3ktQmxvY2s9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG1vZHVsZS5jb250cm9sbGVyKFwic3RyYXRlZ3lDdHJsXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgJHNjb3BlLnN0cmF0ZWd5QmxvY2sgPSBbXG4gICAgICAgICAge3NyY0ltZzogXCIvd2Vic2l0ZS9pbWFnZXMvcGFnZTFfaW1nMS5qcGdcIiwgaGVhZGVyOlwiUVVFU1RJT05TIFRPIEFTSzpcIiwgaXRlbTE6XCJBbmFseXNpbmcgeW91ciBvcmdhbmlzYXRpb24gYnVzaW5lc3MgbW9kZWxcIiwgaXRlbTI6XCJJZGVudGlmeWluZyBkZXZlbG9wbWVudCBvcHBvcnR1bml0aWVzXCIsIGl0ZW0zOlwiRGVmaW5pbmcgeW91ciBvYmplY3RpdmVzXCIsIGl0ZW00OlwiSWRlbnRpZnlpbmcgdGhlIGtleSBmYWN0b3JzIGZvciBzdWNjZXNzXCJ9LFxuICAgICAgICAgIHtzcmNJbWc6IFwiL3dlYnNpdGUvaW1hZ2VzL3BhZ2UxX2ltZzIuanBnXCIsIGhlYWRlcjpcIlRIRSBDT01QQU5ZJ1MgUk9MRTpcIiwgaXRlbTE6XCJJZGVudGlmeWluZyBkZXZlbG9wbWVudCBvcHBvcnR1bml0aWVzXCIsIGl0ZW0yOiBcIkFuYWx5c2luZyB5b3VyIG9yZ2FuaXNhdGlvbiBidXNpbmVzcyBtb2RlbFwiLCBpdGVtMzpcIkRlZmluaW5nIHlvdXIgb2JqZWN0aXZlc1wiLCBpdGVtNDpcIklkZW50aWZ5aW5nIHRoZSBrZXkgZmFjdG9ycyBmb3Igc3VjY2Vzc1wifSxcbiAgICAgICAgICB7c3JjSW1nOiBcIi93ZWJzaXRlL2ltYWdlcy9wYWdlMV9pbWczLmpwZ1wiLCBoZWFkZXI6XCJPVVIgS0VZIE9GRkVSUzpcIiwgaXRlbTE6XCJEZWZpbmluZyB5b3VyIG9iamVjdGl2ZXNcIiwgaXRlbTI6IFwiQW5hbHlzaW5nIHlvdXIgb3JnYW5pc2F0aW9uIGJ1c2luZXNzIG1vZGVsXCIsIGl0ZW0zOlwiSWRlbnRpZnlpbmcgZGV2ZWxvcG1lbnQgb3Bwb3J0dW5pdGllc1wiLCAgaXRlbTQ6XCJJZGVudGlmeWluZyB0aGUga2V5IGZhY3RvcnMgZm9yIHN1Y2Nlc3NcIn1cbiAgICAgIF07XG4gIH0pO1xuXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0cmVxdWlyZSgnLi9ob21lUGFnZUNvbnRyb2xsZXIuanMnKShtb2R1bGUpO1xuXHRyZXF1aXJlKCcuL2xheW91dHNDb250cm9sbGVyLmpzJykobW9kdWxlKTtcblx0cmVxdWlyZSgnLi9zbGlkZXJDb250cm9sbGVyLmpzJykobW9kdWxlKTtcblx0cmVxdWlyZSgnLi92YWxpZGF0aW9uQ29udHJvbGxlci5qcycpKG1vZHVsZSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgbW9kdWxlLmNvbnRyb2xsZXIoXCJtYWluSGVhZGVyQ3RybFwiLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUudXJsID0gXCJ3ZWJzaXRlL3RlbXBsYXRlcy9jb21wb25lbnRzL2hlYWRlci5odG1sXCI7XG4gIH0pO1xuICBtb2R1bGUuY29udHJvbGxlcihcIm1haW5Gb290ZXJDdHJsXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS51cmwgPSBcIndlYnNpdGUvdGVtcGxhdGVzL2NvbXBvbmVudHMvZm9vdGVyLmh0bWxcIjtcbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgbW9kdWxlLmNvbnRyb2xsZXIoXCJnYWxhcnlDdHJsXCIsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJGludGVydmFsKSB7XG4gICAgICAkc2NvcGUucGhvdG9zID0gW1xuICAgICAgICAgIHtzcmM6IFwid2Vic2l0ZS9pbWFnZXMvc2xpZGUtMS5qcGdcIiwgYWN0aXZlIDogdHJ1ZSAsIGJ0bk5hbWU6IFwiQlVTSU5FUyBXT1JLUyBXSVRIIFRFQ05PTE9HWVwiLCBidG5CYW5uZXI6IFwiV2UgYWRkZWQgdGVjaG5vbG9neSB0byBzdHJhdGVneS4gWW91IGdldCB0aGUgbXVsdGlwbGllciBlZmZlY3RcIn0sXG4gICAgICAgICAge3NyYzogXCJ3ZWJzaXRlL2ltYWdlcy9zbGlkZS0yLmpwZ1wiLCBhY3RpdmUgOiBmYWxzZSAsIGJ0bk5hbWU6IFwiUFJPRkVTU0lPTkFMIENPTlNVTFRJTkcgU0VSVklDRVNcIiwgYnRuQmFubmVyOiBcIldlIGFyZSB0aGUgdHJ1c3RlZCBhZHZpc29yIHRvIHRoZSB3b3JsZCdzIGxlYWRpbmcgYnVzaW5lc3Nlc1wifSxcbiAgICAgICAgICB7c3JjOiBcIndlYnNpdGUvaW1hZ2VzL3NsaWRlLTMuanBnXCIsIGFjdGl2ZSA6IGZhbHNlICwgYnRuTmFtZTogXCJCUk9BREVOIFlPVVIgTUFSS0VUIEVER0VcIiwgYnRuQmFubmVyOiBcIldlIHdvcmsgd2l0aCBvdXIgY2xpZW50cyBhcyB3ZSBkbyB3aXRoIG91ciBjb2xsZWFndWVzXCJ9LFxuICAgICAgICAgIHtzcmM6IFwid2Vic2l0ZS9pbWFnZXMvc2xpZGUtNC5qcGdcIiwgYWN0aXZlIDogZmFsc2UgLCBidG5OYW1lOiBcIldFIEFSRUEgTkVUV09SSyBPRiBMRUFERVJTXCIsIGJ0bkJhbm5lcjogXCJXZSBkZXZlbG9wIHVucGFyYWxsZWxlZCBtYW5hZ2VtZW50IGluc2lnaHRzXCJ9XG4gICAgICBdO1xuICAgICAgJHNjb3BlLnBob3Rvcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICRzY29wZS5waG90b1NyYyA9ICRzY29wZS5waG90b3NbMF07XG4gICAgICAkc2NvcGUuYnRuU3JjID0gJHNjb3BlLnBob3Rvc1swXTtcbiAgICAgICRzY29wZS5idG5UaXRsZSA9ICRzY29wZS5waG90b3NbMF07XG4gICAgICAkc2NvcGUuc2hvd1Bob3RvID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAkc2NvcGUucGhvdG9TcmMgPSAkc2NvcGUucGhvdG9zW2luZGV4XTtcbiAgICAgICAgICAkc2NvcGUuYnRuU3JjID0gJHNjb3BlLnBob3Rvc1tpbmRleF07XG4gICAgICAgICAgJHNjb3BlLmJ0blRpdGxlID0gJHNjb3BlLnBob3Rvc1tpbmRleF07XG4gICAgICB9O1xuICAgICAgJHNjb3BlLmNvdW50ZXIgPSAwO1xuICAgICAgJGludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHNjb3BlLmNvdW50ZXIrKztcbiAgICAgICAgJHNjb3BlLnBob3RvU3JjID0gJHNjb3BlLnBob3Rvc1skc2NvcGUuY291bnRlcl07XG4gICAgICAgICRzY29wZS5idG5TcmMgPSAkc2NvcGUucGhvdG9zWyRzY29wZS5jb3VudGVyXTtcbiAgICAgICAgJHNjb3BlLmJ0blRpdGxlID0gJHNjb3BlLnBob3Rvc1skc2NvcGUuY291bnRlcl07XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8JHNjb3BlLnBob3Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICRzY29wZS5waG90b3NbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgJHNjb3BlLnBob3Rvc1skc2NvcGUuY291bnRlcl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKCRzY29wZS5jb3VudGVyID09IDMpIHtcbiAgICAgICAgICAkc2NvcGUuY291bnRlciA9IC0xO1xuICAgICAgICB9XG4gICAgICB9LCAzMDAwKTtcbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgLy8gPT09PT09PT09PT09PT09PVZBTElEQVRJT049PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIG1vZHVsZS5jb250cm9sbGVyKFwidmFsaWRDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgJHRpbWVvdXQsIHNlbmRSZXF1ZXN0KSB7XG4gICAgICAkc2NvcGUucmVnRGF0YSA9IHt9O1xuICAgICAgJHNjb3BlLmxvZ0RhdGEgPSB7fTtcbiAgICAgICRzY29wZS5tZXNEYXRhID0ge307XG4gICAgICAkc2NvcGUubWVzc2FnZVJlZyA9IFwiXCI7XG4gICAgICAkc2NvcGUubWVzc2FnZU1lcyA9IFwiXCI7XG4gICAgICAkc2NvcGUubWVzc2FnZUxvZyA9IFwiXCI7XG5cbiAgICAgICRzY29wZS5zZW5kUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGFSZWcgPSAkc2NvcGUucmVnRGF0YTtcbiAgICAgICAgdmFyIGRhdGFMb2cgPSAkc2NvcGUubG9nRGF0YTtcbiAgICAgICAgdmFyIGRhdGFNZXMgPSAkc2NvcGUubWVzRGF0YTtcblxuICAgICAgICBpZiAoZGF0YVJlZykge1xuICAgICAgICAgIHNlbmRSZXF1ZXN0LnNlbmQoZGF0YVJlZyxcIi9yZWdcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YUxvZykge1xuICAgICAgICAgIHNlbmRSZXF1ZXN0LnNlbmQoZGF0YUxvZyxcIi9yZWdcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YU1lcykge1xuICAgICAgICAgIHNlbmRSZXF1ZXN0LnNlbmQoZGF0YU1lcyxcIi9yZWdcIik7XG4gICAgICAgIH1cbiAgICAgICAgJHNjb3BlLm1lc3NhZ2VSZWcgPSBcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsbHkgY29tcGxldGVkIVwiO1xuICAgICAgICAkc2NvcGUubWVzc2FnZU1lcyA9IFwiTWVzc2FnZSBzZW50IHN1Y2Nlc3NmdWxseSFcIjtcbiAgICAgICAgJHNjb3BlLm1lc3NhZ2VMb2cgPSBcIkxvZ2luIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWQhXCI7XG5cbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRsb2NhdGlvbi5wYXRoKFwiL1wiKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICB9XG4gIH0pO1xuXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBhbmd1bGFyLm1vZHVsZShcInNhbXBsZUFwcFwiKS5kaXJlY3RpdmUoJ3ZhbGlkYXRlRW1haWwnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgRU1BSUxfUkVHRVhQID0gL15bYS16XStbYS16MC05Ll9dK0BbYS16XStcXC5bYS16Ll17Miw1fSQvO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzLCBjdHJsKSB7XG4gICAgICAgIC8vIG9ubHkgYXBwbHkgdGhlIHZhbGlkYXRvciBpZiBuZ01vZGVsIGlzIHByZXNlbnQgYW5kIEFuZ3VsYXIgaGFzIGFkZGVkIHRoZSBlbWFpbCB2YWxpZGF0b3JcbiAgICAgICAgaWYgKGN0cmwgJiYgY3RybC4kdmFsaWRhdG9ycy5lbWFpbCkge1xuXG4gICAgICAgICAgLy8gdGhpcyB3aWxsIG92ZXJ3cml0ZSB0aGUgZGVmYXVsdCBBbmd1bGFyIGVtYWlsIHZhbGlkYXRvclxuICAgICAgICAgIGN0cmwuJHZhbGlkYXRvcnMuZW1haWwgPSBmdW5jdGlvbihtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gY3RybC4kaXNFbXB0eShtb2RlbFZhbHVlKSB8fCBFTUFJTF9SRUdFWFAudGVzdChtb2RlbFZhbHVlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKFwic2FtcGxlQXBwXCIpLmRpcmVjdGl2ZSgndmFsaWRhdGVGdWxsbmFtZScsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBGVUxMTkFNRV9SRUdFWFAgPSAvXltBLVpdW2EtekEtWiddK1sgXStbQS1aXVthLXpBLVonXFwtIF0qJC87XG4gICAgLy8gdmFyIEZVTExOQU1FX1JFR0VYUCA9IC9eKFthLXpBLVonLV0rXFxzKyl7MSw0fVthLXpBLXonLV0rJC87XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsbSwgYXR0cnMsIGN0cmwpIHtcblxuICAgICAgICAgIGN0cmwuJHZhbGlkYXRvcnNbJ2Z1bGxuYW1lJ10gPSBmdW5jdGlvbihtb2RlbFZhbHVlKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBjdHJsLiRpc0VtcHR5KG1vZGVsVmFsdWUpIHx8IEZVTExOQU1FX1JFR0VYUC50ZXN0KG1vZGVsVmFsdWUpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHJlcXVpcmUoJy4vZW1haWwtZGlyZWN0aXZlLmpzJykobW9kdWxlKTtcblx0cmVxdWlyZSgnLi9mdWxsTmFtZS1kaXJlY3RpdmUuanMnKShtb2R1bGUpO1xuXHRyZXF1aXJlKCcuL3Bhc3N3b3JkLWNoZWNrLWRpcmVjdGl2ZS5qcycpKG1vZHVsZSk7XG5cdHJlcXVpcmUoJy4vcmVxdWlyZWQtdGV4dC1kaXJlY3RpdmUuanMnKShtb2R1bGUpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gIGFuZ3VsYXIubW9kdWxlKFwic2FtcGxlQXBwXCIpLmRpcmVjdGl2ZShcInBhc3N3b3JkVmVyaWZ5XCIsIGZ1bmN0aW9uKCkge1xuICAgICByZXR1cm4ge1xuICAgICAgICByZXF1aXJlOiBcIm5nTW9kZWxcIixcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICBwYXNzd29yZFZlcmlmeTogJz0nXG4gICAgICAgIH0sXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgICAgIHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIGNvbWJpbmVkO1xuXG4gICAgICAgICAgICAgIGlmIChzY29wZS5wYXNzd29yZFZlcmlmeSB8fCBjdHJsLiR2aWV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgY29tYmluZWQgPSBzY29wZS5wYXNzd29yZFZlcmlmeSArICdfJyArIGN0cmwuJHZpZXdWYWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gY29tYmluZWQ7XG4gICAgICAgICAgfSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBjdHJsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24odmlld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbiA9IHNjb3BlLnBhc3N3b3JkVmVyaWZ5O1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW4gIT09IHZpZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShcInBhc3N3b3JkVmVyaWZ5XCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eShcInBhc3N3b3JkVmVyaWZ5XCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmlld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgfVxuICAgICB9O1xuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICAndXNlIHN0cmljdCc7XG4gIGFuZ3VsYXIubW9kdWxlKFwic2FtcGxlQXBwXCIpLmRpcmVjdGl2ZSgndmFsaWRhdGVUZXh0JywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIFRFWFRfUkVHRVhQID0gLyhbQS1aYS16XSlcXHcrLztcblxuICAgIHJldHVybiB7XG4gICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxtLCBhdHRycywgY3RybCkge1xuXG4gICAgICAgICAgY3RybC4kdmFsaWRhdG9yc1snbWFuZGF0b3J5J10gPSBmdW5jdGlvbihtb2RlbFZhbHVlKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBjdHJsLiRpc0VtcHR5KG1vZGVsVmFsdWUpIHx8IFRFWFRfUkVHRVhQLnRlc3QobW9kZWxWYWx1ZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0cmVxdWlyZSgnLi9yZXF1ZXN0U2VydmljZS5qcycpKG1vZHVsZSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgdmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKFwicmVxdXNldFNlcnZpY2VcIiwgW10pO1xuICBtb2R1bGUuZmFjdG9yeShcInNlbmRSZXF1ZXN0XCIsIGZ1bmN0aW9uICgkaHR0cCkge1xuICAgICAgdmFyIGRhdGE7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIHNlbmQ6IGZ1bmN0aW9uKHVybCwgZGF0YSkge1xuICAgICAgICAgICAgICRodHRwLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgJHNjb3BlLlBvc3REYXRhUmVzcG9uc2UgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXR1czogMjAwIE9LJyk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5lcnJvcihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXR1czogNTAxJyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuICB9KTtcbn07XG4iXX0=
