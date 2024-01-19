// Déclaration et initialisation du tableau des diapositives
const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]
  

///...2....Ajout des Event Listeners sur les flèches....... 
  
  const flecheGauche = document.querySelector("#banner .arrow_left")
  const flecheDroite = document.querySelector("#banner .arrow_right")

        flecheGauche.addEventListener('click', () => {ChangeCarrousel('prev')})
        flecheDroite.addEventListener('click', () => {ChangeCarrousel('next')})


///...3....Ajout bullet points au slider.......c 
   
  // Boucle pour créer un point pour chaque image du caroussel
  slides.forEach((slide, index) => {
  // Créer une div et sa class dot
  const point = document.createElement('div')
        point.classList.add('dot')
  // Ajout la classe dot_selected pour le premier point 
  if (index === 0) {point.classList.add('dot_selected')}  
  // Ajout du point au conteneur des points du carrousel
  const pointsConteneur = document.querySelector('#banner .dots')
        pointsConteneur.appendChild(point)
  })


///...4....Modification du slide au clic sur bouton (ajout images,point,texte).......
  
  const points  = document.querySelectorAll('#banner .dots .dot')
  const images  = document.querySelectorAll('#banner .banner-img')
  const textes  = document.querySelector   ('#banner p')

  function miseàJourCarrousel(i)           {
    
    // changement point actif au suivant
    points.forEach((point, e) => {
    if (e === i) {point.classList.add   ('dot_selected')} 
    else         {point.classList.remove('dot_selected')}    })  
    
    // changement image
    images.forEach((image)    => {
    image.src = `assets/images/slideshow/${slides[i].image}`
    image.alt = `         Banner Print-it${slides[i].image}` })
  
    // changement texte
    textes.innerHTML = slides[i].tagLine  }


