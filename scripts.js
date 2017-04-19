const player = document.querySelector(".player");
const video = player.querySelector(".video-content");
const toggleButton = player.querySelector(".pp-button");
const progressBar = player.querySelector(".progress-bar-div");
const progressBarFilled = player.querySelector(".progress-bar-div-filled");
const volumeBar = player.querySelector(".volume-bar");
const skipButtons = player.querySelectorAll(".skip");
const fullScreenButton = player.querySelector(".full-screen-button");
let clickFlag = false;
function toggle() {
	if(video.paused) {
		video.play();
		toggleButton.textContent = `❚❚`;
	} else {
		video.pause();
		toggleButton.textContent = `►`;
	}
}
function skipTime(e) {
	video.currentTime += parseFloat(this.dataset.skip);
}
function changeProgressBar(e) {
	if(video.paused) {
		toggle();
	}
	const position = (e.offsetX / progressBar.offsetWidth) * video.duration;
	video.currentTime = position;
}
function changeVolume() {
	video.volume = this.value;
	console.log("volume bar = " + this.value);
	console.log("video volume" + video.volume);
}
function handleProgress() {
	const videoTime = video.duration;
	const position = (video.currentTime / videoTime) * 100;
	progressBarFilled.style.flexBasis = `${position}%`;
}
// function makeFullScreen() {
// 	console.log("full yay");
// 	player.classList.add("full-screen");
// }
console.dir(video);
toggleButton.addEventListener("click", toggle);
video.addEventListener("click", toggle);
skipButtons.forEach((button) => button.addEventListener("click", skipTime));
// Mouse Events for progress bar
progressBar.addEventListener("click", changeProgressBar);
progressBar.addEventListener("mouseup", () => {
	clickFlag = false;
});
progressBar.addEventListener("mousedown", () => {
	clickFlag = true;
});
progressBar.addEventListener("mouseover", () => {
	if(clickFlag) {
		changeProgressBar;
	}
});
// Mouse Events for volume bar
volumeBar.addEventListener("click", changeVolume);
volumeBar.addEventListener("mouseup", () => {
	clickFlag = false;
});
volumeBar.addEventListener("mousedown", () => {
	clickFlag = true;
});
volumeBar.addEventListener("mouseover", () => {
	if(clickFlag) {
		changeVolume;
	}
});
video.addEventListener("timeupdate", handleProgress);
// fullScreenButton.addEventListener("click", makeFullScreen);