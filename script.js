// Mouse movement glow
document.addEventListener("mousemove",(e)=>{
    const background=document.querySelector(".background");
    if(!background) return;
    const x=e.clientX/window.innerWidth*100;
    const y=e.clientY/window.innerHeight*100;
    background.style.background=
    `radial-gradient(circle at ${x}% ${y}%,
    rgba(0,212,255,.35), transparent 20%),
    radial-gradient(circle at 80% 70%,
    rgba(0,255,157,.25), transparent 35%),
    linear-gradient(135deg,#071421,#0b1d34,#02050a)`;
});

