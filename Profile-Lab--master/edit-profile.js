"use strict"
console.log("edit-profile present!"); 

const editProfile = {
    template: `
    <form class="user-form" ng-submit="$ctrl.showStuff($ctrl.user);">
       <h4>Use the form below to update your profile.</h4>
        <p class="titles">Name</p><input type="text" placeholder="Name" ng-model="$ctrl.user.name">
        <p class="titles">Contact</p><input type="text" placeholder="Contact" ng-model="$ctrl.user.contact">
        <p class="titles">Info</p><input type="text" placeholder="Info" ng-model="$ctrl.user.info">
        <p class="titles">Bio</p><textarea type="text" placeholder="bio" ng-model="$ctrl.user.bio"></textarea>
        <button>Update</button>
    </form>
    `, 
    controller: ["ProfileService", function(ProfileService) {
        const vm = this; 
        vm.showStuff = (user) => {
          ProfileService.setUserProfile(user); 
        }; 
    }] 
}; 


angular 
    .module("app")
    .component("editProfile", editProfile); 


/* 
The /edit-profile route displays a editProfile component where the user can update
their name, contact info and bio.

*/ 