const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// ビデオを再生・停止
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// 再生と停止のアイコンを切り替える
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa-solid fa-play fa-xl"></i>';
  } else {
    play.innerHTML = '<i class="fa-solid fa-pause fa-xl"></i>';
  }
}

// 進行状況と再生時間を更新
function updateProgress() {
  return true;
}

// ビデオの時間と進行状況をセット
function setVideoProgress() {
  return true;
}

// ビデオを停止
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// イベントリスナー
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
