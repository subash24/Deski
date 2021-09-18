let links = document.querySelectorAll('.nav-links'); 
let active = document.querySelector('.active');
let mediaQuery = window.matchMedia('(max-width: 798px)');

let smContainer = document.querySelector('.icon-container');
let lgContainer = document.querySelector('.icon-container2');
let count = 4;
let smIcons = document.querySelectorAll('.sm-icon');
let lgIcons = document.querySelectorAll('.lg-icon');
let con1Icons = [...smContainer.children];
let con2Icons = [...lgContainer.children];

console.log(lgContainer,lgIcons,smContainer,smIcons);
links.forEach(link=>{
    link.addEventListener('click',()=>{
       active.classList.remove('active');
       link.classList.add('active');
       active = link;
    })
})



function changeContainer(e) {
  if (e.matches) {
    smIcons.forEach(smIcon=>{
        smContainer.appendChild(smIcon);
    });
    
    lgIcons.forEach(lgIcon=>{
        lgContainer.appendChild(lgIcon);
    });
  } 
  else {
        con1Icons.forEach(smIcon=>{
        smContainer.appendChild(smIcon);
    });
    
    con2Icons.forEach(lgIcon=>{
        lgContainer.appendChild(lgIcon);
    });
  }
}

mediaQuery.addEventListener('change', changeContainer);
