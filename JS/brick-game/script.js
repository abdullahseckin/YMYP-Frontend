const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
document.addEventListener("keydown", myKeydownFunction);

let interval;
let oyunBasladiMi = false;
const height = canvas.height;
const width = canvas.width;
let x = width / 2;
let y = height - 30;
let dx = 2;
let dy = -2;
let ballColor = "#0095DD";
let cubukGenisligi = 50;
let cubukYuksekligi = 10;
let cubukX = (width - cubukGenisligi) / 2;
let cubukY = (height - cubukYuksekligi);
let tuglaSatirSayisi = 3;
let tuglaSutunSayisi = 5;
const tuglaGenislik = 75;
const tuglaYukseklik = 20;
const tuglaOffSetTop = 30;
const tuglaOffSetLeft = 30;
const tuglaPadding = 10;
const tuglalar = [];
for(let k = 0; k < tuglaSutunSayisi; k++){
    tuglalar[k] = [];
    for(let s = 0; s < tuglaSatirSayisi; s++){
        tuglalar[k][s] = {x: 0, y:0, status: 1};
    }
}


const oyunuCiz = () => {
    tahtayiTemizle();
    topuCiz(); 
    topunKonumunuDegistir();
    cubuguCiz();    
    tuglalariCiz();

    for(let sutun = 0; sutun < tuglaSutunSayisi; sutun++){
        for(let satir = 0; satir < tuglaSatirSayisi; satir++){
            const tugla = tuglalar[sutun][satir];
            if(tugla.status === 1){
                if(x > tugla.x && x < tugla.x + tuglaGenislik && y > tugla.y && y < tugla.y + tuglaYukseklik){
                    dy = -dy
                    tugla.status = 0;
                }
            }
        }
    }
}

const tahtayiTemizle = () => {
    ctx.clearRect(0, 0, width, height);
}

const topuCiz = () => {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

const topunKonumunuDegistir = () => {
    if(x + dx > width - 10 || x + dx < 10){
        dx = -dx;
        //ballColor = "red";
    }

    if(y + dy < 10){ //yukarı çarptığında
        dy = -dy;
    }else if(y + dy > cubukY - 5 && (x > cubukX)){ //çubuğa çarptığında
        dy = -dy
    }else if(y + dy > height - 10){ //aşağı çaprtığında
        dy = -dy;
    }    

    x += dx;
    y += dy;
}

const cubuguCiz = ()=> {
    ctx.beginPath();
    ctx.rect(cubukX,cubukY,cubukGenisligi,cubukYuksekligi);
    ctx.fill();
    ctx.closePath();
}

const tuglalariCiz = () => {
    for(let sutun = 0; sutun < tuglaSutunSayisi; sutun++){        
        for(let satir = 0; satir < tuglaSatirSayisi; satir++){
            if(tuglalar[sutun][satir].status === 1){
                const tuglaX = sutun * (tuglaGenislik + tuglaPadding) + tuglaOffSetLeft; //30
                const tuglaY = satir * (tuglaYukseklik + tuglaPadding) + tuglaOffSetTop; //302

                tuglalar[sutun][satir].x = tuglaX;
                tuglalar[sutun][satir].y = tuglaY;

                ctx.beginPath();
                ctx.rect(tuglaX, tuglaY, tuglaGenislik, tuglaYukseklik);
                ctx.fillStyle = ballColor;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

oyunuCiz();

const oyunuBaslat = () => {
    if(oyunBasladiMi === false){
        interval = setInterval(oyunuCiz,10);
        oyunBasladiMi = true;
    }else{
        clearInterval(interval);
        oyunBasladiMi = false;

        ctx.fillStyle = "black";
        ctx.font = "20px Verdena";
        ctx.fillText(`Oyun Duraklatıldı`,width/2 - 60,height/2)
    }    
}

function myKeydownFunction(e){
    console.log(e);
    if(e.key === "Right" || e.key === "ArrowRight"){
        if(cubukX + 5 > width - cubukGenisligi) return;

        cubukX += 5;
    }else if(e.key === "Left" || e.key === "ArrowLeft"){
        if(cubukX - 5 < 0)
        return;

        cubukX -= 5;
    }
}