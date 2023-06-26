const burguerIcon = document.querySelector('.nav__burguer');
const navOverlay = document.querySelector('.nav__overlay');

burguerIcon.addEventListener("click", () => {
  burguerIcon.classList.toggle("nav__burguer--open");

  navOverlay.classList.toggle("nav__overlay--view");
});

navOverlay.addEventListener("click", (e) => {
  e.preventDefault();
  const currentElement = e.target;
  //console.log(e.target.classList.value);

  if ( isActive(currentElement, 'nav__parent')){
    
    const subMenu = currentElement.parentElement.children[1];
    console.log(subMenu);

    if(window.innerWidth < 700){

      let height = subMenu.clientHeight == 0
      ? subMenu.scrollHeight: 0;
      //console.log(subMenu.clientHeight);

      subMenu.style.height = `${height}px`; 

    }else{
      subMenu.classList.toggle('nav__inner--view');
    }
  }

});

function isActive(element, string){
  return element.classList.value.includes(string);
}

window.addEventListener('resize', ()=>{
  if (window.innerWidth > 700) {
    const navInner = document.querySelectorAll('.nav__inner');

    navInner.forEach(navIn => {
      navIn.style.height = '';
    })
  }
})