selline = 1;
linemax = 5;
sc = 0;
toadd = 1;

linefullness1 = 100;
linefullness2 = 100;
linefullness3 = 100;
linefullness4 = 100;
linefullness5 = 100;

document.addEventListener('DOMContentLoaded', function() {
	lowone(false);
});

document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
        addthisone(1);
    } else if (event.key === '2') {
        addthisone(2);
	} else if (event.key === '3') {
        addthisone(3);
	} else if (event.key === '4') {
        addthisone(4);
	} else if (event.key === '5') {
        addthisone(5);
	}
	
	sel();
	
});

function lowone(testmode) {
	
	var calcdangerzone = 0;
	var idl = rango(1, linemax);
	
	if (idl == 1) {
		linefullness1 -= 1;
		if(linefullness1 < 1) {
			window.close();
		}
		calcdangerzone = linefullness1;
	} else if (idl == 2) {
		linefullness2 -= 1;
		if(linefullness2 < 1) {
			window.close();
		}
		calcdangerzone = linefullness2;
	} else if (idl == 3) {
		linefullness3 -= 1;
		if(linefullness3 < 1) {
			window.close();
		}
		calcdangerzone = linefullness3;
	} else if (idl == 4) {
		linefullness4 -= 1;
		if(linefullness4 < 1) {
			window.close();
		}
		calcdangerzone = linefullness4;
	} else if (idl == 5) {
		linefullness5 -= 1;
		if(linefullness5 < 1) {
			window.close();
		}
		calcdangerzone = linefullness5;
	}
	
	calcCyanZone(calcdangerzone, idl);
	
	var speed = sc * 10;
	var speed2 = 1000 - speed;
	
	if(testmode != true) {
		setTimeout(() => {
			lowone(false);
		}, speed2);
	}
	
}

function calcCyanZone(calcdangerzone, idl) {
	
	if (calcdangerzone > 100) {
		if (idl == 1) {
			linefullness1 = 100;
		} else if (idl == 2) {
			linefullness2 = 100;
		} else if (idl == 3) {
			linefullness3 = 100;
		} else if (idl == 4) {
			linefullness4 = 100;
		} else if (idl == 5) {
			linefullness5 = 100;
		}
		
		calcdangerzone = 100;
		
	}
	
	var selector = document.getElementById("line" + idl);
	
	var dangerzone = 100 - calcdangerzone;
	selector.style.boxShadow = "0 0 "+ dangerzone + "px cyan"
}

function rango(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addthisone(selline2) {
	var idl = selline2;
	
	if (idl == 1) {
		if (linefullness1 < 100) {
			linefullness1 += toadd;
			sc += 1;
			calcCyanZone(linefullness1, 1);
		} else {
			sc -= 1;
		}
	} else if (idl == 2) {
		if (linefullness2 < 100) {
			linefullness2 += toadd;
			sc += 1;
			calcCyanZone(linefullness2, 2);
		} else {
			sc -= 1;
		}
	} else if (idl == 3) {
		if (linefullness3 < 100) {
			linefullness3 += toadd;
			sc += 1;
			calcCyanZone(linefullness3, 3);
		} else {
			sc -= 1;
		}
	} else if (idl == 4) {
		if (linefullness4 < 100) {
			linefullness4 += toadd;
			sc += 1;
			calcCyanZone(linefullness4, 4);
		} else {
			sc -= 1;
		}
	} else if (idl == 5) {
		if (linefullness5 < 100) {
			linefullness5 += toadd;
			sc += 1;
			calcCyanZone(linefullness5, 5);
		} else {
			sc -= 1;
		}
	}
	
}

function auto() {
	
	if (Math.round(sc/10) > 1) {
		toadd = Math.round(sc/10);
	} else {
		toadd = 1;
	}
	
	if (sc < 0) {
		sc = 0;
	}
	
	scorer.textContent = "Score: [" + sc + "]";
	
	// Set vars
	
	line1.style.background = "linear-gradient(0deg, lime " + linefullness1 + "%, black " + linefullness1 + "%)"
	line2.style.background = "linear-gradient(0deg, lime " + linefullness2 + "%, black " + linefullness2 + "%)"
	line3.style.background = "linear-gradient(0deg, lime " + linefullness3 + "%, black " + linefullness3 + "%)"
	line4.style.background = "linear-gradient(0deg, lime " + linefullness4 + "%, black " + linefullness4 + "%)"
	line5.style.background = "linear-gradient(0deg, lime " + linefullness5 + "%, black " + linefullness5 + "%)"
}

setInterval(auto, 1);






