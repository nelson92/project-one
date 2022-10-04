

/* Variables B for boxes, 6 total for news display */
const box1 = document.querySelector('#B1');
const box2 = document.querySelector('#B2');
const box3 = document.querySelector('#B3');
const box4 = document.querySelector('#B4');
const box5 = document.querySelector('#B5');
const box6 = document.querySelector('#B6');

/* Variables BT for box titles for the text display for the news article headlines */
const T1 = document.querySelector('#B1T');
const T2 = document.querySelector('#B2T');
const T3 = document.querySelector('#B3T');
const T4 = document.querySelector('#B4T');
const T5 = document.querySelector('#B5T');
const T6 = document.querySelector('#B6T');

/* Variables for button classes */
const btnBox = document.getElementsByClassName('P');
const preBtn =  document.getElementsByClassName('P-P');
const nextBtn =  document.getElementsByClassName('P-N');


/* Variables C for categories for the nav bar selection */
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
const C12 = document.querySelector('#C12');
const C13 = document.querySelector('#C13');
const C14 = document.querySelector('#C14');
const C15 = document.querySelector('#C15');
const C16 = document.querySelector('#C16');
const C17 = document.querySelector('#C17');
const C18 = document.querySelector('#C18');
const C19 = document.querySelector('#C19');
const H1 = document.querySelector('#H1');


/* Variables for the randomly generated number and fact display */
const wordBox = document.querySelector('#W-C-W');
const defBox = document.querySelector('#W-C-D');

/* Variables for favorite number and fact display and buttons */
const favoriteNumberDisplay = document.querySelector('#numberFavorite');
const favoriteFactDisplay = document.querySelector('#factFavorite');
const favoriteNumberDisplayPrev = document.querySelector('#favoriteNumberPrev');
const favoriteNumberDisplayNext = document.querySelector('#favoriteNumberNext');

/* Variables for search features */
const searchBtn = document.querySelector('#SB-S-B');
const inputVal = document.querySelector('#SB-S-I');
const avail = document.querySelector('#SB-S-A');

let today = moment();

/* API pull test variables */
let passed =  false;
let passed2 =  false;
let passed3 = false;
let passed4 = false;
let passedCat = false;


/* search button action item */
searchBtn.addEventListener("click", async function() {
    passed4 = false;
    let input = inputVal.value;
    let data = await getSearch(input);
    let check = location.href.split("?");
    if (passed4 == true && data.news.length >= 6) {
        if (check.length == 1) {

            location.href = check[0] + `?search=${input}`;
        }
        if (check.length == 2) {
            location.href = check[0] + `?search=${input}`;
        }
    } else {
        avail.innerText = "";
        setTimeout(function() {
            avail.innerText = "Not Available";
        }, 500);
    }
    
})


/* Start of the API section, including the key, and multiple different variations of pulls depending on category selected, random number fact API, and football scores API */
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
        console.log(data)
        passed4 = true;
        return data;
    } catch {
        console.log("error");
    }
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c8f23f80fmsh449bc45b3c0f9bcp1d7ca7jsn8084675ac9df',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

async function getNumber() {
    try {
        const response = await fetch('https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true', options);
        const data = await response.json();
        passed3 = true;
        // console.log(data);
             return data;
    } catch {
        console.log("error");
    }
}

const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c8f23f80fmsh449bc45b3c0f9bcp1d7ca7jsn8084675ac9df',
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};

async function liveSports() {
    try {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7c8f23f80fmsh449bc45b3c0f9bcp1d7ca7jsn8084675ac9df',
                'X-RapidAPI-Host': 'coronavirus-monitor.p.rapidapi.com'
            }
        };
        const response = await fetch('https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores?daysFrom=3', options1);
        const data = await response.json();
        passed3 = true;
        console.log(data);
             return data;
    } catch {
        console.log("error");
    }
}


/* variables for setting catagories in side nav bar */
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
    C12.innerText = `${cat[11]}`;
    C12.value = `${cat[11]}`;
    C13.innerText = `${cat[4]}`;
    C13.value = `${cat[4]}`;
    C14.innerText = `${cat[13]}`;
    C14.value = `${cat[13]}`;
    C15.innerText = `${cat[14]}`;
    C15.value = `${cat[14]}`;
    C16.innerText = `${cat[15]}`;
    C16.value = `${cat[15]}`;
    C17.innerText = `${cat[16]}`;
    C17.value = `${cat[16]}`;
    C18.innerText = `${cat[17]}`;
    C18.value = `${cat[17]}`;
    C19.innerText = `${cat[18]}`;
    C19.value = `${cat[18]}`;
}

