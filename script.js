const mainElement = document.querySelector('section');

const button = document.getElementById('play');

const bombe = [];

let punteggio = 0;

let randomBomb;

button.addEventListener("click", function(){
    mainElement.innerHTML = '';
    for( let k = 1; k <= 100; k++){
        let newDivElement = creazioneSquare(k);
        newDivElement.addEventListener("click", function(){
            newDivElement.classList.toggle('cyan');
            if(bombe.includes(k)){
                console.log('game hover');
            } else{
                punteggio += 1;
                console.log(punteggio);
            }
        })
        mainElement.append(newDivElement);
    }

    while(bombe.length <= 16){
        randomBomb = Math.floor(Math.random() * 100);
        if(bombe.includes(randomBomb)){
            randomBomb = Math.floor(Math.random() * 100);
        } else{
            bombe.push(randomBomb);
        }
    }
    console.log(bombe);
    punteggio = 0;
})

// ================================================================================================= //
                                            // FUNCTION //
// ================================================================================================= //
// ================================================================================================= //

function creazioneSquare(testo){
    let element = document.createElement('div');
    element.innerHTML = testo;
    element.classList.add('square')
    return element;
}