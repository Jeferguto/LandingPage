const burguerIcon = document.querySelector('.nav__burguer');
const navOverlay = document.querySelector('.nav__overlay');

burguerIcon.addEventListener('click', ()=>{
    burguerIcon.classList.toggle('nav__burguer--open');

    navOverlay.classList.toggle('nav__overlay--view')
});

navOverlay.addEventListener('click', (e)=>{
    e.preventDefault();
    const currentElement = e.target;
    //console.log(e.target.classList.value);

    if(isActive(currentElement, 'nav__parent')){
        //console.log('Existe submmenu')
        const subMenu = currentElement.parentElement.children[1];
        console.log(subMenu);

        if(window.innerWidth < 768){

            let height = (subMenu.clientHeight == 0)
                ? subMenu.scrollHeight : 0;
            
            subMenu.style.height = `${height}px`;
        }else{

        }
    }
});

function isActive(element, string) {
    return element.classList.value.includes(String);
}