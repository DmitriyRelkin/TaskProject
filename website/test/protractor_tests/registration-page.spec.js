describe('Check RegistrationPage', function() {
  var title = element(by.css(".header-registration"));
  var name = element(by.model('vm.regData.name'));
  var email = element(by.model('vm.regData.email'));
  var password = element(by.model('vm.regData.password'));
  var passwordConfirm = element(by.model('vm.regData.password_verify'));
  var submit = element(by.css(".sendTest"));
  var params = {login: {user: 'Niko Belik',password: '123456', email: 'mail@mail.com'}}

  beforeEach(function() {
    browser.get('http://localhost:8000/#/reg');
  });

  it('Should have a title', function() {
    expect(title.getText()).toEqual('REGISTRATION FORM');
  });

  it('Filling out the form for registration', function() {
    name.sendKeys(params.login.user);
    email.sendKeys(params.login.email);
    password.sendKeys(params.login.password);
    passwordConfirm.sendKeys(params.login.password);
    submit.click().then(function() {
      expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/');
    });
  });

  it('Should not allow empty form for for registration', function() {
    browser.get('http://localhost:8000/#/reg');
    name.sendKeys(" ");
    email.sendKeys(" ");
    password.sendKeys(" ");
    passwordConfirm.sendKeys(" ");
    expect(submit.isEnabled()).toBeFalsy();
  });
});
