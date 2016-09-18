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
        '<input ng-model="emailInput" name="email" validate-email >' +
      '</form>'
    );
    $scope.model = { emailInput: null }
    $compile(element)($scope);
    form = $scope.form;
  }));

  // describe('validateEmail', function() {
    it('should pass with correct email', function() {
      // form.email.$setViewValue('mail@mail.com');
      form.email.$setViewValue('ljf');
      $scope.$digest();
      // expect($scope.model.email).toEqual('mail@mail.com');
      console.log(JSON.stringify($scope.emailInput),"999999")
      expect(form.email.$valid).toBe(true);
      // expect(element).toBeDefined();
    });
    // it('should not pass with incorrect email', function() {
    //   form.email.$setViewValue('a');
    //   $scope.$digest();
    //   expect($scope.model.email).toBeUndefined();
    //   expect(form.email.$valid).toBe(false);
    // });
  // });
});
