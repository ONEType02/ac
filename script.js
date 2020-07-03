// Start
window.onload = function() {
	setTimeout(function() {
    	$('svg').fadeOut('fast');
    	$('.start').animate({ 
    		height: '0', 
		}, 1000); 
    	// $("html,body").scrollTop($('video').offset().top + 30);
    }, 2000);
};

$(document).ready(function() { 
	$("html").niceScroll(); // Скроллбар
	$('.fa-volume-mute').css('display', 'block');

	if($(window).width() <= '960') {
		$('.p2').css('display', 'none');
  		$('.p2_1').css('display', 'block');
	} else {
		$('.p2').css('display', 'block');
  		$('.p2_1').css('display', 'none');
	}
});

// Определить браузер
function get_name_browser(){
    var ua = navigator.userAgent;    
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    return 'Не определен';
}

$('.up').click(function() {
	$('html,body').stop().animate( { 
		scrollTop : $('video').offset().top 
	}, 800); 
}); 

// Button sound
var audio = $('audio')[0];
audio.volume = 0.4;
$('.zv').click(function() {
	audio.muted = false;
	audio.play();
});

var audio1 = $('.audio1')[0];
audio1.volume = 0.6;
$('.card').mouseenter(function() {
	audio1.muted = false;
	audio1.play();
});

// Scroll
let del = 0;
let scroll = 1;
let num = 4;
if(get_name_browser() === 'Firefox') { num = 8; }
$('html,body').mousewheel(function(e) { // Плавный скролл(вручную(нужен плагин mousewheel))
	if(del == 0 && scroll == 1) {
		let nt = $('html,body').scrollTop()-(e.deltaY * e.deltaFactor * num); 
		e.stopPropagation(); 
		e.preventDefault();
		$('html,body').stop().animate( { 
			scrollTop : nt 
		}, 450); 
		del = 1;
		setTimeout(function() { del = 0; }, 455);
	} else return false;
});

// Round anim
let way = 0;
$('.round1').css('transform', 'translate(90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh'); 
$('.round2').css('transform', 'translate(-90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh'); 
$('.round3').css('transform', 'translate(90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
$('.round4').css('transform', 'translate(-90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
$('.round5').css('transform', 'translate(90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
$('.round6').css('transform', 'translate(-90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
way = 1;

setInterval(function() {
	if(way == 0) {
		$('.round1').css('transform', 'translate(90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh'); 
		$('.round2').css('transform', 'translate(-90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh'); 
		$('.round3').css('transform', 'translate(90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
		$('.round4').css('transform', 'translate(-90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
		$('.round5').css('transform', 'translate(90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
		$('.round6').css('transform', 'translate(-90.7' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
		way = 1;	
	} else {
		$('.round1').css('transform', 'translate(0' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh'); 
		$('.round2').css('transform', 'translate(0' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh'); 
		$('.round3').css('transform', 'translate(0' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
		$('.round4').css('transform', 'translate(0' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
		$('.round5').css('transform', 'translate(0' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
		$('.round6').css('transform', 'translate(0' + 'vw' + ',' + Math.random() * (95.6 - 0) + 0 + 'vh');
		way = 0;
	}
}, 50000);


// Video
let video = $('#promo')[0];
$('video').click(function() {
	if(video.paused) $('video').get(0).play()
	else $('video').get(0).pause()
});

$('.sound').click(function() {
	if(video.muted) { 
		$('video').get(0).muted = false;
		$('.fa-volume-mute').css('display', 'none');
		$('.fa-volume-up').css('display', 'block');
	} else { 
		$('video').get(0).muted = true;
		$('.fa-volume-mute').css('display', 'block');
		$('.fa-volume-up').css('display', 'none');
	}
});

// Cards
function showFull(e) {
	$('.full').remove();
	$('<img>').attr({'class':'full', 'src': e.currentTarget.src}).appendTo('body');
	scroll = 0;
	e.stopPropagation();
};

$(document).click(function(e) {
	$('.full').remove();
	scroll = 1;
}); 


// Biography
$(window).resize(function() {
  	if($(window).width() <= '960') {
  		$('.p2').css('display', 'none');
  		$('.p2_1').css('display', 'block');
	} else {
  		$('.p2').css('display', 'block');
  		$('.p2_1').css('display', 'none');
	}
});





