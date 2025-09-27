let eye = document.querySelectorAll('.eye');
let eyeBall = document.querySelectorAll('.eyeBall');

function vwToPx(vw) {
    return (vw * window.innerWidth) / 100;
}

function vhToPx(vh) {
    return (vh * window.innerHeight) / 100;
}

function radToDeg(rad) {
    return (90 * 7 * rad) / 11
}



eyeBall.forEach(ball => {
    document.addEventListener('mousemove', (event) => {
        let X = event.offsetX - vwToPx(50);
        let Y = event.offsetY - vhToPx(50);

/*


    (-,-) IV  |    (+,-) I
              |
    -----------------------
              |
    (-,+) III |     (+,+) II

*/

        let theta = radToDeg(Math.atan(Math.abs(Y)/Math.abs(X)));

        if (X>0 && Y>0){ // working
            ball.style.transform = `rotateZ(${theta}deg) translate(2vw,2vw)`;
        } else if(X>0 && Y<0){ // working
            ball.style.transform = `rotateZ(-${theta+90}deg) translate(2vw,2vw)`;
        } else if(X<0 && Y>0){ // working
            ball.style.transform = `rotateZ(-${theta+270}deg) translate(2vw, 2vw)`;
        } else{ //working
            ball.style.transform = `rotateZ(-${theta-180}deg) translate(2vw,2vw)`;
        }

   

    });
});




setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hr>12) {
        hr = hr-12
        hrhnd.style.transform = `rotateZ(${hr*60}deg) translate(2.5vh)`;
        minhnd.style.transform = `rotateZ(${min*6 - 90}deg) translate(5vh)`;
        sechnd.style.transform = `rotateZ(${sec*6 - 90}deg) translate(7.5vh)`;
    } else {
        hrhnd.style.transform = `rotateZ(${hr*60}deg) translate(2.5vh)`;
        minhnd.style.transform = `rotateZ(${min*6 - 90}deg) translate(5vh)`;
        sechnd.style.transform = `rotateZ(${sec*6 - 90}deg) translate(7.5vh)`; 
    }
}, 1000);