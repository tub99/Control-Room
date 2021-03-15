const p = new SimplePeer();

p.on("connect", () => {
  console.log("hi someone just connected");
});

p.on("stream", (stream) => {
  // got remote video stream, now let's show it in a video tag
  var video = document.querySelector("video");

  if ("srcObject" in video) {
    video.srcObject = stream;
  } else {
    video.src = window.URL.createObjectURL(stream); // for older browsers
  }

  video.play();
});
