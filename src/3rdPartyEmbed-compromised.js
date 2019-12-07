// getDisplayMedia: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia
// MediaStreamConstraints:  https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints
async function startCapture(MediaStreamConstraints = {}) {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia(
      MediaStreamConstraints
    );
  } catch (err) {
    console.error("Error: " + err);
  }
  return captureStream;
}

const btn = document.getElementById("btn-1");

btn.addEventListener("click", _ => {
  startCapture()
    .then(_ => {
      console.log("screen capture was successful :(");
    })
    .catch(_ => {
      console.log("screen capture was blocked :)");
    });
});
