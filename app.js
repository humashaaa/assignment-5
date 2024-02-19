function getStarted(){
    // hide homescreen
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');
    // display 2nd page
    const secondPage = document.getElementById('second-page');
    secondPage.classList.remove('hidden');

}
// disappear 2nd page
function nextBtn(){
    const nextButton = document.getElementById('second-page');
    nextButton.classList.add('hidden');
    // display 3rd page
    const thirdPage = document.getElementById('third-page');
    thirdPage.classList.remove('hidden')
}

// disappear 3rd page
function continueBtn(){
    // hide 3rd page
    const success = document.getElementById('third-page');
    success.classList.add('hidden');
    // show first page
    const homeScreen = document.getElementById('home-screen')
    homeScreen.classList.remove('hidden')
}