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
