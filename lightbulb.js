Status = "";
lightbulb_image = "";

function preload(){
    lightbulb_image = loadImage("https://media.newyorker.com/photos/59097813c14b3c606c108d67/master/pass/Mackinnon-LED-Quandary.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
}

function modelLoaded(){
    console.log("model done");
    Status = true;
    object_Detector.detect(fan_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(fan_image,0,0,640,350);
}