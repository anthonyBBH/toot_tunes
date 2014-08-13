var PIANO_KEYS = 32;

$(document).ready(function() {




    $('.tile1, .tile2, .tile3, .tile4, .tile5, .tile6').addClass('slideExpandUp');






	$(".fruit1").click(function () {
	  	toneId = $(this).attr('id');
		play_multi_sound('tone-'+toneId);
        $(this).addClass('animated tada')
        console.log('add');
           $("#blueberry_smoke").html($("#blueberry_smoke").html());

        $(".fruit1").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                $(this).removeClass('animated tada');
            });
			
	 });


	$(".fruit2").click(function () {
	  	toneId = $(this).attr('id');
		play_multi_sound('tone-'+toneId);
        $(this).addClass('animated tada');
           $("#orange_smoke").html($("#orange_smoke").html());

        $(".fruit2").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                $(this).removeClass('animated tada');
            });
			
	 });

	$(".fruit3").click(function () {
	  	toneId = $(this).attr('id');
		play_multi_sound('tone-'+toneId);
        $(this).addClass('animated tada');
           $("#watermelon_smoke").html($("#watermelon_smoke").html());

        $(".fruit3").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                $(this).removeClass('animated tada');
            });
			
	 });

 	$(".fruit4").click(function () {
	  	toneId = $(this).attr('id');
		play_multi_sound('tone-'+toneId);
        $(this).addClass('animated tada');
           $("#raspberry_smoke").html($("#raspberry_smoke").html());

        $(".fruit4").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                $(this).removeClass('animated tada');
            });
			
	 });

 	$(".fruit5").click(function () {
	  	toneId = $(this).attr('id');
		play_multi_sound('tone-'+toneId);
        $(this).addClass('animated tada');
           $("#banana_smoke").html($("#banana_smoke").html());

        $(".fruit5").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                $(this).removeClass('animated tada');
            });
			
	 });

 	$(".fruit6").click(function () {
	  	toneId = $(this).attr('id');
		play_multi_sound('tone-'+toneId);
        $(this).addClass('animated tada');
           $("#apple_smoke").html($("#apple_smoke").html());

        $(".fruit6").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                $(this).removeClass('animated tada');
            });
			
	 });


 function rightNow() {
  if (window['performance'] && window['performance']['now']) {
    return window['performance']['now']();
  } else {
    return +(new Date());
  }
}

var fps          = 30,
    currentFrame = 0,
    totalFrames  = 60,
    elem         = document.getElementById("apple_smoke"),
    currentTime  = rightNow();

(function animloop(time){
  var delta = (time - currentTime) / 1000;

  currentFrame += (delta * fps);

  var frameNum = Math.floor(currentFrame);

  if (frameNum >= totalFrames) {
    currentFrame = frameNum = 0;
  }

  requestAnimationFrame(animloop);

  elem.style.backgroundPosition = "0 -" + (frameNum * 124) + "px";

  currentTime = time;
})(currentTime);




})


//ARRAY WITH ALL THE KEYS
//the array content starts from element 1 so eleemnt 0 i zero, empty, nada, 0 gree
var keyboardKeys = new Array (PIANO_KEYS); 
var k;

for (k=0;k < PIANO_KEYS; k++) {
	keyboardKeys[k] = eval("pKey"+k);
	//console.log(keyboardKeys[k]);
}

