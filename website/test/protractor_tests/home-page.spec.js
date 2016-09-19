describe('Check HomePage', function() {
  var buttonSlide = element(by.css('.btn-slider'));
  var linksSlider = element.all(by.repeater('photo in photos'));
  var navigationFooter = element.all(by.css('.navigation-footer-block'));

  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  it('Click on the button in slides', function() {
    expect(buttonSlide.click());
  });

  it('Click on the links slider to switch slides', function() {
    expect(linksSlider.click().get(0));
    expect(linksSlider.click().get(1));
    expect(linksSlider.click().get(2));
    expect(linksSlider.click().get(3));
  });

  it('Click in slides navigation footer block', function() {
    expect(navigationFooter.click());
  });

});
