//瑙﹀彂鎾斁浜嬩欢

var audios = document.getElementsByClassName("music-audio")[0];
var vol = audios.volume;
audios.controls = false;

$('.music-play').on('click', function() {
	audios.play();
	var duration = audios.duration;
	$('.music-max').html(timeleng(duration));
	$(".music-animation").addClass("play-an");
	$(".music-range").attr({
		'max': duration
	});

	function timer() {
		var t = parseInt(Math.round(audios.currentTime));
		$(".music-range").val(t);
		$('.music-cur').text(timeleng(t));
		t = parseInt(audios.currentTime);
		if(t < duration) {
			setTimeout(timer, 1000);
		} else {
			clearTimeout(timer);
		}
	}
	timer();
});

//鍋滄
$('.music-no').on('click', function() {
	audios.pause();
	$(".music-animation").removeClass("play-an");
})

audios.onended = function() {
	$(".music-animation").removeClass("play-an")
};

//闊抽噺澶�
$('.music-btnd').click(function() {
	vol = vol > 0 ? (vol * 10 - 1) / 10 : 0;
	audios.volume = vol;
	console.log(vol)
	$(".music-voice").html(vol)
})
//闊抽噺灏�
$('.music-btne').click(function() {
	vol = vol < 1 ? (vol * 10 + 1) / 10 : 1;
	audios.volume = vol;
	console.log(vol)
	$(".music-voice").html(vol)
})

//鐩戝惉婊戝潡锛屾嫋鍔�
$(".music-range").on('change', function() {
	audios.currentTime = this.value;
	console.log(this.value)
	$(".music-range").val(this.value);
});

//灏嗙鏁拌浆涓�00:00鏍煎紡
function timeleng(time) {
	var m = 0,
		s = 0,
		ms = '00',
		ss = '00';
	time = Math.floor(time % 3600);
	m = Math.floor(time / 60);
	s = Math.floor(time % 60);
	ss = s < 10 ? '0' + s : s + '';
	ms = m < 10 ? '0' + m : m + '';
	return ms + ":" + ss;
}

$(".music-qd").on("click", function() {
	var nameid = $(".input-text").val();
	console.log(nameid)
	$.ajax({
		type: "get",
		dataType: 'jsonp',

		success: function(d) {
			//鏈€鏂伴煶涔愭暟鎹�
			console.log(d)
		},
		error: function(d) {
			console.log(d);
		}
	});
})