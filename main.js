/**
 * Created by andrii on 21.03.2018.
 */
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
    canvasApp();
}
function canvasSupport(e) {
    return !!e.getContext;
}
function canvasApp() {
    var canvas = document.getElementById("myCanvas");

    if (!canvasSupport(myCanvas)) {
        return;
    }

    var ctx = canvas.getContext("2d");
    var w = (canvas.width = window.innerWidth);
    var h = (canvas.height = window.innerHeight);
    var yPositions = Array(300)
        .join(0)
        .split("");

    function runMatrix() {
        if (typeof Game_Interval != "undefined") clearInterval(Game_interval);
        Game_Interval = setInterval(drawScreen, 40);
    }

    function drawScreen() {
        ctx.fillStyle = "rgba(0,0,0,.05)";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#0f0";
        ctx.font = "15px Georgia";
        yPositions.map(function(y, index) {
            text = String.fromCharCode(1e2 + Math.random() * 33);
            x = index * 10 + 15;
            ctx.fillText(text, x, y);
            if (y > 500 + Math.random() * 1e4) {
                yPositions[index] = 0;
            } else {
                yPositions[index] = y + 15;
            }
        });
    }

    runMatrix();
}
