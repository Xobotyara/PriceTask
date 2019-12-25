"use strict";

document.addEventListener('DOMContentLoaded', function () {
   
    let services = document.querySelectorAll('.service'),
        serviceButtons = document.querySelectorAll('.select-label'),
        service,
        serviceButton,
        index;

    for (index = 0; index < services.length; index++){
        service = services[index];
        serviceButton = serviceButtons[index];
        service.addEventListener('click', clickService);
        serviceButton.addEventListener('click', clickService);
    }

    function clickService(event){
        this.parentElement.lastElementChild.classList.toggle('selected');
    }


});