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
];
  
  //... Ajout des Event Listeners sur les flèches 
  let flecheGauche = document.querySelector("#banner .arrow_left")
  let flecheDroite = document.querySelector("#banner .arrow_right")

  flecheGauche.addEventListener('click', () => {
    console.log('Gauche')
  })

  flecheDroite.addEventListener('click', () => {
    console.log('Droite')
  })