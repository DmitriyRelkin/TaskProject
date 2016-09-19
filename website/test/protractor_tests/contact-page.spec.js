describe('Check ContactPage', function() {
  var title = element(by.css(".header-contacts"));

  beforeEach(function() {
    browser.get('http://localhost:8000/#/contacts');
  });

  it('Should have a title', function() {
    expect(title.getText()).toEqual('OUR LOCATION');
  });


});
