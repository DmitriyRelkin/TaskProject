describe('Check HomePage', function() {
  var buttonSlide = element(by.css('.btn-slider'));
  var namesButtonSlide = element.all(by.binding('btnSrc.btnName'));
  var bannerButtonSlide = element.all(by.binding('btnTitle.btnBanner'));
  var linksSlider = element.all(by.repeater('photo in photos'));
  var headerGreeting = element(by.css('.header1-greeting-block'));
  var servicesBlocks = element.all(by.repeater('block in serviceBlock'));
  var headerStrategyBlock = element(by.css('.heading-strategy-block'));
  var strategyBlock = element.all(by.repeater('list in strategyBlock'));

  var headersFooterBlock = element.all(by.css('.header-footer-column'));

  var navigationFooter = element.all(by.css('.navigation-footer-block'));

  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  it('Click on the button in slides', function() {
    expect(buttonSlide.click());
  });

  it('Number use in presenting number of button slider', function() {
    expect(namesButtonSlide.count()).toEqual(2);
  });

  it('Number use in presenting number of banner button slider', function() {
    expect(bannerButtonSlide.count()).toEqual(2);
  });

  it('Click on the links slider to switch slides', function() {
    expect(linksSlider.click().get(0));
    expect(linksSlider.click().get(1));
    expect(linksSlider.click().get(2));
    expect(linksSlider.click().get(3));
  });

  it('Have a title greeting block', function() {
    expect(headerGreeting.getText()).toEqual('WELCOME TO OUR COMPANY!');
  });

  it('Number of service units', function() {
    expect(servicesBlocks.count()).toEqual(6);
  });

  it('Names of service units', function() {
    expect(servicesBlocks.get(0).element(by.tagName('h3')).getText()).toEqual('BUSINESS CONSULTING');
    expect(servicesBlocks.get(1).element(by.tagName('h3')).getText()).toEqual('ENTERPRISE APPLICATION');
    expect(servicesBlocks.get(2).element(by.tagName('h3')).getText()).toEqual('NEW STRATEGY');
    expect(servicesBlocks.get(3).element(by.tagName('h3')).getText()).toEqual('IT MANAGEMENT');
    expect(servicesBlocks.get(4).element(by.tagName('h3')).getText()).toEqual('OUTSOURSING');
    expect(servicesBlocks.get(5).element(by.tagName('h3')).getText()).toEqual('SALES & MARKETING');
  });

  it('Have a title strategy block', function() {
    expect(headerStrategyBlock.getText()).toEqual('STRATEGY IS NOTHING WITHOUT EXECUTION');
  });

  it('Number of strategy units', function() {
    expect(strategyBlock.count()).toEqual(3);
  });

  it('Names of strategy units', function() {
    expect(strategyBlock.get(0).element(by.tagName('h5')).getText()).toEqual('QUESTIONS TO ASK:');
    expect(strategyBlock.get(1).element(by.tagName('h5')).getText()).toEqual("THE COMPANY'S ROLE:");
    expect(strategyBlock.get(2).element(by.tagName('h5')).getText()).toEqual('OUR KEY OFFERS:');
  });

  it('Click in slides navigation footer block', function() {
    expect(navigationFooter.click());
  });

  it('Number headers of footer block', function() {
      expect(headersFooterBlock.count()).toEqual(4);
  });

  it('Headers names of footer block', function() {
    expect(headersFooterBlock.get(0).getText()).toEqual('NAVIGATION');
    expect(headersFooterBlock.get(1).getText()).toEqual('NEWS');
    expect(headersFooterBlock.get(2).getText()).toEqual('GET IN TOUCH');
    expect(headersFooterBlock.get(3).getText()).toEqual('CONNECT ONLINE');
  });

});
