"use strict"; 
console.log("Module here!"); 

angular.module("app",["ngRoute"])
.config(($routeProvider) => {
  $routeProvider
    .when("/profile", {
      template: "<profile></profile>"
    })
    .when("/edit-profile", {
      template: "<edit-profile></edit-profile>"
    })
    .otherwise({ redirectTo: "/profile" });
});
