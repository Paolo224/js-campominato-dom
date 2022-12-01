const mainElement = document.querySelector('section');

const button = document.getElementById('play');

let randomBomb;

button.addEventListener("click", function(){
    mainElement.innerHTML = '';

    let punteggio = 0;

    document.getElementById('punti').innerHTML = "I tuoi punti: " + punteggio;
    document.getElementById('vittoria').innerHTML = " ";
    const bombe = [];

    while(bombe.length <= 16){
        randomBomb = Math.floor(Math.random() * 100) + 1;
        if(!bombe.includes(randomBomb)){
            bombe.push(randomBomb);
        } 
    }

    for( let k = 1; k <= 100; k++){
        let newDivElement = creazioneSquare();
        newDivElement.addEventListener("click", function(){
            newDivElement.classList.toggle('green');
            if(bombe.includes(k)){
                document.getElementById('vittoria').innerHTML = "HAI PERSO!!!!111!!!!111!111";
                newDivElement.classList.add('img-bomb');
            } else{
                punteggio += 1;
                if((punteggio >= 84)){
                    document.getElementById('vittoria').innerHTML = "HAI VINTO!!!!111!!!!111!111";
                }
                document.getElementById('punti').innerHTML = "I tuoi punti: " + punteggio;
            }
        })
        mainElement.append(newDivElement);
    }
})

// ================================================================================================= //
                                            // FUNCTION //
// ================================================================================================= //
// ================================================================================================= //

function creazioneSquare(){
    let element = document.createElement('div');
    element.classList.add('square')
    return element;
}