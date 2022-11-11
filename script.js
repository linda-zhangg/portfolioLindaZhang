// Popin animations
Array.from(document.getElementsByClassName("popin")).forEach(element => {
    setTimeout(() => {
    element.style.width = "100%";
    }, Math.floor(Math.random() * 3000));
});

// Spin animations
Array.from(document.getElementsByClassName("spin")).forEach(element => {
    var speed = Math.random()*15 + 10;
    element.style.animationDuration= speed + "s";
});

// Float animations
Array.from(document.getElementsByClassName("float")).forEach(element => {
    var speed = Math.random()*6 + 5;
    element.style.animationDuration= speed + "s";
});