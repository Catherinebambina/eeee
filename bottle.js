Status = "";
bottle_image = "";

function preload(){
    bottle_image = loadImage("https://cdn.shopify.com/s/files/1/0050/5217/0330/t/4/assets/2021-home-slider-3.jpg?v=89981409261065598061615419479&1659312000184");
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