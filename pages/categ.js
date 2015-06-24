$(document).ready(function() {
	i=0;
	/*var main = function(){
		var now = Date.now();
		var delta = now -then;
	
		update(delta/1000);
		render();

		then = now;
	};*/
		$(".intro-gallery").css('background-image',' -moz-linear-gradient(rgba(0,0,0, 0) 85%,rgba(0,0,0, 1) 100%),url(../img/Nevada.jpg)');
		$(".intro-gallery").css('background-image',' -webkit-linear-gradient(rgba(0,0,0, 0) 85%,rgba(0,0,0, 1) 100%),url(../img/Nevada.jpg)');
		$(".intro-gallery").css('background-image',' -o-linear-gradient(rgba(0,0,0, 0) 85%,rgba(0,0,0, 1) 100%),url(../img/Nevada.jpg)');
		$(".intro-gallery").css('background-image',' -ms-linear-gradient(rgba(0,0,0, 0) 85%,rgba(0,0,0, 1) 100%),url(../img/Nevada.jpg)');
		$(".intro-gallery").css('background-image',' linear-gradient(rgba(0,0,0, 0) 85%,rgba(0,0,0, 1) 100%),url(../img/Nevada.jpg)');
	setInterval(function () {
		var list = ["../img/bug.jpg","../img/Bokeh.jpg","../img/London.jpg","../img/Nevada.jpg"];

		$(".intro-gallery").css('background-image',' -moz-linear-gradient(rgba(0,0,0, 0) 85%,rgba(0,0,0, 1) 100%),url(' + list[i] + ')');
		$(".intro-gallery").css('background-image',' -webkit-linear-gradient(rgba(0,0,0, 0) 85%,rgba(0,0,0, 1) 100%),url(' + list[i] + ')');
		$(".intro-gallery").css('background-image',' -o-linear-gradient(rgba(0,0,0, 0) 85%,rgba(0,0,0, 1) 100%),url(' + list[i] + ')');
		$(".intro-gallery").css('background-image',' -ms-linear-gradient(rgba(0,0,0, 0) 85%,rgba(0,0,0, 1) 100%),url(' + list[i] + ')');
		$(".intro-gallery").css('background-image',' linear-gradient(rgba(0,0,0, 0) 85%,rgba(0,0,0, 1) 100%),url(' + list[i] + ')');

		if(i==3){
			i=0;
		}else{
			i++;
		}

	}, 3000);
});
