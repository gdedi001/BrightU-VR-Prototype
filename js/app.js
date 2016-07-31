'use strict';
var brightHouse = document.querySelector("#brightHouse"),
    cloud = document.querySelector("#cloudHolder"),
    internet = document.querySelector("#internetHolder"),
    security = document.querySelector("#securityHolder"),
    firewall = document.querySelector("#firewallHolder"),
    cloudExit = document.querySelector("#exit");

//document.querySelector('#cloudShadow').addEventListener('click', function(){
//    this.setAttribute('position', '0.00 5.00 -5.00');
//    console.log('test complete');
//});

function cloudActivate(){
    document.querySelector('#cloud-yoyo').emit('yoyo');
    document.querySelector('#cloudTextFade').emit('fade');
}


// Trigger Cloud Server model to appear
cloud.addEventListener('click', cloudActivate);
cloudExit.addEventListener('click', cloudActivate);

// Trigger an event to begin fading.
//documet.querySelector('#test').addEventListener('click', function(){
//    document.querySelector('#fading-cube').emit('fade');
//});
