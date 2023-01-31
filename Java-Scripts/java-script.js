//navigation-menu
let menuToggle = document.querySelector('.menuToggle');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
}

//background
let holder = document.getElementById('holder')

let gs = 50;

window.onload = () => {
    for (let i = 0 ; i < gs; i++){
        for(let j = 0 ; j < gs; j++ ){
            let dot = document.createElement("div")
            dot.classList.add("dot")
            dot.style.animationDelay = `${Math.sin(i * j)}s`
            holder.appendChild(dot)
        }
    }
}

//switch-theme
const switchTheme = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme;
    
    newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    rootElem.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);
}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme);

//TextHoverExpansion
const enhance = id => {
    const element = document.getElementById(id),text = element.innerText.split("");
    element.innerText = "";
    text.forEach(letter => {
      const span = document.createElement("span");
      span.className = "letter";
      span.innerText = letter;
      element.appendChild(span);
    }) 
  }
  enhance("channel-link");
  enhance("channel-link1");
  enhance("channel-link2");


//MouseCursorChange
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach((link) =>{
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
});

//MouseHoverCards

// document.getElementById("cards").onmousemove = e => {
//     for(const card of document.getElementsByClassName("card")){
//         const rect = card.getBoundingClientRect(),
//             x = e.clientX - rect.left,
//             y = e.clientY - rect.top;
//         card.style.setProperty("--mouse-x", `${x}px`);
//         card.style.setProperty("--mouse-y", `${y}px`);
//     }
// }

// document.getElementById("cards1").onmousemove = e => {
//     for(const card1 of document.getElementsByClassName("card1")){
//         const rect = card1.getBoundingClientRect(),
//             x = e.clientX - rect.left,
//             y = e.clientY - rect.top;
//         card1.style.setProperty("--mouse-x", `${x}px`);
//         card1.style.setProperty("--mouse-y", `${y}px`);
//     }
// }

//ObjectsMouseMovement
document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".object1").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })

    document.querySelectorAll(".object7").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
}

//ScrollAnimation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Filter
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.box1').show('');
        }
        else{   
            $('.box1').not('.'+value).hide('500');
            $('.box1').filter('.'+value).show('500');
        }
    })

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
})

