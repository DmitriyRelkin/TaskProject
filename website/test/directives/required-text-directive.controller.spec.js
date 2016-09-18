describe('directive requiredText-validate', function() {
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
        '<input ng-model="textInput" type="text" name="requiredText" validate-text>' +
      '</form>'
    );
    $scope.model = { textInput: null }
    $compile(element)($scope);
    form = $scope.form;
  }));

  describe('Full Scan Directive validate-requiredText', function() {
    it('should pass with correct requiredText', function() {
      form.requiredText.$setViewValue('Word');
      $scope.$digest();
      expect(form.requiredText.$valid).toBe(true);
    });
    it('should not pass with incorrect requiredText', function() {
      form.requiredText.$setViewValue('a');
      $scope.$digest();
      expect(form.requiredText.$valid).toBe(false);
    });
  });
});
