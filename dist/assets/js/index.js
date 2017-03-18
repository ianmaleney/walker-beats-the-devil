var slideColumns = document.querySelectorAll(".header-slide");
var slideRows	= document.querySelectorAll(".slide-row");
var sections = document.querySelectorAll("section");
var title = "Walker Beats The Devil";

window.addEventListener("load", function(){
	var headline = function(){
		var rnd = Math.floor(Math.random() * slideRows.length);
		var rnd2 = Math.floor(Math.random() * slideRows.length);
		var rnd3 = Math.floor(Math.random() * slideRows.length);

		if(rnd2 === rnd && rnd !== 0){
			rnd2 = rnd2 - 1;
		}
		if(rnd3 === rnd && rnd !== 0){
			rnd3 = rnd3 - 1;
		}

		for(var i = 0; i < slideRows.length; i++){
			slideRows[i].innerHTML = '';
		}

		slideRows[rnd].innerHTML = title;
		slideRows[rnd2].innerHTML = title;
		slideRows[rnd3].innerHTML = title;

		function setDelay(){
			var prop;
			var styl = window.getComputedStyle(slideRows[rnd2], null);
			if (styl.getPropertyValue('animation-delay')) {
	        prop = 'animation-delay';

	    } else if (styl.getPropertyValue('-webkit-animation-delay')) {
	        prop = '-webkit-animation-delay';

	    } else if (styl.getPropertyValue('-moz-animation-delay')) {
	        prop = '-moz-animation-delay';

	    } else {
	        console.log('unable to find prop');
	        return;
	    }
	    slideRows[rnd2].style.setProperty(prop, rnd2 + 's');
	    slideRows[rnd3].style.setProperty(prop, rnd3 + 's');
		}

		function setDuration(){
			var prop;
			var styl = window.getComputedStyle(slideRows[rnd2], null);
			if (styl.getPropertyValue('animation-duration')) {
	        prop = 'animation-duration';

	    } else if (styl.getPropertyValue('-webkit-animation-duration')) {
	        prop = '-webkit-animation-duration';

	    } else if (styl.getPropertyValue('-moz-animation-duration')) {
	        prop = '-moz-animation-duration';

	    } else {
	        console.log('unable to find prop');
	        return;
	    }
	    slideRows[rnd2].style.setProperty(prop, rnd2 + 's');
	    slideRows[rnd3].style.setProperty(prop, rnd3 + 's');
		}

		function setDirection(){
			var prop;
			var direction;
			var bool = Math.random();
			if (bool >= 0.5){
				direction = "normal";
			} else {
				direction = "reverse";
			}
			var styl = window.getComputedStyle(slideRows[rnd2], null);
			if (styl.getPropertyValue('animation-direction')) {
	        prop = 'animation-direction';

	    } else if (styl.getPropertyValue('-webkit-animation-direction')) {
	        prop = '-webkit-animation-direction';

	    } else if (styl.getPropertyValue('-moz-animation-direction')) {
	        prop = '-moz-animation-direction';

	    } else {
	        console.log('unable to find prop');
	        return;
	    }
	    slideRows[rnd2].style.setProperty(prop, direction);
	    slideRows[rnd3].style.setProperty(prop, direction);
		}
		
		setDelay();
		setDuration();
		setDirection();
	};

	setInterval(headline, 3000);

	document.addEventListener("scroll", function(){
		var top = sections[0].getBoundingClientRect().top;

		if (top < 250){
			var removal = function(){
				for (var i = 0; i < slideRows.length; i++) {
					slideRows[i].classList.add("fade");
				}
				var erase = function(){
					while (slideColumns[0].firstChild) {
			  		slideColumns[0].removeChild(slideColumns[0].firstChild);
					}
					while (slideColumns[1].firstChild) {
					  slideColumns[1].removeChild(slideColumns[1].firstChild);
					}
					while (slideColumns[2].firstChild) {
					  slideColumns[2].removeChild(slideColumns[2].firstChild);
					}
				};
				setTimeout(erase, 2500);
			};

			removal();

			if(top < 0){
				for (var i = 0; i < slideColumns.length; i++) {
					slideColumns[i].classList.add("animated");
				}
			} else {
				for (var i = 0; i < slideColumns.length; i++) {
					slideColumns[i].classList.remove("animated");
				}
			}

		}
	});

});