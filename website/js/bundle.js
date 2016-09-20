(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function() {
  "use strict";

  var config          = require('./config/initConfig.js');
  var initServices    = require('./services/initServices.js');
	var initControllers = require('./controllers/initControllers.js');
	var initDirectives  = require('./directives/initDirectives.js');
  var initFilters     = require('./filters/initFilters.js');

  var module = angular.module("sampleApp", [
    "ui.router",
    "ui.bootstrap",
    "cgNotify"
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
  initFilters(module);

  config(module);
}());

},{"./config/initConfig.js":2,"./controllers/initControllers.js":7,"./directives/initDirectives.js":13,"./filters/initFilters.js":17,"./services/initServices.js":19}],2:[function(require,module,exports){
module.exports = function(module) {
	require('./routerConfig.js')(module);
};

},{"./routerConfig.js":3}],3:[function(require,module,exports){
module.exports = function(module) {
  "use strict";
  module.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        /* HomePage */
        .state('home', {
            url: '/',
            templateUrl: 'website/templates/home.html'
        })
        /* ContactPage */
        .state('contacts', {
            url: '/contacts',
            templateUrl: 'website/templates/contacts.html'
        })
        /* BlogPage */
        .state('blog', {
            url: '/blog',
            templateUrl: 'website/templates/blog.html'
        })
        /* RegistrationPage */
        .state('reg', {
            url: '/reg',
            templateUrl: 'website/templates/registration.html'
        })
        /* AuthorizationPage */
        .state('sig-in', {
            url: '/sig-in',
            templateUrl: 'website/templates/sig-in.html'
        });
  });
};

},{}],4:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name sampleApp:blogContentCtrl
  * @description
  * This is the blog content controller.
  *
  **/
  module.controller("blogContentCtrl", function($scope) {
    /**
    * @ngdoc property
    * @name blogContent
    * @description
    * It keeps the array, in which objects with links of pictures, headers, text content.
    *
    **/
    $scope.blogContent = [
      {depiction: "https://www.youtube.com/embed/2kodXWejuy0", type: "video", header:"YOUTUBE VIDEO", paragraph: "Praesent sit amet ligula in ante aliquam pulvinar ac sit amet magna. Sed ut nisi at neque faucibus vehicula ut scelerisque justo. Phasellus semper faucibus tellus in lobortis. Nam odio metus, lacinia nec tristique ut, rutrum non mi. Aliquam suscipit consequat nibh, vel egestas dolor interdum nec. Praesent mattis odio mi, at vulputate ligula varius sed. Nulla a nulla viverra, ullamcorper orci vitae, tempor felis. In tempus justo vel felis posuere, a hendrerit nisi tincidunt. Aenean lobortis luctus orci, vitae euismod purus imperdiet placerat."},
      {depiction: "website/images/img-7.jpg", type: "photo", header:"ETIAM A ODIO NEC MI CONVALLIS MALESUADA", paragraph: "Praesent sit amet ligula in ante aliquam pulvinar ac sit amet magna. Sed ut nisi at neque faucibus vehicula ut scelerisque justo. Phasellus semper faucibus tellus in lobortis. Nam odio metus, lacinia nec tristique ut, rutrum non mi. Aliquam suscipit consequat nibh, vel egestas dolor interdum nec. Praesent mattis odio mi, at vulputate ligula varius sed. Nulla a nulla viverra, ullamcorper orci vitae, tempor felis. In tempus justo vel felis posuere, a hendrerit nisi tincidunt. Aenean lobortis luctus orci, vitae euismod purus imperdiet placerat."},
      {depiction: "website/images/img-14.jpg", type: "photo", header:"NULLA NEC LIGULA RISUS", paragraph: "Praesent sit amet ligula in ante aliquam pulvinar ac sit amet magna. Sed ut nisi at neque faucibus vehicula ut scelerisque justo. Phasellus semper faucibus tellus in lobortis. Nam odio metus, lacinia nec tristique ut, rutrum non mi. Aliquam suscipit consequat nibh, vel egestas dolor interdum nec. Praesent mattis odio mi, at vulputate ligula varius sed. Nulla a nulla viverra, ullamcorper orci vitae, tempor felis. In tempus justo vel felis posuere, a hendrerit nisi tincidunt. Aenean lobortis luctus orci, vitae euismod purus imperdiet placerat."}
    ];
    /**
    * @ngdoc property
    * @name pollCategory
    * @description
    * It keeps the array, in which objects with text category.
    *
    **/
    $scope.pollCategory = [
      {category: "Condimentum tellus tellus"},
      {category: "Condimentum tellus tellus"},
      {category: "Lorem ipsum dolor sit amet"},
      {category: "Lorem ipsum dolor sit amet"},
      {category: "Netus et malesuada fames"},
      {category: "Pellentesque habitant morbi"},
      {category: "Quisque viverra leo id tincidunt"},
      {category: "Tincidunt tellus id euismod"},
      {category: "Tristique senectus et"},
      {category: "Vestibulum ullamcorpermoles"}
    ];
    /**
    * @ngdoc property
    * @name pollLevel
    * @description
    * It keeps the array, parameters are stored for meters.
    *
    **/
    $scope.pollLevel = [
      {progress: "Super", percentage: 39, width: 39},
      {progress: "God", percentage: 31, width: 31},
      {progress: "Normal", percentage: 20, width: 20},
      {progress: "Bad", percentage: 11, width: 11}
    ];
    /**
    * @ngdoc property
    * @name btnBlog
    * @description
    * It keeps the array, in which objects with buttons names.
    *
    **/
    $scope.btnBlog = [{nameBtn: "READ MORE"},{nameBtn: "ADMIN'S BLOG"},{nameBtn: "2 COMMENTS"},{nameBtn: "LOG IN"}];
    /**
    * @ngdoc property
    * @name btnBlogNav
    * @description
    * It keeps the array, in which objects with buttons navigation names.
    *
    **/
    $scope.btnBlogNav = [{nameBtn: "1"},{nameBtn: "2"},{nameBtn: "LAST"},{nameBtn: "NEXT"}];

  });
};

},{}],5:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name sampleApp:contactPageCtrl
  * @description
  * This is the contact content controller.
  *
  **/
  module.controller("contactPageCtrl", function($scope, sendMessageData, notify, $state) {
    /**
    * @ngdoc function
    * @name sendDataRegistration
    * @description
    * This function send data, entered by the user in the form contact-message.
    *
    * @param {Object} data user entered by user in the form.
    *
    **/
    $scope.sendContactData = function (data) {
      /**
      * @ngdoc property
      * @name spinnerClass
      * @description
      * This property holds the value for ng-class in the form
      **/
      $scope.spinnerClass = "loading";
      /**
      * @ngdoc service
      * @name sendMessageData
      * @description
      * This is service for to send post data
      **/
      sendMessageData.sendMessage(data).then(function () {
        $state.go("home");
      },function () {
        notify({ message:'An error occurred on the server!', duration: '2000', position: "center", classes: "alert-danger"});
      });
       notify({ message:'Your message has been successfully sent', duration: '2000', position: "center", classes: "alert-success"});
    }
  });
};

},{}],6:[function(require,module,exports){
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
    $interval(function() {
      $scope.counter++;
      $scope.photoSrc = $scope.photos[$scope.counter];
      $scope.btnSrc = $scope.photos[$scope.counter];
      $scope.btnTitle = $scope.photos[$scope.counter];
      for(var i = 0; i < $scope.photos.length; i++) {
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

},{}],7:[function(require,module,exports){
module.exports = function(module) {
	require('./homePageController.js')(module);
	require('./contactsPageController.js')(module);
	require('./blogPageController.js')(module);
	require('./registrationPageController.js')(module);
	require('./loginPageController.js')(module);
};

},{"./blogPageController.js":4,"./contactsPageController.js":5,"./homePageController.js":6,"./loginPageController.js":8,"./registrationPageController.js":9}],8:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name sampleApp:loginCtrl
  * @description
  * This is the login page controller
  *
  **/
  module.controller("loginCtrl", function ($scope, authService, $state) {
    /**
    * @ngdoc function
    * @name sendDataLogin
    * @description
    * This function send data, entered by the user in the form login.
    *
    * @param {Object} data user entered by user in the form.
    *
    **/
    $scope.sendDataLogin = function (data) {
      /**
      * @ngdoc property
      * @name spinnerClass
      * @description
      * This property holds the value for ng-class in the form
      **/
      $scope.spinnerClass = "loading";
      /**
      * @ngdoc service
      * @name authService
      * @description
      * This is service for to send post data
      **/
      authService.sendLogin(data).then(function () {
        $state.go("home");
      },function () {
        notify({ message:'An error occurred on the server!', duration: '2000', position: "center", classes: "alert-danger"});
      });
    }
  });
};

},{}],9:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name sampleApp:registrationContentCtrl
  * @description
  * This is the registration content controller.
  *
  **/
  module.controller("registrationContentCtrl", function($scope, authService, $state) {
    /**
    * @ngdoc function
    * @name sendDataRegistration
    * @description
    * This function send data, entered by the user in the form registration.
    *
    * @param {Object} data user entered by user in the form.
    *
    **/
    $scope.sendDataRegistration = function (data) {
      /**
      * @ngdoc property
      * @name spinnerClass
      * @description
      * This property holds the value for ng-class in the form
      **/
      $scope.spinnerClass = "loading";
      /**
      * @ngdoc service
      * @name authService
      * @description
      * This is service for to send post data
      **/
      authService.sendRegistration(data).then(function () {
        $state.go("home");
      },function () {
        notify({ message:'An error occurred on the server!', duration: '2000', position: "center", classes: "alert-danger"});
      });
    }
  });
};

},{}],10:[function(require,module,exports){
module.exports = function(module) {
	/**
  * @ngdoc directive
  * @name sampleApp:backToTop
  * @restrict A
  *	@description
	*	This is directive for scroll to top button
	*
  **/
	'use strict';
	module
	.directive('backToTop', function() {
		return {
			restrict: 'A',

			link: scrollTop
		};
		/**
		* @ngdoc function
		* @name scrollTop
		*
		*	@description
		*	This is function for scroll to top button
		*
		* @param ($scope, element)  house element to which it is connected directive
		*
		*	@return zero value in the property.
		**/
		function scrollTop ($scope, element) {
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
	});
};

},{}],11:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name sampleApp:validateEmail
  * @restrict A
  *	@description
  *	This is directive for email validation
  *
  **/
  'use strict';
  module
	.directive('validateEmail', function() {

    var EMAIL_REGEXP = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    return {
      restrict: 'A',
      require: 'ngModel',
      link: emailInspection
    };
    /**
		* @ngdoc function
		* @name emailInspection
		*
		* @param ($scope, elm, attrs, ctrl)  house element to which it is connected directive, elements belonging to the attribute, and ngModelController
		*
		*	@description
		*	This is function for email validation.
		*
    * @return {Bolean}
		**/
    function emailInspection(scope, elm, attrs, ctrl) {
      /* only apply the validator if ngModel is present and Angular has added the email validator */
      if (ctrl && ctrl.$validators.email) {
        /* this will overwrite the default Angular email validator */
        ctrl.$validators.email = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  });
}

},{}],12:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name sampleApp:validateFullname
  * @restrict A
  *	@description
  *	This is directive for validation full name
  *
  **/
  'use strict';
  module
	.directive('validateFullname', function() {

    var FULLNAME_REGEXP = /^[A-Z][a-zA-Z']+[ ]+[A-Z][a-zA-Z'\- ]*$/;

    return {
      restrict: 'A',
      require: 'ngModel',
      link: fullNameInspection
    };
    /**
		* @ngdoc function
		* @name fullNameInspection
		*
		* @param ($scope, elm, attrs, ctrl)  house element to which it is connected directive, elements belonging to the attribute, and ngModelController
		*
		*	@description
		*	This is function for fullname validation.
		*
		**/
    function fullNameInspection(scope, elm, attrs, ctrl) {
      ctrl.$validators['fullname'] = function(modelValue) {
        return ctrl.$isEmpty(modelValue) || FULLNAME_REGEXP.test(modelValue);
      };
    }
  });
};

},{}],13:[function(require,module,exports){
module.exports = function(module) {
	require('./email-directive.js')(module);
	require('./fullName-directive.js')(module);
	require('./password-check-directive.js')(module);
	require('./required-text-directive.js')(module);
	require('./backToTop-directive.js')(module);
};

},{"./backToTop-directive.js":10,"./email-directive.js":11,"./fullName-directive.js":12,"./password-check-directive.js":14,"./required-text-directive.js":15}],14:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name sampleApp:passwordVerify
  *
  *	@description
  *	This is directive for validation confirm password
  *
  * @scope The data for which are taken through the two-way binding
  **/
  'use strict';
  module
  .directive("passwordVerify", function() {
    return {
        require: "ngModel",
        scope: {
          passwordVerify: '='
        },
        link: passwordCheck
     };
     /**
   		* @ngdoc function
   		* @name passwordCheck
   		*
   		* @param ($scope, elm, attrs, ctrl)  house element to which it is connected directive, elements belonging to the attribute, and ngModelController
   		*
   		*	@description
   		*	This is function for password confirm inspection.
   		*
      * @return {Bolean}
   		**/
      function passwordCheck(scope, element, attrs, ctrl) {
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
  });
};

},{}],15:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc directive
  * @name sampleApp:validateText
  * @restrict A
  *	@description
  *	This is directive for validation mandatory text input
  *
  **/
  'use strict';
  module
  .directive('validateText', function() {
    var TEXT_REGEXP = /([A-Za-z])\w+/;

    return {
      restrict: 'A',
      require: 'ngModel',
      link: requiredText
      };
      /**
  		* @ngdoc function
  		* @name requiredText
  		*
  		* @param ($scope, elm, attrs, ctrl)  house element to which it is connected directive, elements belonging to the attribute, and ngModelController
  		*
  		*	@description
  		*	This is function for text validation.
  		*
      * @return {Bolean}
  		**/
      function requiredText(scope, elm, attrs, ctrl) {
        ctrl.$validators['mandatory'] = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || TEXT_REGEXP.test(modelValue);
        };
      }
  });
};

},{}],16:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc filter
  * @name sampleApp:trustAsResourceUrl
  * @restrict A
  *	@description
  *	This is filter for trust As resource Url, used in iframe.
  *
  * @param $sce - garter for the safe context
  **/
  module
  .filter('trustAsResourceUrl', ['$sce', function($sce) {
    /**
    * @ngdoc function
    *
    * @param (url) for which the security context garter
    *
    *	@description
    *	This is function for email validation.
    *
    * @return {Bolean}
    **/
  return function(val) {
      return $sce.trustAsResourceUrl(val);
  };
  }])
};

},{}],17:[function(require,module,exports){
module.exports = function(module) {
	require('./iframeFilter.js')(module);
};

},{"./iframeFilter.js":16}],18:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc service
  * @name sampleApp:authService
  *
  * @description
  *	This is service for to send post data, come to the registration page and login.
  *
  **/
  module.factory("authService", function ($http) {
      var data;
      return {
          sendRegistration: sendRegistration,
          sendLogin: sendLogin
      };
      /**
      *
      * @ngdoc function
      * @name sendRegistration
      * @description
      * This function for to send post data, entered by the user in the form registration.
      *
      * @param {Object} data user entered by user in the form.
      *
      **/
      function sendRegistration(data) {
        return $http.post("/reg", data);
      }
      /**
      * @ngdoc function
      * @name sendLogin
      * @description
      * This function for to send post data, entered by the user in the form login.
      *
      * @param {Object} data user entered by user in the form.
      *
      **/
      function sendLogin(data) {
        return $http.post("/sig-in", data);
      }
  });
};

},{}],19:[function(require,module,exports){
module.exports = function(module) {
	require('./authService.js')(module);
	require('./sendMessageService.js')(module);
};

},{"./authService.js":18,"./sendMessageService.js":20}],20:[function(require,module,exports){
module.exports = function(module) {
  /**
  * @ngdoc service
  * @name sampleApp:sendMessageData
  *
  * @description
  *	This is service for to send post data, come to the contact page
  *
  **/
  module.factory("sendMessageData", function ($http) {
      var data;
      return {
          sendMessage: sendMessage
      };
      /**
      * @ngdoc function
      * @name sendRegistration
      * @description
      * This function for to send post data, entered by the user in the form contact-message.
      *
      * @param {Object} data user entered by user in the form.
      *
      **/
      function sendMessage(data) {
        return  $http.post("/contacts", data);
      }
  });
};

},{}]},{},[1])