'use strict';
var brightHouse = document.querySelector("#brightHouse"),
    cloud = document.querySelector("#cloudHolder"),
    internet = document.querySelector("#internetHolder"),
    security = document.querySelector("#securityHolder"),
    firewall = document.querySelector("#firewallHolder"),
    cloudExit = document.querySelector("#exit");


function cloudActivate(){
    document.querySelector('#cloud-yoyo').emit('yoyo');
    document.querySelector('#cloudTextFade').emit('fade');
}


// Trigger Cloud Server model to appear
cloud.addEventListener('click', cloudActivate);
cloudExit.addEventListener('click', cloudActivate);

