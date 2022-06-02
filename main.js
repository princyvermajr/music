song="";
songtwo="";
score_right_wrist=0;
score_left_wrist=0;

left_wrist_x=0;
left_wrist_y=0;

right_wrist_x=0;
right_wrist_y=0;


function preload(){
song=loadSound("music.mp3");
songtw0=loadSound("faded.mp3")

}
function setup(){
canvas=createCanvas(500,400);
video=createCapture(VIDEO);
canvas.center();
video.hide();

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);

}
function draw(){
image(video,0,0,500,400);
fill("blue");
stroke("black");

if(score_right_wrist > 0){
    circle(right_wrist_x,right_wrist_y,20);
}
}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}
function modelLoaded(){
    console.log("posenet is loaded");
}

function gotPoses(result){
    console.log(result)
if(result.length > 0){
console.log(result);
score_right_wrist=result[0].pose.keypoints[10].score;
score_left_wrist=result[0].pose.keypoints[9].score;

right_wrist_x=result[0].pose.rightWrist.x;
right_wrist_y=result[0].pose.rightWrist.y;

left_wrist_x=result[0].pose.leftWrist.x;
left_wrist_y=result[0].pose.leftWrist.y;

}
}
