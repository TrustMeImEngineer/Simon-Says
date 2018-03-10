/* global draw ellipse rect p processing width height size append random keyPressed keyReleased*/
var sketch = function(processing) {with(processing) {size(600, 600);background(30);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var start = false;
var keys = {};
var pattern = [round(random(0.5,4.4)),round(random(0.5,4.4))];
var patternInput = [];
var turn = false;
var ticks = 0;
var light = 0;
var pressed = false;
var gameOver = false;

onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    keys[e.keyCode] = e.type == 'keydown';
};
mousePressed = function() {
    pressed = true;
};

draw = function() {
    background();
    if(start==true) {
        stroke(0);
        fill(125);
        ellipse(300,300,400,400);
        if (turn==60||gameOver==true) {
        if ((32400)>=(pow(mouseX-300,2))+(pow(mouseY-300,2))&&mouseX>310&&mouseY<290) {
            if (pressed==false) {
                fill(200,0,0);
            }
            else {
                fill(255,0,0);
                patternInput = append(patternInput,1);
                document.getElementById('redBeep').play();
            }
        }
        else {
            fill(110,0,0);
        }
        arc(300,300,360,360,HALF_PI*3,TWO_PI);
        if ((32400)>=(pow(mouseX-300,2))+(pow(mouseY-300,2))&&mouseX>310&&mouseY>310) {
            if (pressed==false) {
                fill(0,0,200);
            }
            else {
                fill(0,0,255);
                patternInput = append(patternInput,2);
                document.getElementById('blueBeep').play();
            }
        }
        else {
            fill(0,0,110);
        }
        arc(300,300,360,360,0,HALF_PI);
        if ((32400)>=(pow(mouseX-300,2))+(pow(mouseY-300,2))&&mouseX<290&&mouseY>310) {
            if (pressed==false) {
                fill(200,200,0);
            }
            else {
                fill(255,255,0);
                patternInput = append(patternInput,3);
                document.getElementById('yellowBeep').play();
            }
        }
        else {
            fill(110,110,0);
        }
        arc(300,300,360,360,HALF_PI,PI);
        if ((32400)>=(pow(mouseX-300,2))+(pow(mouseY-300,2))&&mouseX<290&&mouseY<290) {
            if (pressed==false) {
                fill(0,200,0);
            }
            else {
                fill(0,255,0);
                patternInput = append(patternInput,4);
                document.getElementById('greenBeep').play();
            }
        }
        else {
            fill(0,110,0);
        }
        arc(300,300,360,360,PI,HALF_PI*3);
        fill(100);
        if(patternInput.length<pattern.length) {
            for(var i=0;i<patternInput.length;i++) {
                if(patternInput[i]!=pattern[i]) {
                    gameOver = true;
                }
            }
        }
        else {
            for(var i=0;i<patternInput.length;i++) {
                if(patternInput[i]!=pattern[i]) {
                    gameOver = true;
                }
            }
            turn=0;
        }
        rect(250,25,100,50);
        if(gameOver==false) {
            fill(0,255,0);
        }
        else {
            fill(255,0,0);
            text("Press Space to Restart",245,100);
        }
        rect(255,30,90,40);
        ticks=0;
        }
        else {
            ticks++;
            if(ticks%60==0&&ticks>0&&ticks/60<=pattern.length) {
                light=pattern[(ticks-60)/60];
            }
            else if (ticks%60==0&&ticks>0&&ticks/60>pattern.length) {
                pattern = append(pattern,round(random(0.5,4.4))) //add new color to pattern
                light=pattern[pattern.length-1];
                turn=1; //start player turn procedure
                patternInput=[];
            }
            if (ticks%60>=30) {
                light=0;
            }
            if (light==1) {
                fill(255,0,0);
                if(ticks%60==0) {
                    document.getElementById('redBeep').play();
                }
            }
            else {
                fill(100,0,0);
            }
            arc(300,300,360,360,HALF_PI*3,TWO_PI);
            if (light==2) {
                fill(0,0,255);
                if(ticks%60==0) {
                    document.getElementById('blueBeep').play();
                }
            }
            else {
                fill(0,0,100);
            }
            arc(300,300,360,360,0,HALF_PI);
            if (light==3) {
                fill(255,255,0)
                if(ticks%60==0) {
                    document.getElementById("yellowBeep").play();
                }
            }
            else {
                fill(100,100,0);
            }
            arc(300,300,360,360,HALF_PI,PI);
            if (light==4) {
                fill(0,255,0);
                if(ticks%60==0) {
                    document.getElementById('greenBeep').play();
                }
            }
            else {
                fill(0,100,0);
            }
            arc(300,300,360,360,PI,HALF_PI*3);
            if (turn>0) {
                turn++;
            }
        }
        noStroke();
        fill(125);
        rect(100,290,400,20);
        rect(290,100,20,400);
        fill(255);
        text('Score : '+pattern.length,285,550)
        if(gameOver==true&&keys[32]==true) {
            pattern = [round(random(0.5,4.4)),round(random(0.5,4.4))];
            patternInput = [];
            turn = false;
            ticks = 0;
            light = 0;
            gameOver = false;
        }
    }
    else {
        fill(255)
        text("Press 'Space' to Start!",250,300)
        if(keys[32]) {
            start = true;
        }
    }
    pressed=false;
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
