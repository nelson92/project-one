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


const C1 = document.querySelector('#C1');
const C2 = document.querySelector('#C2');
const C3 = document.querySelector('#C3');
const C4 = document.querySelector('#C4');
const C5 = document.querySelector('#C5');
const C6 = document.querySelector('#C6');
const C7 = document.querySelector('#C7');
const C8 = document.querySelector('#C8');
const C9 = document.querySelector('#C9');
const C10 = document.querySelector('#C10');
const C11 = document.querySelector('#C11');
const H1 = document.querySelector('#H1');


const wordBox = document.querySelector('#W-C-W');
const defBox = document.querySelector('#W-C-D');

const favoriteWordDisplay = document.querySelector('#wordFavorite');
const favoriteDefinitionDisplay = document.querySelector('#definitionFavorite');
const favoriteWordDisplayPrev = document.querySelector('#favoriteWordPrev');
const favoriteWordDisplayNext = document.querySelector('#favoriteWordNext');

const searchBtn = document.querySelector('#S-S-B');
const inputVal = document.querySelector('#S-S-I');

let today = moment();


let passed =  false;
let passed2 =  false;
let passed3 = false;
let passed4 = false;



searchBtn.addEventListener("click", async function() {
    passed4 = false;
    let input = inputVal.value;
    let data = await getSearch(input);
    if (passed4 == true && data.news.length >= 6) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < data.news.length; i++) {
            if(data.news[i].image != "None"){
                currStore[currStore.length] = data.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})



const currAPI = "zaSmIPDUx3iAmelqolvF17hSHrG1zCsLzuTjxKenPwJmUnBC"



async function getCurr() {
    try {
        const apiUrl = `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${currAPI}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        passed = true;
        return data;
    } catch {
        console.log("error");
    }
}


async function getAllCat() {
    try {
        const apiUrl = `https://api.currentsapi.services/v1/available/categories?&apiKey=${currAPI}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        passed2 = true;
        return data;
    } catch {
        console.log("error");
    }
}

async function getCat(value) {
    try {
        const apiUrl = `https://api.currentsapi.services/v1/search?category=${value}&apiKey=${currAPI}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        passed3 = true;
        return data;
    } catch {
        console.log("error");
    }
}

async function getSearch(value) {
    try {
        const apiUrl = `https://api.currentsapi.services/v1/search?keywords=${value}&apiKey=${currAPI}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        passed4 = true;
        return data;
    } catch {
        console.log("error");
    }
}


async function getWord() {
    try {
        const apiUrl = `https://random-words-api.vercel.app/word?ref=publicapis.dev`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        passed3 = true;
        console.log(data);
             return data;
    } catch {
        console.log("error");
    }
}



let currStore = new Array();
let boxes = 6;
let currPage = 1;
//if next page is clicked add 6 to the pageIndex
let pageIndex = 0;
//Total pages is set in the load function to count how many pages can be loaded
let totalPages;
let extra;

function setCat(cat) {
    C1.innerText = `${cat[0]}`;
    C1.value = `${cat[0]}`;
    C2.innerText = `${cat[1]}`;
    C2.value = `${cat[1]}`;
    C3.innerText = `${cat[2]}`;
    C3.value = `${cat[2]}`;
    C4.innerText = `${cat[3]}`;
    C4.value = `${cat[3]}`;
    C5.innerText = `${cat[12]}`;
    C5.value = `${cat[12]}`;
    C6.innerText = `${cat[5]}`;
    C6.value = `${cat[5]}`;
    C7.innerText = `${cat[6]}`;
    C7.value = `${cat[6]}`;
    C8.innerText = `${cat[7]}`;
    C8.value = `${cat[7]}`;
    C9.innerText = `${cat[8]}`;
    C9.value = `${cat[8]}`;
    C10.innerText = `${cat[9]}`;
    C10.value = `${cat[9]}`;
    C11.innerText = `${cat[10]}`;
    C11.value = `${cat[10]}`;
}


function setPage(currStore) {
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


wordArrayPosition = JSON.parse(localStorage.getItem('newWordPosition')) || 0;
let wordArray = [];
let definitionArray = [];
let wordsFavorite = [];
let definitionsFavorites = [];
let wordsFavoritePosition = 0;



async function loadWord() {
    let word = await getWord();

   
    wordArray = JSON.parse(localStorage.getItem('wordsList')) || [];
    definitionArray = JSON.parse(localStorage.getItem('definitionsList')) || [];
    
    if(wordArray.length === 0) {
    wordArray.push(word[0].word);
    definitionArray.push(word[0].definition);
    }

    console.log(wordArray);
    console.log(definitionArray);

    localStorage.setItem('wordsList',JSON.stringify(wordArray));
    localStorage.setItem('definitionsList',JSON.stringify(definitionArray));

    wordBox.innerText = "Word: " + wordArray[wordArrayPosition];
    defBox.innerText = "Definition: " + definitionArray[wordArrayPosition];



    // if(localStorage.length < 1) {
    //     localStorage.setItem(`word`, JSON.stringify(word));
    //     localStorage.setItem('date', JSON.stringify(today.format("MMM Do, YYYY")))
    //     wordBox.innerText = `Word: ${word.word}`;
    //     defBox.innerText = `Definition: ${word.definition}`;
    // }
    // if(localStorage.length >= 1) {
    //     let check = JSON.parse(localStorage.getItem('word'));
    //     let date = JSON.parse(localStorage.getItem('date'));
    //     if (date == today.format("MMM Do, YYYY")) {
    //         wordBox.innerText = `Word: ${check[0].word}`;
    //         defBox.innerText = `Definition: ${check[0].definition}`;
    //     }
    //     if (date != today.format("MMM Do, YYYY")) {
    //         localStorage.clear();
    //         localStorage.setItem(`word`, JSON.stringify(word));
    //         localStorage.setItem('date', JSON.stringify(today.format("MMM Do, YYYY")))
    //         wordBox.innerText = `Word: ${word.word}`;
    //         defBox.innerText = `Definition: ${word.definition}`;
    //     }

    // }
}


async function nextWordButton () {
    wordArrayPosition ++;
    let word= await getWord();

    console.log(word);
    console.log(wordArrayPosition);
    console.log(wordArray[wordArrayPosition]);


    if(wordArray[(wordArrayPosition)] == undefined) {
        wordArray.push(word[0].word);
        definitionArray.push(word[0].definition);
        localStorage.setItem('wordsList',JSON.stringify(wordArray));
        localStorage.setItem('definitionsList',JSON.stringify(definitionArray));
    }

    localStorage.setItem('newWordPosition',JSON.stringify(wordArrayPosition));
    wordBox.innerText = "Word: " + wordArray[wordArrayPosition];
    defBox.innerText = "Definition: " + definitionArray[wordArrayPosition];



}

async function prevWordButton () {

    wordArrayPosition --;


    let word= await getWord();

    console.log(word);
    console.log(wordArrayPosition);
    console.log(wordArray[wordArrayPosition]);


    if(wordArray[(wordArrayPosition)] == undefined) {
        wordArrayPosition = 0;
        wordArray.unshift(word[0].word);
        definitionArray.unshift(word[0].definition);
        localStorage.setItem('wordsList',JSON.stringify(wordArray));
        localStorage.setItem('definitionsList',JSON.stringify(definitionArray));
    }

    localStorage.setItem('newWordPosition',JSON.stringify(wordArrayPosition));
    wordBox.innerText = "Word: " + wordArray[wordArrayPosition];
    defBox.innerText = "Definition: " + definitionArray[wordArrayPosition];
}


let nextButton = document.querySelector('#wordNext');
nextButton.addEventListener("click", nextWordButton);

let prevButton = document.querySelector('#wordPrev');
prevButton.addEventListener("click", prevWordButton);

let saveWord = document.querySelector('#wordSave');
saveWord.addEventListener("click", addWord);

let removeWord = document.querySelector('#wordRemove');
removeWord.addEventListener("click",removeWordFavorites);

function addWord() {

    if (wordsFavorite[0] == "Start by saving a favorite word ! :) ") {
        wordsFavorite = [];
        definitionsFavorites = [];
    }

    if (!wordsFavorite.includes(wordArray[wordArrayPosition])) {
        wordsFavorite.push(wordArray[wordArrayPosition]);
        definitionsFavorites.push(definitionArray[wordArrayPosition]);
    
        localStorage.setItem("favoriteWords",JSON.stringify(wordsFavorite));
        localStorage.setItem("favoriteDefinitions", JSON.stringify(definitionsFavorites))
    
        displayFavoriteWord()
    }


}


function displayFavoriteWord() {

    wordsFavoritePosition = JSON.parse(localStorage.getItem('favoritePosition')) || 0;

    wordsFavorite= JSON.parse(localStorage.getItem('favoriteWords')) || ["Start by saving a favorite word ! :) " ]

    definitionsFavorites = JSON.parse(localStorage.getItem('favoriteDefinitions')) || ["Start by saving a favorite word ! :) " ];

    favoriteWordDisplay.innerText = "Word : " + wordsFavorite[wordsFavoritePosition];
    favoriteDefinitionDisplay.innerText = "Definition: " + definitionsFavorites[wordsFavoritePosition];

}


function removeWordFavorites() {
    wordsFavorite.splice(wordsFavoritePosition,1);
    definitionsFavorites.splice(wordsFavoritePosition,1);

    localStorage.setItem("favoriteWords",JSON.stringify(wordsFavorite));
    localStorage.setItem("favoriteDefinitions", JSON.stringify(definitionsFavorites))


    if (wordsFavoritePosition > 0) {
        wordsFavoritePosition --
    }

    favoriteWordDisplay.innerText = "Word : " + wordsFavorite[wordsFavoritePosition];
    favoriteDefinitionDisplay.innerText = "Definition: " + definitionsFavorites[wordsFavoritePosition];

    localStorage.setItem('favoritePosition',JSON.stringify(wordsFavoritePosition));
}


function nextFavoriteButton() {

    if(wordsFavoritePosition == ((wordsFavorite.length)-1)) {
        wordsFavoritePosition = 0
    }
    else {
        wordsFavoritePosition ++;
    }

    favoriteWordDisplay.innerText = "Word : " + wordsFavorite[wordsFavoritePosition];
    favoriteDefinitionDisplay.innerText = "Definition: " + definitionsFavorites[wordsFavoritePosition];

    localStorage.setItem('favoritePosition',JSON.stringify(wordsFavoritePosition));
}


function prevFavoriteButton() {

    
    if(wordsFavoritePosition == 0) {
        wordsFavoritePosition = ((wordsFavorite.length)-1)
    }
    else {
        wordsFavoritePosition --;
    }
  
    favoriteWordDisplay.innerText = "Word : " + wordsFavorite[wordsFavoritePosition];
    favoriteDefinitionDisplay.innerText = "Definition: " + definitionsFavorites[wordsFavoritePosition];

     localStorage.setItem('favoritePosition',JSON.stringify(wordsFavoritePosition));
}

favoriteWordDisplayNext.addEventListener("click", nextFavoriteButton);
favoriteWordDisplayPrev.addEventListener("click", prevFavoriteButton);

favoriteWordDisplay
favoriteDefinitionDisplay
favoriteWordDisplayPrev 
favoriteWordDisplayNext







// Allows new word to be loaded at midnight
// setInterval(async function() {
//     loadWord();
// }, 100);



async function loadPage() {
    let val = await getCurr();
    let cat = await getAllCat();
    cat = cat.categories;
    if (passed == true && passed2 == true) {
        currStore = new Array();
        setCat(cat);
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
        }
        for(let i = 0; i < val.news.length; i++) {
            if(val.news[i].image != "None"){
                currStore[currStore.length] = val.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        resetBack();
        setPage(currStore);
    }
}

loadPage();
loadWord();
displayFavoriteWord();



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
        resetBack();
        setPage(currStore);

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
        resetBack();
        setPage(currStore);

    }
})


