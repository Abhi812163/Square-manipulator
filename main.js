noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(900,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#adadad');
    fill('#00ff3c');
    stroke('#ff1100');
    square(noseX,noseY,difference);
    document.getElementById("size").innerHTML="Width and Height of the sqaure is = "+ difference+"px";
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x= "+ noseX + " nose y= "+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
        console.log("leftWrist x= "+leftWristX + " rightWrist x = " + rightWristX + " difference= " + difference);
    }
}  