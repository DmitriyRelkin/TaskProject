describe('Check ContactPage', function() {
  var title = element(by.css(".header-contacts"));
  var columsNames = element.all(by.css(".article-contacts"));
  var name = element(by.model('formData.contact.name') );
  var email = element(by.model('formData.contact.email') );
  var subject = element(by.model('formData.contact.subject') );
  var message = element(by.model('formData.contact.message') );
  var submit = element(by.css(".sendTest"));
  var params = {login: {user: 'Niko Belik',password: '123456', email: 'mail@mail.com', subject: 'subject', message: 'message'}}

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
    expect(name.sendKeys(params.login.user));
    expect(email.sendKeys(params.login.email));
    expect(subject.sendKeys(params.login.subject));
    expect(message.sendKeys(params.login.message));
    expect(submit.click());
  });
});
