describe('Check header', function() {
  var headerLogo = element(by.css('.header-logo'));
  var linksHeader = element.all(by.css('.links-navigation li > a'));

  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  it('Check the header logo', function() {
    expect(headerLogo.getText()).toEqual('CONSULTING CO.');
  });

  it('The number of links in the cheder', function() {
    expect(linksHeader.count(5));
  });

  it('Сlicking on links header', function() {
    expect(linksHeader.get(4).click());
    expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/sign-in');
    expect(linksHeader.get(3).click());
    expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/reg');
    expect(linksHeader.get(2).click());
    expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/blog');
    expect(linksHeader.get(1).click());
    expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/contacts');
    expect(linksHeader.get(0).click());
    expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/');
  });

  it('Names on links header', function() {
    expect(linksHeader.get(0).getText()).toEqual('HOME');
    expect(linksHeader.get(1).getText()).toEqual('CONTACTS');
    expect(linksHeader.get(2).getText()).toEqual('BLOG');
    expect(linksHeader.get(3).getText()).toEqual('REGISTRATION');
    expect(linksHeader.get(4).getText()).toEqual('SIGN IN');
  });
});