/* variables regarding news feed display and function */
let currStore = new Array();
let boxes = 6;
let currPage = 1;
//if next page is clicked add 6 to the pageIndex
let pageIndex = 0;
//Total pages is set in the load function to count how many pages can be loaded
let totalPages;
let extra;


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


/* Variables and functions regarding number facts */
numberArrayPosition = JSON.parse(localStorage.getItem('newNumberPosition')) || 0;
let numberArray = [];
let factArray = [];
let numbersFavorite = [];
let factsFavorites = [];
let numbersFavoritePosition = 0;
let nextButton = document.querySelector('#wordNext');
let prevButton = document.querySelector('#wordPrev');
let saveWord = document.querySelector('#wordSave');
let removeWord = document.querySelector('#wordRemove');

nextButton.addEventListener("click", nextWordButton);
prevButton.addEventListener("click", prevWordButton);
saveWord.addEventListener("click", addWord);
removeWord.addEventListener("click",removeWordFavorites);
favoriteNumberDisplayNext.addEventListener("click", nextFavoriteButton);
favoriteNumberDisplayPrev.addEventListener("click", prevFavoriteButton);

async function loadWord() {
    //Persistence is "the continuance of an effect after its cause is removed"
    let word = await getNumber();

    numberArray = JSON.parse(localStorage.getItem('wordsList')) || [];
    factArray = JSON.parse(localStorage.getItem('definitionsList')) || [];
    
    if(numberArray.length === 0) {
    numberArray.push(word.number);
    factArray.push(word.text);
    }

    if(!numbersFavorite.length) {

        favoriteNumberDisplay.innerText = "Word : Please add favorites words to display :) " ;
        favoriteFactDisplay.innerText = "Definition: Please add favorites words to display :) " ;


    }

    // console.log(numberArray);
    // console.log(factArray);

    localStorage.setItem('wordsList',JSON.stringify(numberArray));
    localStorage.setItem('definitionsList',JSON.stringify(factArray));

    wordBox.innerText = "Number: " + numberArray[numberArrayPosition];
    defBox.innerText = "Fact: " + factArray[numberArrayPosition];

}


async function nextWordButton () {
    numberArrayPosition ++;
    let word= await getNumber();

    // console.log(word);
    // console.log(numberArrayPosition);
    // console.log(numberArray[numberArrayPosition]);


    if(numberArray[(numberArrayPosition)] == undefined) {
        numberArray.push(word.number);
        factArray.push(word.text);
        localStorage.setItem('wordsList',JSON.stringify(numberArray));
        localStorage.setItem('definitionsList',JSON.stringify(factArray));
    }

    localStorage.setItem('newNumberPosition',JSON.stringify(numberArrayPosition));
    wordBox.innerText = "Number " + numberArray[numberArrayPosition];
    defBox.innerText = "Fact: " + factArray[numberArrayPosition];

}

async function prevWordButton () {

    numberArrayPosition --;

    let word= await getNumber();

    // console.log(word);
    // console.log(numberArrayPosition);
    // console.log(numberArray[numberArrayPosition]);

    if(numberArray[(numberArrayPosition)] == undefined) {
        numberArrayPosition = 0;
        numberArray.unshift(word.text);
        factArray.unshift(word[0].definition);
        localStorage.setItem('wordsList',JSON.stringify(numberArray));
        localStorage.setItem('definitionsList',JSON.stringify(factArray));
    }

    localStorage.setItem('newNumberPosition',JSON.stringify(numberArrayPosition));
    wordBox.innerText = "Number " + numberArray[numberArrayPosition];
    defBox.innerText = "Fact: " + factArray[numberArrayPosition];
}

function addWord() {

    if (numbersFavorite[0] == "Start by saving a favorite fact ! :) ") {
        numbersFavorite = [];
        factsFavorites = [];
    }

    if (!numbersFavorite.includes(numberArray[numberArrayPosition])) {
        numbersFavorite.push(numberArray[numberArrayPosition]);
        factsFavorites.push(factArray[numberArrayPosition]);
    
        localStorage.setItem("favoriteWords",JSON.stringify(numbersFavorite));
        localStorage.setItem("favoriteDefinitions", JSON.stringify(factsFavorites))
        
        let numbersFavoritePosition = (numbersFavorite.length-1) || 0;
        localStorage.setItem('favoritePosition',JSON.stringify(numbersFavoritePosition));
        displayFavoriteWord()
    }
}

