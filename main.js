const butStart=document.querySelector(`#butstart`)
const main=document.querySelector(`main`)
const sectionStart=document.querySelector(`section[id="windowStart"]`)
const sectionSettings=document.querySelector(`section[id="windowSettings"]`)
const aside=document.querySelector(`aside`)
const butPlay=document.querySelector(`#butPlay`)
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
})
//wyjscie
butQuit.addEventListener(`click`,function(){
    sectionStart.classList.toggle(`hidden`)
    main.classList.toggle(`hidden`)
    aside.classList.toggle(`hidden`)
    })
//hit
butHit.addEventListener(`click`, ()=>{

})
//stand
butStand.addEventListener(`click`, ()=>{

})
//losowanie kart
function losowanie(){

}
//czyszczenie gry
function reset(){
    
}
