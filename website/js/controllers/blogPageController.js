module.exports = function(module) {
  /**
  * @ngdoc controller
  * @name sampleApp:blogContentCtrl
  * @description
  * This is the blog content controller.
  *
  **/
  module.controller("blogContentCtrl", function($scope) {
    /**
    * @ngdoc property
    * @name blogContent
    * @description
    * It keeps the array, in which objects with links of pictures, headers, text content.
    *
    **/
    $scope.blogContent = [
      {depiction: "https://www.youtube.com/embed/2kodXWejuy0", type: "video", header:"YOUTUBE VIDEO", paragraph: "Praesent sit amet ligula in ante aliquam pulvinar ac sit amet magna. Sed ut nisi at neque faucibus vehicula ut scelerisque justo. Phasellus semper faucibus tellus in lobortis. Nam odio metus, lacinia nec tristique ut, rutrum non mi. Aliquam suscipit consequat nibh, vel egestas dolor interdum nec. Praesent mattis odio mi, at vulputate ligula varius sed. Nulla a nulla viverra, ullamcorper orci vitae, tempor felis. In tempus justo vel felis posuere, a hendrerit nisi tincidunt. Aenean lobortis luctus orci, vitae euismod purus imperdiet placerat."},
      {depiction: "website/images/img-7.jpg", type: "photo", header:"ETIAM A ODIO NEC MI CONVALLIS MALESUADA", paragraph: "Praesent sit amet ligula in ante aliquam pulvinar ac sit amet magna. Sed ut nisi at neque faucibus vehicula ut scelerisque justo. Phasellus semper faucibus tellus in lobortis. Nam odio metus, lacinia nec tristique ut, rutrum non mi. Aliquam suscipit consequat nibh, vel egestas dolor interdum nec. Praesent mattis odio mi, at vulputate ligula varius sed. Nulla a nulla viverra, ullamcorper orci vitae, tempor felis. In tempus justo vel felis posuere, a hendrerit nisi tincidunt. Aenean lobortis luctus orci, vitae euismod purus imperdiet placerat."},
      {depiction: "website/images/img-14.jpg", type: "photo", header:"NULLA NEC LIGULA RISUS", paragraph: "Praesent sit amet ligula in ante aliquam pulvinar ac sit amet magna. Sed ut nisi at neque faucibus vehicula ut scelerisque justo. Phasellus semper faucibus tellus in lobortis. Nam odio metus, lacinia nec tristique ut, rutrum non mi. Aliquam suscipit consequat nibh, vel egestas dolor interdum nec. Praesent mattis odio mi, at vulputate ligula varius sed. Nulla a nulla viverra, ullamcorper orci vitae, tempor felis. In tempus justo vel felis posuere, a hendrerit nisi tincidunt. Aenean lobortis luctus orci, vitae euismod purus imperdiet placerat."}
    ];
    /**
    * @ngdoc property
    * @name socialProperties
    * @description
    * It keeps the array, in which objects with links of text, and classes.
    *
    **/
    $scope.socialProperties = [
      {view: "admin", text: "admin"},
      {view: "date", text: "April 29,2014"},
      {view: "views", text: "136 view(s)"},
      {view: "comments", text: "2 comment(s)"}
    ];
    /**
    * @ngdoc property
    * @name pollCategory
    * @description
    * It keeps the array, in which objects with text category.
    *
    **/
    $scope.pollCategory = [
      {category: "Condimentum tellus tellus"},
      {category: "Condimentum tellus tellus"},
      {category: "Lorem ipsum dolor sit amet"},
      {category: "Lorem ipsum dolor sit amet"},
      {category: "Netus et malesuada fames"},
      {category: "Pellentesque habitant morbi"},
      {category: "Quisque viverra leo id tincidunt"},
      {category: "Tincidunt tellus id euismod"},
      {category: "Tristique senectus et"},
      {category: "Vestibulum ullamcorpermoles"}
    ];
    /**
    * @ngdoc property
    * @name pollLevel
    * @description
    * It keeps the array, parameters are stored for meters.
    *
    **/
    $scope.pollLevel = [
      {progress: "Super", percentage: 39, width: 39},
      {progress: "God", percentage: 31, width: 31},
      {progress: "Normal", percentage: 20, width: 20},
      {progress: "Bad", percentage: 11, width: 11}
    ];
    /**
    * @ngdoc property
    * @name btnBlog
    * @description
    * It keeps the array, in which objects with buttons names.
    *
    **/
    $scope.btnBlog = [{nameBtn: "READ MORE"},{nameBtn: "ADMIN'S BLOG"},{nameBtn: "2 COMMENTS"},{nameBtn: "LOG IN"}];
    /**
    * @ngdoc property
    * @name btnBlogNav
    * @description
    * It keeps the array, in which objects with buttons navigation names.
    *
    **/
    $scope.btnBlogNav = [{nameBtn: "1"},{nameBtn: "2"},{nameBtn: "LAST"},{nameBtn: "NEXT"}];

  });
};
