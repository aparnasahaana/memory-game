const cardArray = [
{name:'dog',
icon: '<i class="fa-solid fa-dog"></i>'},
{name:'car',
icon:'<i class="fa-solid fa-car"></i>'},
{name:'fish',
icon: '<i class="fa-solid fa-fish"></i>'},
{name:'cat',
icon:'<i class="fa-solid fa-cat"></i>'},
{name:'car',
icon: '<i class="fa-solid fa-car"></i>'},
{name:'hippo',
icon:'<i class="fa-solid fa-hippo"></i>'},
{name:'dog',
icon: '<i class="fa-solid fa-dog"></i>'},
{name:'hippo',
icon:'<i class="fa-solid fa-hippo"></i>'},
{name:'fish',
icon: '<i class="fa-solid fa-fish"></i>'},
{name:'cat',
icon:'<i class="fa-solid fa-cat"></i>'},
{name:'home',
icon: '<i class="fa-solid fa-home"></i>'},
{name:'home',
icon:'<i class="fa-solid fa-home"></i>'}
];
shuffle();
var person = prompt("Enter your name",'Player');
let i=0;
const j = setInterval(timerDiv,1000);

function timerDiv(){
 
    document.getElementById("timer").innerHTML=i;

    i++;
}

/*var timeLeft = 30;
var timerId = setInterval(countdown, 500);
document.getElementById("timer").innerHTML=timeLeft;
clearTimeout(timerId);*/
const parentdiv = document.getElementById("structure");


showCards();
let flipCard = [];
let matchpair = 0;
function shuffle()
{
    for (let i = cardArray.length-1; i>=0; i--)
    {
        const randIndex=Math.floor(Math.random()*(i));
        [cardArray[i],cardArray[randIndex]]=[cardArray[randIndex],cardArray[i]];

    }
}

function showCards()
{

    cardArray.forEach((curr,index,arr) =>{
        const card=document.createElement('div');
        
        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');
        parentdiv.append(card); 
        /*document.getElementById(index).innerHTML = cardArray[index].icon;
    */
   card.addEventListener('click', flip);
        });
  
}

function flip()
{
    if (flipCard.length < 2 && this.classList.contains('active')){
    let cardId = this.getAttribute('id');
    flipCard.push(this);
    this.classList.remove('cardback');
    this.innerHTML = cardArray[cardId].icon;
    if(flipCard.length == 2){

        setTimeout(checkPair,1000);
    }

    }
}

function checkPair(){
    let cardOne = flipCard[0].getAttribute('id');
    let cardTwo = flipCard[1].getAttribute('id');
    
    if(cardArray[cardOne].name === cardArray[cardTwo].name){
        
        flipCard[0].style.border = "none";
        flipCard[1].style.border = "none";
        flipCard[0].innerHTML = "";
        flipCard[1].innerHTML = "";
        flipCard[0].style.backgroundColor = "#e6e8ec";
        flipCard[1].style.backgroundColor = "#e6e8ec";
        flipCard[0].classList.remove('active');
        flipCard[1].classList.remove('active');
        matchpair++;
        checkGameOver();
    }
    else{
        flipCard[0].classList.add('cardback');
        flipCard[1].classList.add('cardback');
        flipCard[0].innerHTML = "";
        flipCard[1].innerHTML = "";
    }
    flipCard = [];
}

function checkGameOver(){
    if (matchpair == (cardArray.length/2))
    {
        clearInterval(j);
        document.getElementById("timer").style.display="none";
        while(parentdiv.firstChild){
            parentdiv.removeChild(parentdiv.firstChild);
        }
        parentdiv.innerHTML="Well done" + " " + person + "<br/> You finished in " + (i-1) + " Seconds";
        
        parentdiv.classList.remove("game");
        parentdiv.classList.add("gameOver");
       /* localStorage.setItem(person,i);*/
    }
}

/*function setItem(){
    myArray = JSON.parse(localStorage.getItem("myArray"));
    if(myArray == null) myArray = [];
    myObj = {"name":person, "time":i-1};
    myArray.push(myObj);
    localStorage.setItem("myArray",JSON.stringify(myArray));
    parentdiv.innerHTML=JSON.parse(localStorage.getItem("myArray".time));
   

    }*/

    


