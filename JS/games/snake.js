const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

document.addEventListener("keydown",tusHareketleri);

let canvasHeight = canvas.clientHeight;
let canvasWidth = canvas.clientWidth;
let x = 10;
let y = 10;
let hareketX = 0;
let hareketY = 0;
let elmaX = 5;
let elmaY = 5;
let konum = 20;
let boyut = 18;

function oyunuCiz(){
    ekraniTemizle();
    yilaniCiz();
    elmayiCiz();

    let sonucX = x+ hareketX;
    let sonucY = y+ hareketY;

    if(sonucY < 0){
        sonucY = 19
    }else if(sonucY > 20){
        sonucY = 0
    }

    if(sonucX < 0){
        sonucX = 19
    }else if(sonucX > 19){
        sonucX = 0;
    }

    x = sonucX;
    y = sonucY;

    setTimeout(oyunuCiz,100);
}

function ekraniTemizle(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
}

function yilaniCiz(){
    ctx.fillStyle = "white";
    ctx.fillRect(x * konum,y * konum,boyut,boyut)
}

function elmayiCiz(){
    ctx.fillStyle = "red";
    ctx.fillRect(elmaX * konum, elmaY * konum,boyut,boyut);
}

function tusHareketleri(e){
    if(e.keyCode === 38){ //yukarı
        hareketY--;
        hareketX = 0;
    }else if(e.keyCode === 37){ //sola
        hareketX--;
        hareketY = 0;
    }else if(e.keyCode === 39){ //sağa
        hareketX++;
        hareketY = 0;
    }else if(e.keyCode === 40){ //aşağı
        hareketY++;
        hareketX = 0;
    }
    console.log(e.keyCode);
}

oyunuCiz();