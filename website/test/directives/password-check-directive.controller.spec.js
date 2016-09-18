describe('directive password-check', function() {
  var $rootScope,
      $scope,
      $httpBackend,
      $compile,
      element,
      form;
  beforeEach(module('sampleApp'));
  beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
		$httpBackend.whenGET(/templates.*/).respond(200, '');
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $compile = _$compile_;
    element = angular.element(
      '<form name="form">' +
        '<input name="password" ng-model="password" type="password" ng-minlength="6">' +
        '<input name="confirm_password" ng-model="password_verify" type="password" ng-minlength="6" password-verify="password">' +
      '</form>'
    );
    $scope.model = {
      password: null,
      password_verify: null
    }
    $compile(element)($scope);
    form = $scope.form;
  }));

  describe('Full scan directive password-check', function() {
    it('Should pass with correct password', function() {
      form.password.$setViewValue('123456');
      form.confirm_password.$setViewValue('123456');
      $scope.$digest();
      expect(form.$valid).toBe(true);
    });
    it('Should not pass with incorrect password', function() {
      form.password.$setViewValue('123456');
      form.confirm_password.$setViewValue('654321');
      $scope.$digest();
      expect(form.$valid).toBe(false);
    });
  });
});
