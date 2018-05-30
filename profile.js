"use strict"; 
console.log("profile present!"); 

const profile = {
    template: `
    <section class="container">
        <section id="header"> 
            <img src="puppy.png" alt="puppy"/>
        </section>
        <h2>Name: {{ $ctrl.showStuff.name }} </h2>
        <p class="contact">Contact: {{ $ctrl.showStuff.contact }} </p>
        <p>Info: {{ $ctrl.showStuff.info }} </p>
        <p>Bio: {{ $ctrl.showStuff.bio }} </p>
        <button ng-click="$ctrl.showStuff($ctrl.user)">Edit</button>
    </section>
    `, 
   controller: ["ProfileService", function(ProfileService) {
       const vm = this; 
       vm.showStuff = ProfileService.getUserProfile(); 
   }] 
}; 


angular 
    .module("app") 
    .component("profile", profile); 

/* 

The /profile route displays a userProfile component, which includes name, 
contact info,

*/ 