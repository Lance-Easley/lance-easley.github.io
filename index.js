const titleSubHeading = document.querySelector("#title-subtext");

function typeAnimation(text, speed) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            titleSubHeading.textContent += text[i];
        }, i * speed)
    };
};

setTimeout(() => {
    typeAnimation("I do code stuff", 100)
}, 1500)