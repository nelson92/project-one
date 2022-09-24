const box1 = document.querySelector('#B1');
const box2 = document.querySelector('#B2');
const box3 = document.querySelector('#B3');
const box4 = document.querySelector('#B4');
const box5 = document.querySelector('#B5');
const box6 = document.querySelector('#B6');




const currAPI = "zaSmIPDUx3iAmelqolvF17hSHrG1zCsLzuTjxKenPwJmUnBC"
async function getCurr() {
    try {
        const apiUrl = `https://api.currentsapi.services/v1/latest-news?&apiKey=${currAPI}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch {
        console.log("error");
    }
}


let currStore = new Array();

function sortImage(val) {
    for(let i = 0; i < val.length; i++) {
        if(val.news[i].image != "None"){
            currStore[currStore.length] = val.news[i];
            //console.log(i)
        }
    }
}

let boxes = 6;
let currBox1 = 0;
let pageIndex = 6;


async function loadPage() {
    let val = await getCurr();
    console.log(val.news[0].image);
    for(let i = 0; i < val.news.length; i++) {
        if(val.news[i].image != "None"){
            currStore[currStore.length] = val.news[i];
            console.log(i)
        }
    }
    console.log(currStore);
    let extra = currStore.length % boxes;
    let totalPages = currStore.length - extra;
    console.log(totalPages);
    for(let i = 0; i < 6; i++) {
        if(i == 0) {
            box1.style.backgroundImage = `url(${currStore[0].image})`
        }
        if(i == 1) {
            box2.style.backgroundImage = `url(${currStore[1].image})`
        }
        if(i == 2) {
            box3.style.backgroundImage = `url(${currStore[2].image})`
        }
        if(i == 3) {
            box4.style.backgroundImage = `url(${currStore[3].image})`
        }
        if(i == 4) {
            box5.style.backgroundImage = `url(${currStore[4].image})`
        }
        if(i == 5) {
            box6.style.backgroundImage = `url(${currStore[5].image})`
        }
    }
}

loadPage();