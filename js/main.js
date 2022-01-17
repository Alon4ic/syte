
$(function(){


	$('.gallery-inner').slick({
		dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1081,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
				infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ],
});
});const search = document.querySelector('.search');
const body = document.querySelector('body');

search.addEventListener('click', function (e) {
	e.stopPropagation();
	this.classList.add('search--active')
});

body.addEventListener('click', function (e) {
	search.classList.remove('search--active')
	});


$(document).ready(function() {
	$('.menu-icon').click(function(event) {
		$('.menu-icon, .menu-body').toggleClass('active');
	});
	
});


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.bar2-arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function(e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');
if (iconMenu){
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


const bar2Btns = document.querySelectorAll('.bar2-btn[data-goto]');
if (bar2Btns.length > 0) {
  bar2Btns.forEach(bar2Btn => {
    bar2Btn.addEventListener("click", onBar2BtnClick);
  });

  function onBar2BtnClick(e) {
    const bar2Btn = e.target;
    if (bar2Btn.documentataset.goto && document.querySelector(bar2Btn.dataset.goto)) {
      const gotoBlock = document.querySelector(bar2Btn.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top = pageYoffset - document.querySelector('heder').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}





