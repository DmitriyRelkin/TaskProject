describe('Check RegistrationPage', function() {
  var title = element(by.css(".header-sig-in"));
  var name = element(by.model('formData.login.name'));
  var password = element(by.model('formData.login.pasword'));
  var submit = element(by.css(".sendTest"));
  var params = {login: {user: 'Niko Belik',password: '123456'}}

  beforeEach(function() {
    browser.get('http://localhost:8000/#/sig-in');
  });

  it('Should have a title', function() {
    expect(title.getText()).toEqual('WELCOME');
  });

  it('Filling out the form for login', function() {
    expect(name.sendKeys(params.login.user));
    expect(password.sendKeys(params.login.password));
    expect(submit.click());
  });
});
