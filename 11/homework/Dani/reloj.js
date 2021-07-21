const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnRestart = document.getElementById("restart");
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d")
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = 15;
ctx.shadowColor = '#28d1fa';

//convertir Grados a Radianes
function gradToRad(grados) {
    var factor = Math.PI / 180
    return grados * factor
}

//Dibujar las Horas
function horas(actual) {
    var ang;
    var num;

    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 61; num++) {

        if (num == actual) {
            ctx.font = "bolder 25px Arial";
        } else { ctx.font = "lighter 20px Arial"; }

        ang = num * gradToRad(6);
        ctx.rotate(ang);
        ctx.translate(0, -220 * 0.85);
        ctx.rotate(-ang);
        ctx.fillStyle = '#28d1fa';
        if (num % 5 == 0) {
            ctx.fillText((num / 5).toString(), 270, 250);
        }
        else {
            ctx.fillText(".", 270, 250);
        }
        ctx.rotate(ang);
        ctx.translate(0, 220 * 0.85);
        ctx.rotate(-ang);
    }
}

function Formato(digito) {
    if (digito < 10) { digito = "0" + digito.toString() }
    return digito.toString();
}

//cronometro


function reloj(seconds,minutes,hours){
// Segundos
ctx.beginPath();
ctx.arc(270, 250, 130, gradToRad(270), gradToRad((seconds * 6) - 90));
ctx.stroke();
//Minutos
ctx.beginPath();
ctx.arc(270, 250, 160, gradToRad(270), gradToRad((minutes * 6) - 90));
ctx.stroke();
//horas
ctx.beginPath();
ctx.arc(270, 250, 210, gradToRad(270), gradToRad((hours * 30) - 90));
ctx.stroke();

//display
horas(seconds);
ctx.font = "30px Arial";
ctx.fillStyle = '#28d1fa';
ctx.fillText(Formato(hours) + ":" + Formato(minutes) + ":" + Formato(seconds), 270, 250);
}

StopWatch.counterHasChange = function (hours, minutes, seconds) {
    ctx.fillStyle = '#333333';
    ctx.fillRect(0, 0, 500, 500);


    //Quitar comentario para ver la hora actual(lo use para calibrar)
    /*var now = new Date();
     var today = now.toDateString();
     var time = now.toLocaleTimeString();
     var hours =now.getHours();
     var minutes = now.getMinutes();
     var seconds = now.getSeconds();
     var milis = now.getMilliseconds();*/
reloj(seconds,minutes,hours);
    

}
reloj(0,0,0);

btnStart.addEventListener("click",()=>StopWatch.start());
btnRestart.addEventListener("click",()=>StopWatch.restart());
btnStop.addEventListener("click",()=>StopWatch.stop());