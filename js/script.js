function continueGame(){
   const alphabet = getRandomAlphet();
   
   setInnerTextById('current-alphabet', alphabet);
   setBackgroundColor(alphabet)
}

document.getElementById('home').addEventListener('click',function(e){
    hideElementById('home')
    showElementById('play-ground')
    continueGame()
})