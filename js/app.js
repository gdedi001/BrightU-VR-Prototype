'use strict';
var brightHouse = document.querySelector("#brightHouse"),
    cloud = document.querySelector("#cloudHolder"),
    internet = document.querySelector("#internetHolder"),
    security = document.querySelector("#securityHolder"),
    firewall = document.querySelector("#firewallHolder");

//document.querySelector('#cloudShadow').addEventListener('click', function(){
//    this.setAttribute('position', '0.00 5.00 -5.00');
//    console.log('test complete');
//});


// Trigger Cloud Server model to appear
cloud.addEventListener('click', function(){
    document.querySelector('#yoyo').emit('move');
    console.log('testing!');
});

// Trigger an event to begin fading.
//documet.querySelector('#test').addEventListener('click', function(){
//    document.querySelector('#fading-cube').emit('fade');
//});
