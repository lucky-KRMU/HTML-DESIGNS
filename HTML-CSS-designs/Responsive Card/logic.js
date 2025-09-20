function calc(x, y) {
    const currentTransform = card.style.transform || '';
    if (x>150 && y>250) {
        card.style.transform = `translate(${x/10}px, ${y/10}px) rotate3d(${x/100},${y/150},-1, 10deg)`;
    } else if (x>150 && y<250){
        card.style.transform = `translate(${x/10}px, -${y/20}px) rotate3d(-${x/100},${y/150},1, 10deg)`;
    } else if (x<150 && y<250){
        card.style.transform = `translate(-${x/10}px, -${y/20}px) rotate3d(-${x/100},-${y/150},-1, 10deg)`;
    }
    else {
        card.style.transform = `translate(-${x/10}px, ${y/20}px) rotate3d(-${x/100},-${y/150},1, 10deg)`;
    }
}

let card = document.querySelector('.card');

card.addEventListener('mousemove', (event)=>{
    let X = event.offsetX;
    let Y = event.offsetY;
    calc(X,Y);
})
card.addEventListener('mouseleave', ()=>{
    card.style.transform = '';
})