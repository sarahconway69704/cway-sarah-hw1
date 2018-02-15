(() => {
  console.log('fired!')

//variables at the top

var iconSet = document.querySelectorAll('svg');

//functions here
function logThisIcon(){
  console.log('clicked on this icon: ', this.id);

  this.style.opacity = 0.5;
}


  // event handling goes at the bottom

  iconSet.forEach(icon => icon.addEventListener('click', logThisIcon))
})();
