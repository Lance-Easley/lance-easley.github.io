const titleSubHeading = document.querySelector("#title-subtext");
const arrowElement = document.querySelector("#arrow");
const mainSectionElement = document.querySelector("#main-section");

function typeAnimation(text, speed) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            titleSubHeading.textContent += text[i];
        }, i * speed)
    };
};

arrowElement.addEventListener("click", () => {
    mainSectionElement.scrollIntoView(true);
})

setTimeout(() => {
    typeAnimation("I do code stuff", 100)
}, 1500)