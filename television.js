Status = "";
fan_image = "";

function preload(){
    fan_image = loadImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-clean-tv-01-1646859499.jpg");
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



