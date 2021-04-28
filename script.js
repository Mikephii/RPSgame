

let pCount = 0;
let oCount = 0;

let playing = false

//hoverinng image change stuff


//const img = document.querySelector('img');
const buttons = document.querySelectorAll('button.button');
buttons.forEach(button => button.addEventListener('mouseover', imageSource));
buttons.forEach(button => button.addEventListener('click', selectMove));


function imageSource(e){
    if(!playing){
        const img = document.querySelector(`img[id="player"`);
        const opimg = document.querySelector(`img[id="opponent"`)
        switch(e.srcElement.id){
            case 'rock':
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg'
                opimg.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Question-mark-blackandwhite.png'
                console.log('pp')
                break;
            case 'paper':
                img.src ="https://upload.wikimedia.org/wikipedia/commons/1/1c/Circle-icons-water.svg"
                opimg.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Question-mark-blackandwhite.png'
                break;
            case 'scissors':
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/9/99/FireIcon.svg'
                opimg.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Question-mark-blackandwhite.png'
                break;
            default:
        }
    }
    console.log(e.srcElement.id)
}



function selectMove(e) {

    playing = true
    
    let opponent = random(1,3);
    const img = document.querySelector(`img[id="opponent"`);
    switch(number2move(opponent)){
        case 'rock':
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg'
            
            break;
        case 'paper':
            img.src ="https://upload.wikimedia.org/wikipedia/commons/1/1c/Circle-icons-water.svg"
            
            break;
        case 'scissors':
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/9/99/FireIcon.svg'
            
            break;
        default:
    }

    playing = false
   
    
   
   
   
    RPSwin(move2number(e.srcElement.id),opponent)
    

}






function game(gamenumber){
    let playerwin=0;
    let opponentwin= 0;
    var win
    for(n=1;n<=gamenumber;n++){

        win= RPSgame();
        if (win){
            playerwin++
        }else if (!win){
            opponentwin++
        }
        console.log("player: "+playerwin+"   Opponenet: "+opponentwin)
       
    }

    console.log("you scored "+playerwin+" opponent scored "+opponentwin);
    if(playerwin>opponentwin){
        console.log("you won the game!")
    }else {
        console.log("you lost the game...")
    }


}




function RPSgame(){

    for(i=0; i===0; i=i){
        usermove =window.prompt("enter your move, either rock paper or scissors",'rock').toLowerCase()

        if (usermove==='rock'||usermove==='paper'||usermove==='scissors'){
            i=1;
            }
    }

    return RPSwin(move2number(usermove),random(1,3))

}


function RPSwin(player,opponent){

    const commentary = document.querySelector('#commentary');
    const winloss = document.querySelector('#winloss');
    const playercount = document.querySelector('#playercount');
    const opponentcount = document.querySelector('#opponentcount');
    let results = document.querySelector('#results');
    let finalresult = document.querySelector('#finalresultwrap')

    if(pCount >= 5){
        playing = true;
        results.style.display = 'none'
        finalresult.style.display ='flex'
        finalresult.firstElementChild.textContent = ' YOU WIN!!!!'
        return

    }
    if(oCount>=5){
        playing =true;
        results.style.display = 'none'
        finalresult.style.display ='flex'
        finalresult.firstElementChild.textContent = ' YOU LOSE!!!!'
        return
    }

    commentary.textContent = ("you used "+number2move(player)+" and your opponent used "
        +number2move(opponent));

    
    if(player-opponent===0){
        winloss.textContent= "Its a draw!";
        return
        
    }

    if(player-opponent===1 || player-opponent===-2){
        winloss.textContent="You win!";
        pCount++
        playercount.textContent=pCount;
        return
        
    }else{
        winloss.textContent= "you lose.."
        oCount++
        opponentcount.textContent = oCount;
        return

    }

    


}


function random(min,max) {
 
    return Math.floor(Math.random()*(max-min+1)+min);

}

function number2move(n){
    switch(n){
        case 1:
            return 'rock';
        break;
        case 2:
            return 'paper';
        break;
        case 3:
        return 'scissors'
    }
}

function move2number(move){
    switch(move){
        case 'rock':
            return 1;
        break;
        case 'paper':
            return 2;
        break;
        case 'scissors':
        return 3;
    }
}