function resetBack() {
    for(let i = 0; i < 6; i++) {
        if(i == 0) {
            box1.style.backgroundImage = `none`
            T1.innerText = `${currStore[0 + pageIndex].title}`
        }
        if(i == 1) {
            box2.style.backgroundImage = `none`
            T2.innerText = `${currStore[1 + pageIndex].title}`
        }
        if(i == 2) {
            box3.style.backgroundImage = `none`
            T3.innerText = `${currStore[2 + pageIndex].title}`
        }
        if(i == 3) {
            box4.style.backgroundImage = `none`
            T4.innerText = `${currStore[3 + pageIndex].title}`
        }
        if(i == 4) {
            box5.style.backgroundImage = `none`
            T5.innerText = `${currStore[4 + pageIndex].title}`
        }
        if(i == 5) {
            box6.style.backgroundImage = `none`
            T6.innerText = `${currStore[5 + pageIndex].title}`
        }
    }
}


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


H1.addEventListener("click", async function() {
    passed == false
    passed2 == false
    let val = await getCurr();
    let cat = await getAllCat();
    cat = cat.categories;
    if (passed == true && passed2 == true) {
        let currStore = [];
        currPage = 1;
        pageIndex = 0;
        setCat(cat);
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < val.news.length; i++) {
            if(val.news[i].image != "None"){
                currStore[currStore.length] = val.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);
    }
})


