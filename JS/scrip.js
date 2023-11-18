/* efecto header*/





/* efecto type js*/

var typed = new Typed('.typed', {
	strings: [
		'<i class="type">Designer</i>',
		'<i class="type">Marketing</i>',
		'<i class="type">Animator</i>',
		'<i class="type">Multimedia</i>',
	],
	stringsElement: '#cadenas-texto',
	startDelay: 300, 
	backSpeed: 75, 
	smartBackspace: true, 
	shuffle: false, 
	backDelay: 1500,
	loop: true, 
	loopCount: false, 
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html', 
});


/* efecto ScrollReveal js*/
/* header*/

window.sr = ScrollReveal();
  sr.reveal('.logotipo', {
    duration: 3000,
    origin: 'top',
    distance: '100px'
  });




  /* efecto ScrollReveal js*/
/* inicio */

window.sr = ScrollReveal();
sr.reveal('.main-container', {
  duration: 3000,
  origin: 'left',
  distance: '100px'
});





  /* efecto ScrollReveal js*/
/* Skills */

window.sr = ScrollReveal();
sr.reveal('.section_skills', {
  duration: 3000,
  origin: 'top',
  distance: '100px'
});

window.sr = ScrollReveal();
sr.reveal('.skills_conte1', {
  duration: 3000,
  origin: 'left',
  distance: '100px'
});

window.sr = ScrollReveal();
sr.reveal('.skills_conte2', {
  duration: 3000,
  origin: 'right',
  distance: '100px'
});







  /* efecto ScrollReveal js*/
/* Servicios */

window.sr = ScrollReveal();
sr.reveal('.centro-text', {
  duration: 3000,
  origin: 'top',
  distance: '100px'
});

window.sr = ScrollReveal();
sr.reveal('.servicio-container', {
  duration: 3000,
  origin: 'bottom',
  distance: '100px'
});


/* Conteo incramento */
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

window.sr = ScrollReveal();
sr.reveal('.conter_container', {
  duration: 3000,
  origin: 'bottom',
  distance: '200px'
});




/* Email */

const contactoForm = document.getElementById('contacto-form'),
contactoName = document.getElementById('contacto-name'),
contactoEmail = document.getElementById('contacto-email'),
contactoProyecto = document.getElementById('contacto-proyecto'),
contactoMessage = document.getElementById('contacto-message')

const sendEmail = (e) => {
  e.preventDefault()

  if(contactoName.value === '' || contactoEmail.value === '' || contactoProyecto === ''){

    contactoMessage.classList.remove('color-blue')
    contactoMessage.classList.add('color-red')

    contactoMessage.textContent = 'Escribe todos los campos..!'
  }else{
    emailjs.sendForm('service_z30t573','template_ujn5hd1','#contacto-form','oNRQjxbF_HEHkDAgM')
       .then(() =>{
        contactoMessage.classList.add('color-blue')
        contactoMessage.textContent = 'Mensaje Enviado'

        setTimeout(() =>{
          contactoMessage.textContent = ''
        }, 5000)
       }, (error) =>{
        alert('!UY¡ Algo salio mal...', error)
       })

       contactoName.value = ''
       contactoEmail.value = ''
       contactoProyecto.value = ''
  }
}

contactoForm.addEventListener('submit', sendEmail)


window.sr = ScrollReveal();
  sr.reveal('.section_titulo, .section_sub', {
    duration: 3000,
    origin: 'top',
    distance: '100px'
  });

window.sr = ScrollReveal();
  sr.reveal('.contacto1', {
    duration: 3000,
    origin: 'left',
    distance: '100px'
  });

  window.sr = ScrollReveal();
  sr.reveal('.contacto2', {
    duration: 3000,
    origin: 'right',
    distance: '100px'
  });