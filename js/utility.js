function hideElementById(elementId){
    document.getElementById(elementId).classList.add('hidden')
}

function showElementById(elementId){
    document.getElementById(elementId).classList.remove('hidden')
}


function setBackgroundColor(id){
    document.getElementById(id).classList.add('bg-orange-400')
}


function setInnerTextById(id, value){
    document.getElementById(id).innerText = value;
}


function getRandomAlphet(){
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetstring.split('');

    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]

    return alphabet
}

