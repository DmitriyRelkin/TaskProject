describe('Check ContactPage', function() {
  var title = element(by.css(".header-contacts"));
  var columsNames = element.all(by.css(".article-contacts"));
  var name = element(by.model('vm.contactData.name') );
  var email = element(by.model('vm.contactData.email') );
  var subject = element(by.model('vm.contactData.subject') );
  var message = element(by.model('vm.contactData.message') );
  var submit = element(by.css(".sendTest"));
  var params = {login: {user: 'Niko Belik',password: '123456', email: 'mail@mail.com', subject: 'subject', message: 'message'}}
  var EC = protractor.ExpectedConditions;

  beforeEach(function() {
    browser.get('http://localhost:8000/#/contacts');
  });

  it('Should have a title', function() {
    expect(title.getText()).toEqual('OUR LOCATION');
  });

  it('Names of the colums in ContactPage', function() {
    expect(columsNames.count()).toEqual(2);
    expect(columsNames.get(0).getText()).toEqual('CONTACT FORM');
    expect(columsNames.get(1).getText()).toEqual('CONTACT INFORMATION');
  });

  it('Filling out the form for sending messages', function() {
    name.sendKeys(params.login.user);
    email.sendKeys(params.login.email);
    subject.sendKeys(params.login.subject);
    message.sendKeys(params.login.message);
    submit.click().then(function() {
      browser.wait(EC.visibilityOf($('.cg-notify-message')), 3000);
      expect(name.getAttribute('value')).toBe('');
      expect(email.getAttribute('value')).toBe('');
      expect(subject.getAttribute('value')).toBe('');
      expect(message.getAttribute('value')).toBe('');
    });
  });

  it('Should not allow empty form for sending messages', function() {
    name.sendKeys(" ");
    email.sendKeys(" ");
    subject.sendKeys(" ");
    message.sendKeys(" ");
    expect(submit.isEnabled()).toBeFalsy();
  });
});
