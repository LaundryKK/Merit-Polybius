var angle = 400;
var scalar = 150;
var startX = 200;
var startY = 200;

function setup(){
    angleMode(degrees);
}

draw = function() {
    var x = startX + scalar * cos(angle);
    var y = startY + scalar * sin(angle);
    background(255, 255, 255);
    ellipse(200, 200, 300, 300);
    ellipse(x, y,25,25  );
    if(keyIsPressed && keyCode === LEFT){
        
    angle++;
    }
    else if(keyIsPressed && keyCode === RIGHT){
        angle--;
    }
};
