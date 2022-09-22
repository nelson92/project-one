let toggleNavStatus =  false;

let toggleNav = function() {
    let getS = document.querySelector('.S');
    let getSL = document.querySelector('.S-L');
    let getSLIS = document.querySelector('.S-L-I-S');
    let getSLIA = document.querySelectorAll('.S-L-I-A');

    //False
    if (toggleNavStatus == false) {
        getSL.style.visibility = "visible";
        getS.style.width = "272px";
        getSLIS.style.opacity = "0.5";


        for (let i = 0; i < getSLIA.length; i++) {
            getSLIA[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }


    //True
    else if (toggleNavStatus == true) {
        getSL.style.visibility = "visible";
        getS.style.width = "60px";
        getSLIS.style.opacity = "0";

        
        for (let i = 0; i < getSLIA.length; i++) {
            getSLIA[i].style.opacity = "0";
        }

        getSL.style.visibility = "visible";
        toggleNavStatus = false;
    }
}