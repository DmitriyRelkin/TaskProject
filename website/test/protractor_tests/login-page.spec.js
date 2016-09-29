describe('Check SingInPage', function() {
  var title = element(by.css(".header-sig-in"));
  var name = element(by.model('vm.loginData.email'));
  var password = element(by.model('vm.loginData.pasword'));
  var submit = element(by.css(".sendTest"));
  var params = {login: {email: 'mail@mail.com',password: '123456'}}

  beforeEach(function() {
    browser.get('http://localhost:8000/#/sign-in');
  });

  it('Should have a title', function() {
    expect(title.getText()).toEqual('WELCOME');
  });

  it('Filling out the form for login', function() {
    name.sendKeys(params.login.email);
    password.sendKeys(params.login.password);
    submit.click().then(function() {
      expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/');
    });
  });

  it('Should not allow empty form for login', function() {
    browser.get('http://localhost:8000/#/sign-in');
    name.sendKeys(" ");
    password.sendKeys(" ");
    expect(submit.isEnabled()).toBeFalsy();
  });
});
