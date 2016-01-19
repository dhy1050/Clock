setInterval(function(){

	var time=new Date();
	if(time.getHours() > 12){

		document.getElementById("hour").innerHTML = time.getHours() - 12 +":";
	}else{
		document.getElementById("hour").innerHTML = time.getHours() + ":";
	}
	document.getElementById("minute").innerHTML = time.getMinutes() + ":";
	document.getElementById("second").innerHTML = time.getSeconds() + ":";
	document.getElementById("millisecond").innerHTML = time.getMilliseconds();

}, 100);