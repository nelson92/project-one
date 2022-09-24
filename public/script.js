const box1 = document.querySelector('#B1');
const box2 = document.querySelector('#B2');
const box3 = document.querySelector('#B3');
const box4 = document.querySelector('#B4');
const box5 = document.querySelector('#B5');
const box6 = document.querySelector('#B6');
const T1 = document.querySelector('#B1T');
const T2 = document.querySelector('#B2T');
const T3 = document.querySelector('#B3T');
const T4 = document.querySelector('#B4T');
const T5 = document.querySelector('#B5T');
const T6 = document.querySelector('#B6T');


const btnBox = document.querySelector('#P');
const preBtn =  document.querySelector('#P-P');
const nextBtn =  document.querySelector('#P-N');



let passed =  false;



const currAPI = "zaSmIPDUx3iAmelqolvF17hSHrG1zCsLzuTjxKenPwJmUnBC"
async function getCurr() {
    try {
        const apiUrl = `https://api.currentsapi.services/v1/latest-news?&apiKey=${currAPI}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        passed = true;
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
let currPage = 1;
//if next page is clicked add 6 to the pageIndex
let pageIndex = 0;
//Total pages is set in the load function to count how many pages can be loaded
let totalPages;
let extra;


function setPage() {
    for(let i = 0; i < 6; i++) {
        if(i == 0) {
            box1.style.backgroundImage = `url(${currStore[0 + pageIndex].image})`
            T1.innerText = `${currStore[0 + pageIndex].title}`
        }
        if(i == 1) {
            box2.style.backgroundImage = `url(${currStore[1 + pageIndex].image})`
            T2.innerText = `${currStore[1 + pageIndex].title}`
        }
        if(i == 2) {
            box3.style.backgroundImage = `url(${currStore[2 + pageIndex].image})`
            T3.innerText = `${currStore[2 + pageIndex].title}`
        }
        if(i == 3) {
            box4.style.backgroundImage = `url(${currStore[3 + pageIndex].image})`
            T4.innerText = `${currStore[3 + pageIndex].title}`
        }
        if(i == 4) {
            box5.style.backgroundImage = `url(${currStore[4 + pageIndex].image})`
            T5.innerText = `${currStore[4 + pageIndex].title}`
        }
        if(i == 5) {
            box6.style.backgroundImage = `url(${currStore[5 + pageIndex].image})`
            T6.innerText = `${currStore[5 + pageIndex].title}`
        }
    }
}


async function loadPage() {
    let val = await getCurr();
    if (passed == true) {
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
        }
        console.log(val.news[0].image);
        for(let i = 0; i < val.news.length; i++) {
            if(val.news[i].image != "None"){
                currStore[currStore.length] = val.news[i];
                //console.log(i)
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        console.log(totalPages);
        setPage();
    }
}

loadPage();



nextBtn.addEventListener('click', function() {
    if(currPage < totalPages) {
        currPage += 1;
        pageIndex += 6;
        if(currPage > 1) {
            preBtn.style.display = 'block';
            btnBox.style.justifyContent = 'space-between'
        }
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        setPage();

    }
})

preBtn.addEventListener('click', function() {
    if(currPage != 1) {
        currPage -= 1;
        pageIndex -= 6;
        if(currPage < totalPages) {
            nextBtn.style.display = 'block';
        }
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
        }
        setPage();

    }
})






box1.addEventListener("click", function() {
    if(currStore.length > 0) {
        window.open(`${currStore[0 + pageIndex].url}`)
    }
})
box2.addEventListener("click", function() {
    if(currStore.length > 0) {
        window.open(`${currStore[1 + pageIndex].url}`)
    }
})
box3.addEventListener("click", function() {
    if(currStore.length > 0) {
        window.open(`${currStore[2 + pageIndex].url}`)
    }
})
box4.addEventListener("click", function() {
    if(currStore.length > 0) {
        window.open(`${currStore[3 + pageIndex].url}`)
    }
})
box5.addEventListener("click", function() {
    if(currStore.length > 0) {
        window.open(`${currStore[4 + pageIndex].url}`)
    }
})
box6.addEventListener("click", function() {
    if(currStore.length > 0) {
        window.open(`${currStore[5 + pageIndex].url}`)
    }
})