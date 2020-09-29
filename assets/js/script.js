$(()=>{
	//load page
	$("a").on('click', function(event) {
		
		if(this.hash !== ""){
			event.preventDefault();
			
			let hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top 
			}, 800, () =>{
				window.location.hash = hash;
			} );	
		}
	});

	

});

const token = "79a0f5c1-04bc-4ad0-b631-ba0720975fb7";
const $formContact = document.querySelector("#contact");

const sendForm = event => {
  event.preventDefault();
  const message = {
    name: document.querySelector("#nombre").value,
    subject: document.querySelector("#correo").value,
    text: document.querySelector("#mensaje").value
  };
  smtpJS(message);
};

const smtpJS = message => {
	Email.send({
	    SecureToken : token,
	    To : 'cordero.susej@gmail.com',
	    From : `${message.subject}`,
	    Subject : `Contacto - ${message.name}`,
	    Body : `${message.text}`
	}).then(
	  messagea => alert(messagea)
	);
}

/*
const smtpJS = message => {
  try {
    Email.send(
      "cordero.susej@gmail.com",
      `${message.subject}`,
      `Contacto - ${message.name}`,
      message.text,
      { token }
    );
    console.log(message);
  } catch (e) {
    alert("Erro");
  }
};
*/
$formContact.addEventListener("submit", sendForm);


/*



*/

particlesJS('particles-js',
  
  {
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

);




const parallaxElements = $('.parallax'), parallaxQuantity = parallaxElements.length;
$('.header').css('background-position', 'left 0px');
$(window).on('scroll', e =>{
	window.requestAnimationFrame(() => {
		for (let i = 0; i < parallaxQuantity; i++){
			const currentElement = parallaxElements.eq(i);
			let scrolled = $(window).scrollTop();
			currentElement.css('background-position', 'left ' + (-1 * (parseInt($(window).scrollTop()) / 20)) + 'px');
		}
	});

	if ($(document).scrollTop()>=600){
		$('.navi').addClass('naveffect');
	}else{
		$('.navi').removeClass('naveffect');
	}

	if ($(document).scrollTop()<=500){
		$('nav').fadeOut(600,'swing');
	}else{
		$('nav').fadeIn(600,'swing');
	}


	if ($(document).scrollTop()>=1200){
		if ($('.img-card').hasClass('cardi') == true) {
			$('.cardi').addClass('cardi0');	
		}
		
	}
	
});