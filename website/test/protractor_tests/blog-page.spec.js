// describe('Check BlogPage', function() {
//   var titles = element.all(by.css(".header-blog"));
//   var socialProp = element.all(by.css(".note-blog-property"));
//   var themeBlog = element.all(by.repeater('block in blogContent'));
//   var blogCategory = element.all(by.repeater('name in pollCategory'));
//   var meterProgress = element.all(by.repeater('meter in pollLevel'));
//
//   beforeEach(function() {
//     browser.get('http://localhost:8000/#/blog');
//   });
//
//   it("Have a titles in blog page",function () {
//     expect(titles.count()).toEqual(3);
//     expect(titles.get(0).getText()).toEqual('BLOG');
//     expect(titles.get(1).getText()).toEqual('CATEGORIES');
//     expect(titles.get(2).getText()).toEqual('POLL');
//   });
//
//   it("Have a social properties in blog theme",function () {
//     expect(socialProp.getText()).toEqual[ 'adminApril 29,2014136 view(s)2 comment(s)', 'adminApril 29,2014136 view(s)2 comment(s)', 'adminApril 29,2014136 view(s)2 comment(s)' ];
//   });
//
//   it("The number of theme in the blog content", function() {
//     expect(themeBlog.count()).toEqual(3);
//   })
//
//   it("Have a blog category in blog content", function() {
//     expect(blogCategory.count()).toEqual(10);
//   })
//
//   it("Name a blog category in blog content", function() {
//     expect(blogCategory.get(0).getText()).toEqual('Condimentum tellus tellus');
//     expect(blogCategory.get(1).getText()).toEqual('Condimentum tellus tellus');
//     expect(blogCategory.get(2).getText()).toEqual('Lorem ipsum dolor sit amet');
//     expect(blogCategory.get(3).getText()).toEqual('Lorem ipsum dolor sit amet');
//     expect(blogCategory.get(4).getText()).toEqual('Netus et malesuada fames');
//     expect(blogCategory.get(5).getText()).toEqual('Pellentesque habitant morbi');
//     expect(blogCategory.get(6).getText()).toEqual('Quisque viverra leo id tincidunt');
//     expect(blogCategory.get(7).getText()).toEqual('Tincidunt tellus id euismod');
//     expect(blogCategory.get(8).getText()).toEqual('Tristique senectus et');
//     expect(blogCategory.get(9).getText()).toEqual('Vestibulum ullamcorpermoles');
//   })
//
//   it("Have a meter progress in blog content", function() {
//     expect(meterProgress.count()).toEqual(4);
//   })
//
// });
