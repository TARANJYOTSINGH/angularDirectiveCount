describe('Directive: irCount', function() {
  var $scope, $compile, element;

  beforeEach(module('app'));
  beforeEach(inject(function($rootScope, _$compile_) {

    $scope = $rootScope.$new(),
      $compile = _$compile_;
    $scope.number = 8;
    element = $compile('<ir-count count="number"></ir-count>')($scope);

    $scope.$digest()
  }));

  describe('when page compiles the perogative directive', function() {

    it('display More box button', function() {
      expect(element.html()).toContain('More Box');
    });
    it('display More box button', function() {
      expect(element.html()).toContain('Less Box');
    });

    it('display divs depending on count variable of main controller', function() {
      var testdiv = element.find("p");
      expect(testdiv.length).toBe(8);
    });

    it('More Box button should add the box', function() {
      var buttons = element.find('button')
      var testdivs_beforeclick = element.find("p").length;
      buttons.eq(1)[0].click()
      $scope.$digest()
      var testdivs_afterclick = element.find("p").length;
      expect(testdivs_beforeclick - 1).toBe(testdivs_afterclick);
    });

    it('More Box button should add the box', function() {
      var buttons = element.find('button')
      var testdivs_beforeclick = element.find("p").length;
      buttons.eq(0)[0].click()
      $scope.$digest()
      var testdivs_afterclick = element.find("p").length;
      expect(testdivs_beforeclick + 1).toBe(testdivs_afterclick);
    });

  });
});