Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 90,
    constraints: {
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach('#camera')

function capture_image() {
    Webcam.snap(function (data_uri) {
        document.getElementById("results").innerHTML = '<img id = "identify_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded() {
    console.log('modelLoaded');
}
function identify_image() {
    img = document.getElementById('identify_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("empty").innerHTML = results[0].label;
        
    }
}