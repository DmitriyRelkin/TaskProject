describe('Check HomePage', function() {
  var buttonSlide = element(by.css('.btn-slider'));
  var namesButtonSlide = element.all(by.binding('vm.slider.btnName'));
  var bannerButtonSlide = element.all(by.binding('vm.slider.btnBanner'));
  var headerGreeting = element(by.css('.header1-greeting-block'));
  var servicesBlocks = element.all(by.repeater('block in vm.serviceBlock'));
  var headerStrategyBlock = element(by.css('.heading-strategy-block'));
  var strategyBlock = element.all(by.repeater('list in vm.strategyBlock'));
  var headersFooterBlock = element.all(by.css('.header-footer-column'));
  var navigationFooter = element.all(by.css('.footer-navigation li > a'));
  var slider = element(by.css('.slider-view'));
  var sliderView = slider.element(by.css('img'));
  var linksSlider = element.all(by.repeater('photo in vm.photos'));

  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  it('Click on the links slider', function() {
    linksSlider.get(0).click().then(function() {
      expect(sliderView.getAttribute('src')).toEqual('http://localhost:8000/website/images/slide-1.jpg');
    });
    linksSlider.get(1).click().then(function() {
      expect(sliderView.getAttribute('src')).toEqual('http://localhost:8000/website/images/slide-2.jpg');
    });
    linksSlider.get(2).click().then(function() {
      expect(sliderView.getAttribute('src')).toEqual('http://localhost:8000/website/images/slide-3.jpg');
    });
    linksSlider.get(3).click().then(function() {
      expect(sliderView.getAttribute('src')).toEqual('http://localhost:8000/website/images/slide-4.jpg');
    });
  });

  it('Number use in presenting number of button slider', function() {
    expect(namesButtonSlide.count()).toEqual(2);
  });

  it('Number use in presenting number of banner button slider', function() {
    expect(bannerButtonSlide.count()).toEqual(2);
  });

  it('The number of links on the slider', function() {
    expect(linksSlider.count()).toEqual(4);
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

  it('Number links of navigation footer block', function() {
      expect(navigationFooter.count()).toEqual(5);
  });

  it('Click navigation link sign-in page on the footer', function() {
    browser.get('http://localhost:8000');
    navigationFooter.get(4).click().then(function() {
      expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/sign-in');
    });
  });

  it('Click navigation link registration page on the footer', function() {
    browser.get('http://localhost:8000');
    navigationFooter.get(3).click().then(function() {
      expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/reg');
    });
  });

  it('Click navigation link blog page on the footer', function() {
    browser.get('http://localhost:8000');
    navigationFooter.get(2).click().then(function() {
      expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/blog');
    });
  });

  it('Click navigation link contacts page on the footer', function() {
    browser.get('http://localhost:8000');
    navigationFooter.get(1).click().then(function() {
      expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/contacts');
    });
  });

  it('Click navigation link home page on the footer', function() {
    browser.get('http://localhost:8000');
    navigationFooter.get(0).click().then(function() {
      expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/');
    });
  });

  it('Names on links footer navigation', function() {
    expect(navigationFooter.get(0).getText()).toEqual('HOME');
    expect(navigationFooter.get(1).getText()).toEqual('CONTACTS');
    expect(navigationFooter.get(2).getText()).toEqual('BLOG');
    expect(navigationFooter.get(3).getText()).toEqual('REGISTRATION');
    expect(navigationFooter.get(4).getText()).toEqual('SIGN IN');
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
