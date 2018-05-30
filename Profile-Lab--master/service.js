"use strict"; 
console.log("service!"); 

function ProfileService ($location) {
    let userProfile = {
        name:"Cora", 
        contact: "cora@gmail.com", 
        info:"I am a sweet puppy named Cora.", 
        bio:"This is my life!"  
    }; 

    const setUserProfile = (user) => {
        console.log(user);
        userProfile = user;
        $location.path("/profile");
      };
    
      const getUserProfile = () => {
        return userProfile;
        $location.path("/edit-profile");
      }
    
      return {
        setUserProfile,
        getUserProfile
      };

}



angular 
    .module("app")
    .factory("ProfileService", ProfileService); 