function displayFavoriteWord() {

    numbersFavoritePosition = JSON.parse(localStorage.getItem('favoritePosition')) || 0;

    numbersFavorite= JSON.parse(localStorage.getItem('favoriteWords')) || ["Start by saving a favorite fact ! :) " ]

    factsFavorites = JSON.parse(localStorage.getItem('favoriteDefinitions')) || ["Start by saving a favorite fact ! :) " ];

    favoriteNumberDisplay.innerText = "Fact: " + numbersFavorite[numbersFavoritePosition];
    favoriteFactDisplay.innerText = "Definition: " + factsFavorites[numbersFavoritePosition];

}

function removeWordFavorites() {
    numbersFavorite.splice(numbersFavoritePosition,1);
    factsFavorites.splice(numbersFavoritePosition,1);

    localStorage.setItem("favoriteWords",JSON.stringify(numbersFavorite));
    localStorage.setItem("favoriteDefinitions", JSON.stringify(factsFavorites))

    if (numbersFavoritePosition > 0) {
        numbersFavoritePosition --
    }
    
    if(!numbersFavorite.length) {

        favoriteNumberDisplay.innerText = "Word : Please add favorites words to display :) " ;
        favoriteFactDisplay.innerText = "Definition: Please add favorites words to display :) " ;
    }

    else{
    favoriteNumberDisplay.innerText = "Word : " + numbersFavorite[numbersFavoritePosition];
    favoriteFactDisplay.innerText = "Definition: " + factsFavorites[numbersFavoritePosition];
    }
    localStorage.setItem('favoritePosition',JSON.stringify(numbersFavoritePosition));
}

function nextFavoriteButton() {

    if(numbersFavoritePosition == ((numbersFavorite.length)-1)) {
        numbersFavoritePosition = 0
    }
    else {
        numbersFavoritePosition ++;
    }

    if(!numbersFavorite.length) {

        favoriteNumberDisplay.innerText = "Word : Please add favorites words to display :) " ;
        favoriteFactDisplay.innerText = "Definition: Please add favorites words to display :) " ;

    }
    else{
    favoriteNumberDisplay.innerText = "Word : " + numbersFavorite[numbersFavoritePosition];
    favoriteFactDisplay.innerText = "Definition: " + factsFavorites[numbersFavoritePosition];
    }
    localStorage.setItem('favoritePosition',JSON.stringify(numbersFavoritePosition));
}

function prevFavoriteButton() {

    if(numbersFavoritePosition == 0) {
        numbersFavoritePosition = ((numbersFavorite.length)-1)
    }

    else {
        numbersFavoritePosition --;
    }
  
    if(!numbersFavorite.length) {

        favoriteNumberDisplay.innerText = "Word : Please add favorites words to display :) " ;
        favoriteFactDisplay.innerText = "Definition: Please add favorites words to display :) " ;
    }

    else{
    favoriteNumberDisplay.innerText = "Word : " + numbersFavorite[numbersFavoritePosition];
    favoriteFactDisplay.innerText = "Definition: " + factsFavorites[numbersFavoritePosition];
    }
    
     localStorage.setItem('favoritePosition',JSON.stringify(numbersFavoritePosition));
}

/* Variables and functions for nfl score display */
async function loadSports() {
    let fact = await liveSports();

    console.log( fact[0].scores);
    var scoreText=document.querySelector('#scoreDisplay');

    for (i=0; i<fact.length; i++) {

       if ((fact[i].scores==null)) {
       
        
            scoreText.textContent += ""


        
        scoreText.style.left = "1000px" ;
             }


        else {
            console.log("score",i);
          scoreText.innerText+=  "         " + fact[i].scores[0].name + " : " + fact[i].scores[0].score + " , " + fact[i].scores[1].name + " : " + fact[i].scores[1].score;
   
        
        scoreText.style.left = "1000px" ;

        }
    }
    scoreMovement();
}