C1.addEventListener("click", async function() {
    passed3 = false;
    let cat = await getCat(C1.value);
    if (passed3 == true) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < cat.news.length; i++) {
            if(cat.news[i].image != "None"){
                currStore[currStore.length] = cat.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})

C2.addEventListener("click", async function() {
    passed3 = false;
    let cat = await getCat(C2.value);
    if (passed3 == true) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
        }
        for(let i = 0; i < cat.news.length; i++) {
            if(cat.news[i].image != "None"){
                currStore[currStore.length] = cat.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})

C3.addEventListener("click", async function() {
    passed3 = false;
    let cat = await getCat(C3.value);
    if (passed3 == true) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < cat.news.length; i++) {
            if(cat.news[i].image != "None"){
                currStore[currStore.length] = cat.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})

C4.addEventListener("click", async function() {
    passed3 = false;
    let cat = await getCat(C4.value);
    if (passed3 == true) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < cat.news.length; i++) {
            if(cat.news[i].image != "None"){
                currStore[currStore.length] = cat.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})

C5.addEventListener("click", async function() {
    passed3 = false;
    let cat = await getCat(C5.value);
    if (passed3 == true) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < cat.news.length; i++) {
            if(cat.news[i].image != "None"){
                currStore[currStore.length] = cat.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})

C6.addEventListener("click", async function() {
    passed3 = false;
    let cat = await getCat(C6.value);
    if (passed3 == true) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < cat.news.length; i++) {
            if(cat.news[i].image != "None"){
                currStore[currStore.length] = cat.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})

C7.addEventListener("click", async function() {
    passed3 = false;
    let cat = await getCat(C7.value);
    if (passed3 == true) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < cat.news.length; i++) {
            if(cat.news[i].image != "None"){
                currStore[currStore.length] = cat.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})

C8.addEventListener("click", async function() {
    passed3 = false;
    let cat = await getCat(C8.value);
    if (passed3 == true) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < cat.news.length; i++) {
            if(cat.news[i].image != "None"){
                currStore[currStore.length] = cat.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})

C9.addEventListener("click", async function() {
    passed3 = false;
    let cat = await getCat(C9.value);
    if (passed3 == true) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < cat.news.length; i++) {
            if(cat.news[i].image != "None"){
                currStore[currStore.length] = cat.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})

C10.addEventListener("click", async function() {
    passed3 = false;
    let cat = await getCat(C10.value);
    if (passed3 == true) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < cat.news.length; i++) {
            if(cat.news[i].image != "None"){
                currStore[currStore.length] = cat.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})


C11.addEventListener("click", async function() {
    passed3 = false;
    let cat = await getCat(C11.value);
    if (passed3 == true) {
        pageIndex = 0;
        currStore = []
        currPage = 1;
        if(currPage == 1) {
            preBtn.style.display = 'none';
            btnBox.style.justifyContent = 'flex-end'
            nextBtn.style.display = 'block';
        }
        for(let i = 0; i < cat.news.length; i++) {
            if(cat.news[i].image != "None"){
                currStore[currStore.length] = cat.news[i];
            }
        }
        console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn.style.display = 'none';
        }
        resetBack();
        setPage(currStore);

    }
})




