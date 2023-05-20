const butStart=document.querySelector(`#butstart`)
const main=document.querySelector(`main`)
const sectionStart=document.querySelector(`section[id="windowStart"]`)
const sectionSettings=document.querySelector(`section[id="windowSettings"]`)
const aside=document.querySelector(`aside`)
const butPlay=document.querySelector(`#butPlay`)
const winner=document.querySelector(`#winner`)
const article=document.querySelector(`article`)
const butBack=document.querySelector(`#back`)
console.log(winner)
//start
butStart.addEventListener(`click`,function(){
sectionStart.classList.toggle(`hidden`)
sectionSettings.classList.toggle(`hidden`)
// main.classList.toggle(`hidden`)
// aside.classList.toggle(`hidden`)
})
//przyciski
const butHit=document.querySelector(`#hit`)
const butStand=document.querySelector(`#stand`)
const butQuit=document.querySelector(`#quit`)
//play
butPlay.addEventListener(`click`,()=>{
    main.classList.toggle(`hidden`)
    aside.classList.toggle(`hidden`)
    sectionSettings.classList.toggle(`hidden`)
    game();
    
})
butBack.addEventListener(`click`, ()=>{
    sectionStart.classList.toggle(`hidden`)
    article.classList.toggle(`hidden`)
})

//wyjscie
butQuit.addEventListener(`click`,function(){
    sectionStart.classList.toggle(`hidden`)
    main.classList.toggle(`hidden`)
    aside.classList.toggle(`hidden`)
    })

//losowanie kart
function losuj(tablica){
    let element=tablica[Math.floor(Math.random() * tablica.length)];
    return element;
}
//tworzenie talii
function createDeck(){
// ile talii
const decknum=document.querySelector(`#decknum`).value
//tworzenie tablicy z kartami z ilości talii
let cardTab=[];

for(let i=0;i<4;i++){
    let color1=cardColor[i]
    for(let j=0;j<decknum;j++){
      
    talia.forEach(element => {
        
        
        element={name:element.name, value:element.value, color:color1}
//trzeba ponownie zadeklarowac tablice obiektow zeby color w kazdej petli byl inny
//bez tego zawsze bedzie ostatni color z z petli for(i)
        cardTab.push(element)
    });
}
}
return cardTab
}


//pierwsze karty
function preparation(deck,playerCards,croupierCards){
    for(let i=0;i<2;i++){
let card=losuj(deck)
playerCards.push(card)
deck.splice(deck.indexOf(card),1)
card=losuj(deck)
croupierCards.push(card)
deck.splice(deck.indexOf(card),1)
}
}
//zamiana obiektu na tablice stringow
function change(tablica){
    let elem=[];
tablica.forEach(element => {
    elem.push(`${element.name} ${element.color} `)
});
return elem;
}
function suma(tablica){
    let suma=0
    tablica.forEach(element => {
        suma+=(element.value)
    });
    return suma;
}

//wyswietlanie danych
function display(playerCardsVisible,croupierCardsVisible,playerSum,croupierSum){
const playerDisplay=document.querySelector(`#userDisplay`)
const croupierDisplay=document.querySelector(`#croupierDisplay`)
const playerSumDisplay=document.querySelector(`#playerSum`)
const croupierSumDisplay=document.querySelector(`#croupierSum`)
playerDisplay.innerText=playerCardsVisible; 
croupierDisplay.innerText=croupierCardsVisible;
playerSumDisplay.innerText=playerSum;
croupierSumDisplay.innerText=croupierSum;
}
//czy przekroczono 21pkt
function czykoniec(playerSum,croupierSum){
    if(playerSum>21||croupierSum>21){return 1}
    else return 0;
}
//czy wystepuje as
function czyas(playerCards){
    return(playerCards.some(obj=>(obj.name==="As")))
}
//zakonczenie rozgrywki
function koniec(playerSum,croupierSum){
if (playerSum>croupierSum&&playerSum<=21){return "gracz"}
else return "krupier"

}
function game(){
    let i=1;
//hit
butHit.addEventListener(`click`, ()=>{
    let card=losuj(deck)
    
    i++;
    playerCards.push(card)
    if(czyas(playerCards))
    {
        if (playerSum<=10){playerCards[i].value=11}
    }
    deck.splice(deck.indexOf(card),1)
    playerSum=suma(playerCards)
    playerCardsVisible.push(change(playerCards)[i])
    display(playerCardsVisible,croupierCardsVisible,playerSum,croupierSum)
    if(czykoniec(playerSum,croupierSum)){
        let gameWinner=koniec(playerSum,croupierSum)
    winner.innerText=`${gameWinner}`
    main.classList.toggle("hidden")
    aside.classList.toggle("hidden")
    article.classList.toggle("hidden")
    }
})
//stand
butStand.addEventListener(`click`, ()=>{
koniec(playerSum,croupierSum)
})
const playerCards=[]
const playerCardsVisible=[]
const croupierCards=[]
const croupierCardsVisible=[]
let playerSum=0;
let croupierSum=0;
//wstepne przygotwanie zmiennych/lub czyszczenie po poprzedniej grze
const deck=createDeck();
preparation(deck,playerCards,croupierCards);
if(czyas(playerCards))
    {if (playerSum<=10){
        let i=0;
        i=playerCards.findIndex(obj=>obj.name==="As")
        playerCards[i].value=11
        }
    }
if(czyas(croupierCards)){
    if(croupierSum>=11){
    let i=0;
    i=playerCards.findIndex(obj=>obj.name==="As")
    croupierCards[i].value=11;
}
}

playerSum+=suma(playerCards)
croupierSum+=suma(croupierCards)
playerCardsVisible.push(change(playerCards))
croupierCardsVisible.push(change(croupierCards))
display(playerCardsVisible,croupierCardsVisible,playerSum,croupierSum)
if(czykoniec(playerSum,croupierSum)){
    let gameWinner=koniec(playerSum,croupierSum)
    winner.innerText=`${gameWinner}`
    main.classList.toggle("hidden")
    aside.classList.toggle("hidden")
    article.classList.toggle("hidden")
    
    
   
    }
}