function scoreMovement() {
$('#scoreDisplay').removeAttr("style")

$('#scoreDisplay').animate({
    left:-6500
    }, 40000, "linear" ,
        scoreMovement
    
)
}


/* Functions for initial page loads, news paperer functions */
async function loadPage() {
    passed = false;
    passed2 = false;
    passed3 = false;
    passed4 = false;
    passedCat = false;
    let cat = await getAllCat();
    cat = cat.categories;
    let loadCat;
    let loc = location.href.split("?");
    if (loc.length == 2 && passed2 == true ) {
        setCat(cat);
        loadCat = loc[1].split('=');
        if (loadCat[0] == "catagories") {
            loadCat = loadCat [1];
            let catData = await getCat(loadCat);
            if (passed3 == true) {
                pageIndex = 0;
                currStore = []
                currPage = 1;
                if(currPage == 1) {
                    preBtn[0].style.display = 'none';
                    preBtn[1].style.display = 'none';
                    btnBox[0].style.justifyContent = 'flex-end'
                    btnBox[1].style.justifyContent = 'flex-end'
                    nextBtn[0].style.display = 'block';
                    nextBtn[1].style.display = 'block';
                }
                for(let i = 0; i < catData.news.length; i++) {
                    if(catData.news[i].image != "None"){
                        currStore[currStore.length] = catData.news[i];
                    }
                }
                //console.log(currStore);
                extra = currStore.length % boxes;
                totalPages = (currStore.length - extra) / 6;
                //console.log(totalPages);
                if(currPage == totalPages) {
                    nextBtn[0].style.display = 'none';
                    nextBtn[1].style.display = 'none';
                }
                resetBack();
                if(currPage > totalPages) {
                    currStore = [];
                }
                if(currPage <= totalPages) {
                    setPage(currStore);
                }
            }
        }
        if (loadCat[0] == "search") {
            passed4 = false;
            let input = loadCat[1];
            let data = await getSearch(input);
            if (passed4 == true && data.news.length >= 6) {
                pageIndex = 0;
                currStore = []
                currPage = 1;
                if(currPage == 1) {
                    preBtn[0].style.display = 'none';
                    preBtn[1].style.display = 'none';
                    btnBox[0].style.justifyContent = 'flex-end'
                    btnBox[1].style.justifyContent = 'flex-end'
                    nextBtn[0].style.display = 'block';
                    nextBtn[1].style.display = 'block';
                }
                for(let i = 0; i < data.news.length; i++) {
                    if(data.news[i].image != "None"){
                        currStore[currStore.length] = data.news[i];
                    }
                }
                //console.log(currStore);
                extra = currStore.length % boxes;
                totalPages = (currStore.length - extra) / 6;
                //console.log(totalPages);
                if(currPage == totalPages) {
                    nextBtn[0].style.display = 'none';
                    nextBtn[1].style.display = 'none';
                }
                resetBack();
                if(currPage > totalPages) {
                    currStore = [];
                }
                if(currPage <= totalPages) {
                    setPage(currStore);
                }
            }
        }
    } else {
        passedCat = true;
    }

    let val = await getCurr();
    if (passed == true && passed2 == true && passedCat == true) {
        currStore = new Array();
        setCat(cat);
        if(currPage == 1) {
            preBtn[0].style.display = 'none';
            preBtn[1].style.display = 'none';
            btnBox[0].style.justifyContent = 'flex-end'
            btnBox[1].style.justifyContent = 'flex-end'
            nextBtn[0].style.display = 'block';
            nextBtn[1].style.display = 'block';
        }
        for(let i = 0; i < val.news.length; i++) {
            if(val.news[i].image != "None"){
                currStore[currStore.length] = val.news[i];
            }
        }
        //console.log(currStore);
        extra = currStore.length % boxes;
        totalPages = (currStore.length - extra) / 6;
        if(currPage == totalPages) {
            nextBtn[0].style.display = 'none';
            nextBtn[1].style.display = 'none';
        }
        resetBack();
        if(currPage > totalPages) {
            currStore = [];
        }
        if(currPage <= totalPages) {
            setPage(currStore);
        }
    }
}


