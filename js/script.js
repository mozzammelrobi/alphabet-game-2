let audio = new Audio();
let isGameOn = false;

function handleKeybordButtonPress(e){
    if(isGameOn == false) return
   const playerPress = e.key;

   if(playerPress == 'Escape'){
    gameOver()
   }

   const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase()

    if(playerPress == currentAlphabet){
        
        audio.src = "../audio/success-1-6297.mp3";
        audio.play();

        const currentScore = document.getElementById('current-score').innerText;
        const convertedScore = parseInt(currentScore)
        const updateScore = convertedScore + 1;

        setInnerTextById('current-score', updateScore)   
        removeBackgroundColor(currentAlphabet)
        continueGame()
   }else{

       audio.src = "../audio/error-2-36058.mp3"  ;
       audio.play()
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

// part two /*  continue game */
function continueGame(){
    console.log('game plalying')
    
   const alphabet = getRandomAlphet();
   setInnerTextById('current-alphabet', alphabet);
   setBackgroundColor(alphabet)
   isGameOn == true;
  
}
// part one /* game play ----------------------------------------------*/
document.getElementById('play').addEventListener('click',function(e){
    hideElementById('home')
    showElementById('play-ground')
   
    isGameOn = true   // game will never play if not click play button
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
isGameOn = true

    continueGame()
}

// part five
function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')

    const lastScore = document.getElementById('current-score').innerText
    console.log('last score', lastScore)
    setInnerTextById('final-result', lastScore)

        isGameOn = false; // wrong key press no work if game over
}