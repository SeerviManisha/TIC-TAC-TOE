console.log("welcome to the game");
let win = new Audio("winninggame.mp3");
let turn =new Audio("turnterm.wav");
let over = new Audio("gameover.wav");
let turn1 = "X";
let isgameover=false;
const changeturn=()=>
{
    return turn1 === "X" ? "0" : "X";
};
const checkwin=()=>
{
     let boxtext=document.getElementsByClassName("boxtext");
     let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7], 
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ]
     wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            e.forEach(index => {
                document.getElementsByClassName("box")[index].classList.add("winning");
            });
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " WON"
            isgameover=true
            document.querySelector('.image').getElementsByTagName('img')[0].style.width="120px";
            win.play();
        }
     })
};
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
   element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn1;
            turn1=changeturn();
            turn.play();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn1;
        }}

    });
});
reset.addEventListener('click',()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    Array.from(boxtexts).forEach(element =>{
              element.innerText=""
    });
    Array.from(boxes).forEach(element => {
        element.classList.remove("winning");
    });
    turn1="X"
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn1;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width="0px";
})