/* Actions items for newspaper display buttons */
nextBtn[0].addEventListener('click', function() {
    if(currPage < totalPages) {
        currPage += 1;
        pageIndex += 6;
        if(currPage > 1) {
            preBtn[0].style.display = 'block';
            preBtn[1].style.display = 'block';
            btnBox[0].style.justifyContent = 'space-between'
            btnBox[1].style.justifyContent = 'space-between'
        }
        if(currPage == totalPages) {
            nextBtn[0].style.display = 'none';
            nextBtn[1].style.display = 'none';
        }
        resetBack();
        setPage(currStore);
    }
})

preBtn[0].addEventListener('click', function() {
    if(currPage != 1) {
        currPage -= 1;
        pageIndex -= 6;
        if(currPage < totalPages) {
            nextBtn[0].style.display = 'block';
            nextBtn[1].style.display = 'block';
        }
        if(currPage == 1) {
            preBtn[0].style.display = 'none';
            preBtn[1].style.display = 'none';
            btnBox[0].style.justifyContent = 'flex-end'
            btnBox[1].style.justifyContent = 'flex-end'
        }
        resetBack();
        setPage(currStore);

    }
})




nextBtn[1].addEventListener('click', function() {
    if(currPage < totalPages) {
        currPage += 1;
        pageIndex += 6;
        if(currPage > 1) {
            preBtn[0].style.display = 'block';
            preBtn[1].style.display = 'block';
            btnBox[0].style.justifyContent = 'space-between'
            btnBox[1].style.justifyContent = 'space-between'
        }
        if(currPage == totalPages) {
            nextBtn[0].style.display = 'none';
            nextBtn[1].style.display = 'none';
        }
        resetBack();
        setPage(currStore);
    }
})

preBtn[1].addEventListener('click', function() {
    if(currPage != 1) {
        currPage -= 1;
        pageIndex -= 6;
        if(currPage < totalPages) {
            nextBtn[0].style.display = 'block';
            nextBtn[1].style.display = 'block';
        }
        if(currPage == 1) {
            preBtn[0].style.display = 'none';
            preBtn[1].style.display = 'none';
            btnBox[0].style.justifyContent = 'flex-end'
            btnBox[1].style.justifyContent = 'flex-end'
        }
        resetBack();
        setPage(currStore);

    }
})


/* Additional supporting function for newspaper display */
function resetBack() {
    for(let i = 0; i < 6; i++) {
        if(i == 0) {
            box1.style.backgroundImage = `none`
            T1.innerText = `Not Available`
        }
        if(i == 1) {
            box2.style.backgroundImage = `none`
            T2.innerText = `Not Available`
        }
        if(i == 2) {
            box3.style.backgroundImage = `none`
            T3.innerText = `Not Available`
        }
        if(i == 3) {
            box4.style.backgroundImage = `none`
            T4.innerText = `Not Available`
        }
        if(i == 4) {
            box5.style.backgroundImage = `none`
            T5.innerText = `Not Available`
        }
        if(i == 5) {
            box6.style.backgroundImage = `none`
            T6.innerText = `Not Available`
        }
    }
}

/* Actions items for newspaper displays */
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

/* Action items for when user selects a category from side nav */
H1.addEventListener("click", async function() {
    H1.setAttribute('href', `./index.html`);
})


C1.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C1.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C1.value}`;
    }
})

C2.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C2.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C2.value}`;
    }
})

C3.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C3.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C3.value}`;
    }
})

C4.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C4.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C4.value}`;
    }
})

C5.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C5.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C5.value}`;
    }
})

C6.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C6.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C6.value}`;
    }
})

C7.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C7.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C7.value}`;
    }
})

C8.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C8.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C8.value}`;
    }
})

C9.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C9.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C9.value}`;
    }
})

C10.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C10.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C10.value}`;
    }
})


C11.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C11.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C11.value}`;
    }
})

C12.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C12.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C12.value}`;
    }
})

C13.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C13.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C13.value}`;
    }
})

C14.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C14.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C14.value}`;
    }
})

C15.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C15.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C15.value}`;
    }
})

C16.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C16.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C16.value}`;
    }
})

C17.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C17.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C17.value}`;
    }
})

C18.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C18.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C18.value}`;
    }
})

C19.addEventListener("click", async function() {
    let check = location.href.split("?");
    if (check.length == 1) {
        location.href = check[0] + `?catagories=${C19.value}`;
    }
    if (check.length == 2) {
        location.href = check[0] + `?catagories=${C19.value}`;
    }
})


loadPage();
loadWord();
displayFavoriteWord();
liveSports();
loadSports();





