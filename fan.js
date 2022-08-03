Status = "";
fan_image = "";

function preload(){
    fan_image = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Quat.JPG/1200px-Quat.JPG");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
}

function modelLoaded(){
    console.log("odel done");
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