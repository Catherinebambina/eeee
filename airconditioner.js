Status = "";
airconditioner_image = "";

function preload(){
    airconditioner_image = loadImage("https://cdn.vox-cdn.com/thumbor/JXp4IjK2sIu3cuF-kCbIvikVM20=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19521773/retrofit_ductless.jpg");
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
    image(airconditioner_image,0,0,640,350);
}