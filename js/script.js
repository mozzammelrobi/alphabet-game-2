function handleKeybordButtonPress(e){
   const playerPress = e.key;

   if(playerPress == 'Escape'){
    gameOver()
   }

   const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase()

    if(playerPress == currentAlphabet){
        
        const currentScore = document.getElementById('current-score').innerText;
        const convertedScore = parseInt(currentScore)
        const updateScore = convertedScore + 1;

        setInnerTextById('current-score', updateScore)   
        removeBackgroundColor(currentAlphabet)
        continueGame()
   }else{
       const currentLife = document.getElementById('current-life').innerText;
       const convertedLife = parseInt(currentLife)
       
       const updateLife = convertedLife - 1 ;
       if(updateLife === 0){
        const finalResult = document.getElementById('final-result').innerText
        console.log(finalResult)
        
        // hideElementById('play-ground')
        // showElementById('final-score')
       
        gameOver()
       }

       setInnerTextById('current-life', updateLife)
    }
}


// part three
document.addEventListener('keyup', handleKeybordButtonPress)

// part two
function continueGame(){
   const alphabet = getRandomAlphet();
   
   setInnerTextById('current-alphabet', alphabet);
   setBackgroundColor(alphabet)
}
// part one
document.getElementById('home').addEventListener('click',function(e){
    hideElementById('home')
    showElementById('play-ground')
    continueGame()
})

// part four
function playAgain(){
    hideElementById('home')
    showElementById('play-ground')
    hideElementById('final-score')

    setInnerTextById('current-life',5)
    setInnerTextById('current-score', 0)

    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    removeBackgroundColor(currentAlphabet)

    continueGame()
}

// part five
function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')

    const lastScore = document.getElementById('current-score').innerText
    console.log('last score', lastScore)
    setInnerTextById('final-result', lastScore)
}