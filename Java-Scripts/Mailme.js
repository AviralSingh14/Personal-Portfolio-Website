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