var current = null;

window.addEventListener('load', () => {

    document.querySelector("#username").addEventListener("mouseover", function (e) {
    if (current) current.pause();
    current = anime({
        targets: "path",
        strokeDashoffset: {
        value: 0,
        duration: 700,
        easing: "easeOutQuart"
        },
        strokeDasharray: {
        value: "240 1386",
        duration: 700,
        easing: "easeOutQuart"
        }
    });
    
    });


    document.querySelector("#password").addEventListener("mouseover", function (e) {
    if (current) current.pause();
    current = anime({
        targets: "path",
        strokeDashoffset: {
        value: -336,
        duration: 700,
        easing: "easeOutQuart"
        },
        strokeDasharray: {
        value: "240 1386",
        duration: 700,
        easing: "easeOutQuart"
        }
    });

    });


    document.querySelector("#submit").addEventListener("mouseover", function (e) {
    if (current) current.pause();
    current = anime({
        targets: "path",
        strokeDashoffset: {
        value: -730,
        duration: 700,
        easing: "easeOutQuart"
        },
        strokeDasharray: {
        value: "530 1386",
        duration: 700,
        easing: "easeOutQuart"
        }
    });
   
    });


});
