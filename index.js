$(function() {
    var BV = new $.BigVideo({container:$('#intro-video')});
	BV.init();


	if (Modernizr.touch) {
	    BV.show('assets/img/fallback.jpg');
	} else {
		BV.show('assets/video/Intro_loop.mp4', {ambient:true});
	}


  	// var overlay= document.getElementById('arrow-overlay');
  	// $('#arrow-overlay').css.color = '#000';


});

