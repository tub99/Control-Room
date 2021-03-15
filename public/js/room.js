const video = document.querySelector("video");
const socket = io();

function gotStream(stream) {
  const p = new SimplePeer({
    initiator: true,
    stream: stream,
  });
  console.log("Received local stream");
  video.srcObject = stream;
  video.play();
  window.localStream = stream;
}

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: false,
  })
  .then(gotStream)
  .catch((e) => console.log("getUserMedia() error: ", e));
