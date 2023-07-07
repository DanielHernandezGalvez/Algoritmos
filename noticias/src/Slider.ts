let slides = Array.from(document.querySelectorAll(".slide")) as HTMLElement[];

let nextButton = document.querySelector(".next");
let previousButton = document.querySelector(".previous");

let steps = 0;
let isSliding = false;

previousButton?.addEventListener("click", () => {
    if (isSliding) return;
    let activeSlide = getActiveSlide();
    let previousSlide = getPreviousSlide();

    isSliding = true;

    slideOut(activeSlide, "right");
    slideIn(previousSlide, "right");

    previousSlide.addEventListener(
        "transitionend",
        () => {
            isSliding = false;
            steps = steps == 0 ? slides.length - 1 : steps - 1;
        },
        { once: true }
    );
});

nextButton?.addEventListener("click", () => {
    if (isSliding) return;
    let activeSlide = getActiveSlide();
    let nextSlide = getNextSlide();

    isSliding = true;

    slideOut(activeSlide, "left");
    slideIn(nextSlide, "left");

    nextSlide.addEventListener(
        "transitionend",
        () => {
            isSliding = false;
            steps = isLastSlide() ? 0 : steps + 1;
        },
        { once: true }
    );
});

function getActiveSlide() {
    let activeSlide = slides[steps];

    if (activeSlide && activeSlide.classList.contains("active")) {
        return activeSlide;
    }

    throw new Error("activeSlide error");
}

function getNextSlide() {
    return isLastSlide() ? slides[0] : slides[steps + 1];
}

function getPreviousSlide() {
    return steps == 0 ? slides[slides.length - 1] : slides[steps - 1];
}

function isLastSlide() {
    return steps < slides.length - 1 ? false : true;
}

type Direction = "left" | "right";

function slideIn(nextSlide: HTMLElement, direction: Direction = "left") {
    nextSlide.classList.add(direction == "left" ? "next-slide" : "prev-slide");
    // this line is necessary to cause a reflow so that transition takes effect
    nextSlide.offsetHeight;
    nextSlide.classList.add("sliding");

    nextSlide.addEventListener(
        "transitionend",
        () => {
            nextSlide.classList.remove("next-slide", "prev-slide", "sliding");
            nextSlide.classList.add("active");
        },
        { once: true }
    );
}

function slideOut(activeSlide: HTMLElement, direction: Direction = "left") { 
    activeSlide.style.translate = direction == "left" ? '-100%' : '100%'
    activeSlide.addEventListener(
        "transitionend",
        () => {
            activeSlide.style.translate = "";
            activeSlide.classList.remove("active");
        },
        { once: true }
    );
}
