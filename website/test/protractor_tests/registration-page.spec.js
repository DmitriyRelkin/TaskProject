describe('Check RegistrationPage', function() {
  var title = element(by.css(".header-registration"));
  var name = element(by.model('formData.user.name'));
  var email = element(by.model('formData.user.email'));
  var password = element(by.model('formData.user.password'));
  var passwordConfirm = element(by.model('user.password_verify'));
  var submit = element(by.css(".sendTest"));
  var params = {login: {user: 'Niko Belik',password: '123456', email: 'mail@mail.com'}}

  beforeEach(function() {
    browser.get('http://localhost:8000/#/reg');
  });

  it('Should have a title', function() {
    expect(title.getText()).toEqual('REGISTRATION FORM');
  });

  it('Filling out the form for registration', function() {
    expect(name.sendKeys(params.login.user));
    expect(email.sendKeys(params.login.email));
    expect(password.sendKeys(params.login.password));
    expect(passwordConfirm.sendKeys(params.login.password));
    expect(submit.click());
  });
});
