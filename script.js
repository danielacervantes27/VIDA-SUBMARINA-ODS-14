function darkMode(){
    document.body.classList.toggle("dark");
}

/* BURBUJAS */
const bubbles = document.querySelector('.bubbles');

for(let i=0;i<25;i++){
    let span = document.createElement('span');
    span.style.left = Math.random()*100 + "%";
    span.style.animationDuration = (5 + Math.random()*10) + "s";
    span.style.width = span.style.height = (10 + Math.random()*20) + "px";
    bubbles.appendChild(span);
}