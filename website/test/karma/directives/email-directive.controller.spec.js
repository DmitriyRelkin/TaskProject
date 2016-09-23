describe('directive email-validate', function() {
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
        '<input ng-model="emailInput" type="email" name="email" validate-email >' +
      '</form>'
    );
    $scope.model = { emailInput: null }
    $compile(element)($scope);
    form = $scope.form;
  }));

  describe('Full scan directive validate-email', function() {
    it('Should pass with correct email', function() {
      form.email.$setViewValue('t@t.co');
      $scope.$digest();
      expect(form.email.$valid).toBe(true);
    });
    it('Should not pass with incorrect email', function() {
      form.email.$setViewValue('t@t.c');
      $scope.$digest();
      expect(form.email.$valid).toBe(false);
    });
  });
});
