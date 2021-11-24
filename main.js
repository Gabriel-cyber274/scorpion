let navbar = document.querySelector('#nav2');
let navbarOffsetTop = navbar.offsetTop;
let nav = document.querySelector('#vis')
let nav2 = document.querySelectorAll('#vis2')
let toggle = document.querySelector('#tog')
let sections = document.querySelectorAll('section')
let navbarLinks = document.querySelectorAll('.navbar-dark .navbar-nav .nav-link');
let navbar2Links = document.querySelectorAll('.navbar-light .navbar-nav .nav-link');
let adjust = document.querySelector('#aboutF');
let mainA = document.getElementById('aboutA');
let alt = document.getElementById('altS')
let alt2 = document.getElementById('altS2')
let alt3 = document.getElementById('altS3')
let alt4 = document.getElementById('altS4')
let firstR = document.querySelector('#firstR')
let secondR = document.querySelector('#secondR')
let thirdR = document.querySelector('#thirdR')
let forthR = document.querySelector('#forthR')
let req = document.querySelector('#req')
let realA = document.querySelector('#realA')
let realB = document.querySelector('#realB')
let realC = document.querySelector('#realC')
let realD = document.querySelector('#realD')
let formC =document.querySelector('.formC')
let proC = document.querySelector('.proC')
let navbar3Links = document.querySelectorAll('.nav-item')
let query = window.matchMedia('(max-width:991px)')
let offC = document.querySelector('.offcanvas')



window.addEventListener('scroll',() => {
    mainFn();
})

let mainFn = () => {
    for(i = 0; i < nav2.length; i++) {
        if(window.pageYOffset >= navbarOffsetTop){
            navbar.classList.add('stay');
            navbar.style.width = "100%";
            navbar.classList.add('bg-light');
            nav.style.visibility = "visible";
            nav2[i].style.visibility ="visible";
            toggle.style.visibility = "visible";
            
        }else {
            navbar.classList.remove('stay')
            nav.style.visibility = "hidden";
            nav2[i].style.visibility ="hidden";
            navbar.classList.remove('bg-light');
            toggle.style.visibility = "hidden";
        }

    }
    
    sections.forEach((section,i) => {
        if(window.pageYOffset >= section.offsetTop -10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('active'); 
            })
            navbarLinks[i].classList.add('active'); 

            navbar2Links.forEach(navbar2Link => {
                navbar2Link.classList.remove('active'); 
            })
            navbar2Links[i].classList.add('active'); 

            
            if (query.matches) {
                navbar3Links.forEach(navbar3Link => {
                    navbar3Link.classList.remove('active')
                })
                navbar3Links[i].classList.add('active')

                offC.style.backgroundColor = "rgba(255, 255, 255,.8)"
            }
        

            

                    
    

        }
    })
    if(window.pageYOffset + window.innerHeight >= adjust.offsetTop) {
        mainA.style.paddingTop = "5rem";
        mainA.style.transition = "2s";
    }
    if(window.pageYOffset + window.innerHeight >= alt.offsetTop) {
        firstR.style.opacity = '1';
    }
    if(window.pageYOffset + window.innerHeight >= alt2.offsetTop) {
        secondR.style.opacity = '1';
    }
    if(window.pageYOffset + window.innerHeight >= alt3.offsetTop) {
        thirdR.style.opacity = '1';
    }
    if(window.pageYOffset + window.innerHeight >= alt4.offsetTop) {
        forthR.style.opacity = '1';
    }
    if(window.pageYOffset + window.innerHeight >= req.offsetTop) {
        realA.style.marginLeft = "37vw";
    }
    if(window.pageYOffset + window.innerHeight >= realA.offsetTop) {
        realB.style.marginLeft = "37vw";

    }
    if(window.pageYOffset + window.innerHeight >= realB.offsetTop) {
        realC.style.marginLeft = "37vw";

    }

    if(window.pageYOffset + window.innerHeight >= realC.offsetTop) {
        realD.style.marginLeft = "37vw";

    }    
    if(window.pageYOffset + window.innerHeight >= formC.offsetTop) {
        formC.style.width ="70%";
        formC.style.marginLeft = "15vw";
        proC.style.display = "none";
    }


}

mainFn();

window.addEventListener('resize', () =>{
    window.location.reload();
});