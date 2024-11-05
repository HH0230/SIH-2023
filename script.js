const video = document.getElementById('videoElement');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Access the webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(error => {
        console.error("Error accessing the camera: ", error);
    });

// Load the handpose model
let model;
handpose.load().then(loadedModel => {
    model = loadedModel;
    detectHands();
});

// Function to detect hands and show popup
async function detectHands() {
    const predictions = await model.estimateHands(video);
    if (predictions.length > 0) {
        showPopup();  // Show popup whenever a hand is detected
    }
    requestAnimationFrame(detectHands);
}

// Show the warning popup
function showPopup() {
    popup.classList.remove('hidden');
}

// Close the popup
closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
});

