var BUFFER_TIME = 2; // IN SECONDS

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var timeoutHandle;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '450',
    width: '700',
    videoId: document.getElementById("player").getAttribute("youtube-vid-id")
  });
}
function playRange(start_time,stop_time) {
	console.log("seekTo: "+ start_time + "second");
	
	player.seekTo(start_time);
	
	if (player.getPlayerState() != 1){ // if not playing
		console.log("not playing, so play");
		player.playVideo();
	}
	// console.log(checktimeisgood(3000))
	time_delta = stop_time - start_time + BUFFER_TIME; // add to for time it takes to buffer 
	pauseAt(time_delta*1000); //needs milliseconds. 
	

}
function pauseAt(seconds) {
	// reset timeout
	if (timeoutHandle != null ) {
		window.clearTimeout(timeoutHandle);
	}
	console.log("desired_stop_time:"+seconds);
	timeoutHandle = window.setTimeout(pauseVideo,seconds);
}

function checktimeisgood(desired_stop_time){
	if (player.getCurrentTime() > desired_stop_time/1000){
		console.log(player.getCurrentTime());
		return true;
	
	}else{
		console.log(player.getCurrentTime());
		return false; 
	}

}

function pauseVideo() {
  console.log("actual stop time: " + player.getCurrentTime());
  player.pauseVideo();
}


