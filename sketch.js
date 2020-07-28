var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(windowWidth-500,windowHeight-250); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(25);

    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke("#E84C3D");
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //drawing mins hand
    push();
    rotate(mnAngle);
    stroke("lightgreen");
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke("skyblue");
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke("#E84C3D");
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke("lightgreen");
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke("skyblue");
    arc(0,0,260,260,0,hrAngle);

    fill("#E84C3D");
    noStroke();
    rotate(90);
    textSize(20);
    text("This color represents the second's hand", windowWidth-500-600,windowHeight-900);
    fill("lightgreen");
    text("This color represents the minute's hand", windowWidth-500-600,windowHeight-900+40);
    fill("skyblue");
    text("This color represents the hour's hand", windowWidth-500-600,windowHeight-900+40+40);
}