//LOOP trought all the  keyboard-piano keys
for (i=0; i <keyboardKeys.length; i++) {
		
		
		//BIND ON KEY DOWN
		$(document).bind('keydown', keyboardKeys[i], function (evt){
			//console.log("obajdam se ot funkciqta vutre " + evt.data.value +  evt.data.flag + evt.data.sound);
			//check the flag false - key is down, true - key is up
			//alert(evt.data.kbKey)

			if(evt.data.flag) {
			 evt.data.flag = false;
			 if(evt.data.kbKey == '1' || evt.data.kbKey == '2' || evt.data.kbKey == 'q' || evt.data.kbKey == 'w')
			 {
			 } 
			 else if (evt.data.kbKey == 'c') {
			     $(this).addClass('animated tada');
			     $("#blueberry_smoke").html($("#blueberry_smoke").html());

			     $(".fruit1").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
			         function(e) {
			             $(this).removeClass('animated tada');
			         });
			     $(evt.data.value).addClass('animated tada pressed');
			     play_multi_sound(evt.data.sound);

			     alter();
			 }

			 else if (evt.data.kbKey == 'v') {
			     $(this).addClass('animated tada');
			     $("#orange_smoke").html($("#orange_smoke").html());

			     $(".fruit2").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
			         function(e) {
			             $(this).removeClass('animated tada');
			         });
			     $(evt.data.value).addClass('animated tada pressed');
			     play_multi_sound(evt.data.sound);

			     alter();
			 }
			 else if (evt.data.kbKey == 'b') {
			     $(this).addClass('animated tada');
			     $("#watermelon_smoke").html($("#watermelon_smoke").html());

			     $(".fruit3").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
			         function(e) {
			             $(this).removeClass('animated tada');
			         });
			     $(evt.data.value).addClass('animated tada pressed');
			     play_multi_sound(evt.data.sound);

			     alter();
			 }
			 else if (evt.data.kbKey == 'n') {
			     $(this).addClass('animated tada');
			     $("#raspberry_smoke").html($("#raspberry_smoke").html());

			     $(".fruit4").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
			         function(e) {
			             $(this).removeClass('animated tada');
			         });
			     $(evt.data.value).addClass('animated tada pressed');
			     play_multi_sound(evt.data.sound);

			     alter();
			 }

			 else if (evt.data.kbKey == 'm') {
			     $(this).addClass('animated tada');
			     $("#banana_smoke").html($("#banana_smoke").html());

			     $(".fruit5").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
			         function(e) {
			             $(this).removeClass('animated tada');
			         });
			     $(evt.data.value).addClass('animated tada pressed');
			     play_multi_sound(evt.data.sound);

			     alter();
			 }
			 else if (evt.data.kbKey == 'k') {
			     $(this).addClass('animated tada');
			     $("#apple_smoke").html($("#apple_smoke").html());

			     $(".fruit6").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
			         function(e) {
			             $(this).removeClass('animated tada');
			         });
			     $(evt.data.value).addClass('animated tada pressed');
			     play_multi_sound(evt.data.sound);

			     alter();
			 }

			 else if (evt.data.kbKey == 'f' || evt.data.kbKey == 'g' || evt.data.kbKey == 'j' || evt.data.kbKey == ',' || evt.data.kbKey == '.' || evt.data.kbKey == 'l')
			 {




			 $(evt.data.value).addClass('animated tada pressed');
			 play_multi_sound(evt.data.sound);
			 
			 alter();
			}
			}
			return false;
		});


//$(document).bind('keydown', 'r',function (evt){ alert('adasd'); });

		//BIND ON KEY UP
		$(document).bind('keyup', keyboardKeys[i], function (evt){
			
			//console.log("obajdame se ot funkciqta vutre " + evt.data.value +  evt.data.flag + evt.data.sound);
			
			//check the flag false - key is down, true - key is up
			evt.data.flag = true; 
			$(evt.data.value).removeClass('pressed animated shake');
			//stop_multi_sound(evt.data.sound); //don't so cool as shoud
			
			return false; 
			
		});

}

var channel_max = 32;										// number of channels
audiochannels = new Array();

for (a=0;a<channel_max;a++) {									// prepare the channels
	audiochannels[a] = new Array();
	audiochannels[a]['channel'] = new Audio();						// create a new audio object
	audiochannels[a]['finished'] = -1;							// expected end time for this channel
	audiochannels[a]['keyvalue'] = '';
}


//PLAY SOUND
function play_multi_sound(s) {


	for (a=0;a <audiochannels.length; a++) {
		thistime = new Date();
		if (audiochannels[a]['finished'] < thistime.getTime()) {			// is this channel finished?
			
			//console.log(audiochannels[a]['keyvalue']);
			
			try
		  {		
					audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
					audiochannels[a]['channel'] = document.getElementById(s);
					audiochannels[a]['channel'].currentTime = 0;
					audiochannels[a]['channel'].volume=1;
					audiochannels[a]['channel'].play();
					audiochannels[a]['keyvalue'] = s;
					
					//console.log("the key is pressed - play");
					
					//console.log(audiochannels[a]['keyvalue']);

		  }
		  catch(v)
		  {	
		  	//show the error message (alert or log) or hide it when public
		    //alert(v.message);
		   //	console.log(v.message); 
		  }

			break;
		}
	}
}


function stop_multi_sound(s, sender) {

	for (a=0;a <audiochannels.length; a++) {
		
		//console.log('chanel keyvalue = '+audiochannels[a]['keyvalue']);

		if (audiochannels[a]['keyvalue'] == s) {			// is this channel finished?
			
			try
		  {
					audiochannels[a]['channel'] = document.getElementById(s);
					
					//audiochannels[a]['channel'].currentTime =  audiochannels[a]['channel'].duration;
					//audiochannels[a]['keyvalue'] = 'nema';
					
					if(sender != undefined && sender == 'mouse') {
						setTimeout ("audiochannels[a]['channel'].pause()", 2500 );
						setTimeout ("audiochannels[a]['channel'].currentTime = 0", 2500 );
					}else {
						//audiochannels[a]['channel'].volume=0;
						setTimeout ("audiochannels[a]['channel'].pause()", 2500 );
						setTimeout ("audiochannels[a]['channel'].currentTime = 0", 2500 );
					}
					
					//console.log("the key is UP - stop sound " + s + ' = ' + audiochannels[a]['channel'].duration + '== ' + audiochannels[a]['channel'].currentTime);
					//console.log(audiochannels[a]['keyvalue']);
		  }
		  catch(v)
		  {	
		  	//show the error message (alert or log) or hide it when public
		    //alert(v.message);
		   	console.log(v.message); 
		  }

			break;
		}
	}
}








