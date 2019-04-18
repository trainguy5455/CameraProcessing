//const cv = require("opencv4nodejs");

const ut = require("./util");
const cv = ut.cv;

const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);
//const { grabFrames, drawRectAroundBlobs } = require('./utils');

const devicePort = 0;
const wCap = new cv.VideoCapture(0);

let frame = wCap.read();

//let fgbg = new cv.BackgroundSubtractorMOG2(1,15,true);

async function runStuff() {
    try {
      const delay = 17;
      let done=false;
        while(!done) {
            let frame = wCap.read();
            
            if(frame.empty) {
                wCap.reset();
                frame = (wCap.read());
            }
            let inFrame = frame.resize(400,400);
            let outFrame = inFrame; // Redefine after processing
            //cv.imshow("Camera Processing In", inFrame);
            
            // Handle The Image
            
            //const grayImg = await inFrame.bgrToGrayAsync();
            //const { objects, numDetections } = await classifier.detectMultiScaleAsync(grayImg);
            //console.log(numDetections.length);
            /*
            for(var i = 0; i < objects.length; i++) {
                /*outFrame.drawRectangle(
                  objects[i],
                  new cv.Vec3(255,0,0), 1,
                  cv.LINE_8
                );
                outFrame.drawEllipse(
                  new cv.RotatedRect(new cv.Point2(objects[i].x+(objects[i].width/2),objects[i].y+(objects[i].height/2)),new cv.Size(objects[i].width,objects[i].height), 1),
                  new cv.Vec3(0,255,0),
                  3
                );
              }*/

            //outFrame.putText(("Detections: " + String(objects.length)),new cv.Point2(0,10), 1, 1, new cv.Vec3(0,0,255));
            //cv.imshow("Camera Processing Out Before", outFrame.resize(500,500));
            //hsv = outFrame.cvtColor(outFrame, cv.COLOR_BGR2HSV);
            //mask = outFrame.inRange(new cv.Vec3(100,0,0), new cv.Vec3(255,100,100));
            mask = outFrame.blur(new cv.Size(2,2)).inRange(new cv.Vec3(0,0,200), new cv.Vec3(100,100,255)).blur(new cv.Size(50,50));
            let masked = inFrame.copy(mask);
            let blured = inFrame.blur(new cv.Size(10,10));

            ut.drawRectAroundBlobs(mask, outFrame, 10);
            //masked = masked.goodFeaturesToTrack(cv.CV_8UC1,0.01,1,mask);
            
            //for(var i = 0; i < objects.length; i++) {
              //console.log(objects);
              /*outFrame.drawRectangle(
                objects[i],
                new cv.Vec3(255,0,0), 1,
                cv.LINE_8
              );
              /*outFrame.drawEllipse(
                new cv.RotatedRect(new cv.Point2(objects[i].x+(objects[i].width/2),objects[i].y+(objects[i].height/2)),new cv.Size(objects[i].width,objects[i].height), 1),
                new cv.Vec3(0,255,0),
                3
              );*/
            //}
            //mask = fgbg.apply(outFrame);
            //mask = outFrame.flip(0);//.bitwiseNot(inFrame);
            //mask = outFrame.copyTo(outFrame, mask);
            // End Handle Image
            // End Handle Image
            //let asdf = outFrame;
            cv.imshow("Camera Processing Blured", masked.blur(new cv.Size(10, 10)))
            //outFrame.copyTo(asdf, mask);
            //cv.imshow("Camera Processing masked", asdf.resize(480, 620))
            //cv.imshow("Camera Processing Out", outFrame);
            //console.log(inFrame);
            cv.imshow("inFrame", inFrame);
            //cv.imshow("outFrame", objects);
            cv.imshow("inFrame Masked", masked);
            const key = cv.waitKey(delay);
            done = false;
            if(key != -1)
                done = true;
                // End Handle Image
        }
    } catch (err) {
        console.log(err);
        //const grayImg = await img.bgrToGrayAsync();
        //const { objects, numDetections } = await classifier.detectMultiScaleAsync(grayImg);
    }
}

runStuff();

// const spawn = require('child_process').spawn;
// const fs = require("fs");


// const config = require("./configure.js");

// const version = `${config.version_major}.${config.version_minor}.${config.version_patch}`;

// //console.log(config); 

// function main() {
//     console.log("Version: V" + version);
//     if(fs.existsSync(config.cvsys.win_path)) {
//         console.log("Found CVSYS At Path" + config.cvsys.w);
//     }
//     6
// }

// function findFile(files) {
//     // for(var )
// }

// main(); // Start our program