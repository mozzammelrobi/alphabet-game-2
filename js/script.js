document.getElementById('home').addEventListener('click',function(e){
    // document.getElementById('home').classList.add('hidden')
    // document.getElementById('play-ground').classList.remove('hidden')

    hideElementById('home')
    showElementById('play-ground')
})



function hideElementById(elementId){
    document.getElementById(elementId).classList.add('hidden')
}

function showElementById(elementId){
    document.getElementById(elementId).classList.remove('hidden')
}