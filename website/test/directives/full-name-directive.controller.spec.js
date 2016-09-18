describe('directive fullname-validate', function() {
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
        '<input ng-model="fullNameInput" type="text" name="fullName" validate-fullname >' +
      '</form>'
    );
    $scope.model = { fullNameInput: null }
    $compile(element)($scope);
    form = $scope.form;
  }));

  describe('Full scan directive validate-fullname', function() {
    it('Should pass with correct full name', function() {
      form.fullName.$setViewValue('Din Vin');
      $scope.$digest();
      expect(form.fullName.$valid).toBe(true);
    });
    it('Should not pass with incorrect full name', function() {
      form.fullName.$setViewValue('vasia');
      $scope.$digest();
      expect(form.fullName.$valid).toBe(false);
    });
  });
});
