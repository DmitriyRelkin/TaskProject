// describe('Check header', function() {
//   var headerLogo = element(by.css('.header-logo'));
//   var linksHeader = element.all(by.css('.links-navigation'));
//   var inputSearch = element(by.css('.search-header-input'));
//
//   beforeEach(function() {
//     browser.get('http://localhost:8000');
//   });
//
//   it('Check the header logo', function() {
//     expect(headerLogo.getText()).toEqual('CONSULTING CO.');
//   });
//
//   it('The number of links in the cheder', function() {
//     expect(linksHeader.count(5));
//   });
//
//   it('Сlicking on links', function() {
//     expect(linksHeader.click());
//   });
//
//   it('Names on links', function() {
//     // expect(linksHeader.getText().get(0)).toEqual('HOME ');
//     // expect(linksHeader.get(1).element(by.tagName('a')).getText()).toEqual('CONTACTS');
//   });
//
//
//   it('Check input in the search field', function() {
//     expect(inputSearch.sendKeys('Search'));
//   });
//
// });
