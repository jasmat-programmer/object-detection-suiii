img = "";
status = "";
objects = [];
function back(){
    window.location = "index.html"
}
function preload(){
img = loadImage('lego.jpg');
}
function setup(){
    canvas = createCanvas(700,520);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status = detecting object"
}
function draw(){
    if(status != ""){
        for ( i = 0; i<objects.length; i++){
         document.getElementById("status").innerHTML = "status = object detected"
        percernt = floor(objects[i].confidence * 100);
        fill("red");
        text(objects[i].label + objects[i].percent + "%" , objects[i].x - 15,objects[i].y +15)
        noFill()
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        stroke("red")
    }
    }
}
function modelLoaded(){
    console.log("congrats your model is loaded!!")
    status = true
    objectDetector.detect(img , gotResult)
}
function gotResult(error,results){
    if(error){
        console.log("yo there is an error!!");
    }
    console.log(results);
    objects = results

}