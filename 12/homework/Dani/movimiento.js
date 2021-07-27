var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d")
const btnStart = document.getElementById("start");
const labelscore = document.getElementById("scorev");
var score = 0;
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.shadowBlur = 5;
ctx.shadowColor = '#28d1fa';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function drawRect(ini){
    ctx.fillStyle = '#333333';
    ctx.fillRect(0, 0, 500, 500);
    ctx.shadowColor = '#28d1fa';
    ctx.strokeStyle = '#28d1fa';
    ctx.strokeRect(0, 0, 500, 500)
    ctx.font = "75px Arial";
    if(ini==true){ctx.fillText("Snake Dani",50,250)}
}

function draw(){
    var largo = snake.posx.length
    drawRect(false)
    ctx.beginPath();
    ctx.font = "10px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for(i=0; i<largo ;i++)
    { 
        if (i==0){
            ctx.strokeStyle = '#ff0000';
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.shadowBlur = 5;
            ctx.arc(snake.posx[i], snake.posy[i], 5,0,360);
            ctx.stroke()
        }else{
        ctx.shadowColor = '#28d1fa';
        ctx.strokeStyle = '#28d1fa';
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.shadowBlur = 5;
        ctx.arc(snake.posx[i], snake.posy[i], 5,0,360);
        ctx.stroke()
        ctx.fillStyle = '#333333';
        ctx.fillText("+", snake.posx[i], snake.posy[i])} 
    }
    ctx.beginPath();
    ctx.fillStyle = '#ff0000';
    ctx.strokeStyle = '#ff0000';
    ctx.shadowColor ='#ff0000';
    ctx.arc(food.posx[0], food.posy[0], 5,0,360);
    ctx.stroke()
    ctx.fillText("*", food.posx[0], food.posy[0]);
}

function colide(usx,usy,ufx,ufy){
    if(usx==ufx && usy==ufy ){
        return true;
    }
}

function movesnake(){
    var largo = snake.posx.length
    var headx = snake.posx[0]
    var heady = snake.posy[0]
    var colf = colide(snake.posx[0],snake.posy[0],food.posx[0],food.posy[0])
    if(colf == true){
        snake.posx[largo] = snake.posx[largo-1]
        snake.posy[largo] = snake.posy[largo-1]
        food.posx[0] =  getRandomInt(2,48)*10
        food.posy[0] =  getRandomInt(2,48)*10
        snake.speed = 60 + 200 - (largo*5)
        score = score + 50 
        snake.stops()
        snake.move()
    }
    for(i=largo-1;i>0;i--){
        var lost = colide(snake.posx[0],snake.posy[0],snake.posx[i],snake.posy[i])
        if (lost == true){
            snake.stops()
            ctx.shadowColor ='#ff0000';
            ctx.font = "75px Arial";
            ctx.fillText("Game Over",250,258)
            btnStart.removeAttribute('hidden')
            }else{
        snake.posx[i]=snake.posx[i-1]
        snake.posy[i]=snake.posy[i-1]}
    }

    switch (snake.dir)
        {
            case "left":
                if(snake.posx[0] < 10){snake.posx[0] = 500
                }else{snake.posx[0] = headx-10}
                break           
            case "right":
                if(snake.posx[0] > 490){snake.posx[0] = 0
                }else{snake.posx[0] = 10 + headx}
                break
                                                    
            case "up":
                if(snake.posy[0] < 10){snake.posy[0] = 500
                }else{snake.posy[0] = heady-10}
                break                          
            case "down":
                if(snake.posy[0] > 490){snake.posy[0] = 0
                }else{snake.posy[0] = heady+10}
                break
        }      
        labelscore.innerText = score.toString()
}
snake.movechange = function (posx,posy,dir){
    draw()
    movesnake()
 }

 const changedir = (e) => {
    console.log(e)

    switch (e.key) {
        case "a":
           if(snake.dir != "right"){snake.dir="left"}
            return
        case "s":
            if(snake.dir != "up"){snake.dir="down"}
            return
        case "d":
            if(snake.dir != "left"){snake.dir="right"}
            return
        case "w":
            if(snake.dir != "down"){snake.dir="up"}
            return
    }
}


function startgame(){

    snake.posx=[250,240,230,220,210,200]
    snake.posy=[250,250,250,250,250,250]
    snake.speed=200
    snake.dir="right"
    food.posx[0] =  getRandomInt(2,48)*10
    food.posy[0] =  getRandomInt(2,48)*10
    score=0 
    btnStart.setAttribute('hidden',true)
    snake.move()
}

drawRect(true)

btnStart.addEventListener("click",()=>startgame());

addEventListener('keyup', changedir)

