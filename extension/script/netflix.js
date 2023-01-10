// Netflix player API

var bottom_control = document.getElementsByClassName(
  "player-control-button player-play-pause"
);
bottom_control.addEventListener("click", () => {
  var videoElements = document.querySelectorAll("video")[0];
  chrome.runtime.sendMessage({
    event: "syncNetflix",
    data: [videoElements.currentTime,videoElements.paused],
  });
});

