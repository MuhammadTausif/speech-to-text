let audioElement = document.getElementById("audio");
document.getElementById("startButton").addEventListener("click", function () {
    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => audioElement.srcObject = stream)
}, false);
