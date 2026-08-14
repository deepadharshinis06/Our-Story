/* =========================================================
OUR FOREVER ❤️
FINAL EXPERIENCE CONTROLLER
========================================================= */

/* =========================================================
GLOBAL VARIABLES
========================================================= */

let starCanvas = null;
let starContext = null;

let stars = [];

let floatingHeartTimer = null;

let animationFrame = null;

/* =========================================================
DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

console.log("OUR FOREVER ❤️ Started");

initializeStars();

initializeFloatingHearts();

});

/* =========================================================
SCREEN NAVIGATION
========================================================= */

function nextScreen(id) {

const current =
    document.querySelector(".screen.active");

const next =
    document.getElementById(id);


if (!next) {

    console.warn(
        `Screen "${id}" does not exist.`
    );

    return;
}


if (current === next) {
    return;
}


if (current) {

    current.classList.remove("active");

}


setTimeout(() => {

    next.classList.add("active");

    next.scrollTop = 0;

    restartScreenAnimations(next);

}, 120);

}

/* =========================================================
RESTART CSS ANIMATIONS
========================================================= */

function restartScreenAnimations(screen) {

if (!screen) {
    return;
}


const animatedElements =
    screen.querySelectorAll(
        "[class*='line'], " +
        ".memory-final-line, " +
        ".memory-reveal, " +
        ".memory-next, " +
        ".ride-title, " +
        ".ride-photo-frame, " +
        ".ride-memory, " +
        ".ride-next, " +
        ".memory-name, " +
        ".little-final, " +
        ".little-next"
    );


animatedElements.forEach(element => {

    element.style.animation = "none";

});


void screen.offsetWidth;


animatedElements.forEach(element => {

    element.style.animation = "";

});

}

/* =========================================================
START JOURNEY
========================================================= */

function startJourney() {

createHeartBurst();

nextScreen("memoryIntro");

}

/* =========================================================
OPEN ENVELOPE
========================================================= */

function openEnvelope() {

const envelope =
    document.getElementById("envelope");


if (!envelope) {
    return;
}


if (envelope.classList.contains("open")) {
    return;
}


envelope.classList.add("open");

createSmallHeartBurst();


setTimeout(() => {

    nextScreen("loveLetter");

}, 1000);

}

/* =========================================================
SAY YES
========================================================= */

function sayYes() {

createHeartExplosion();


setTimeout(() => {

    nextScreen("final");

}, 850);

}

/* =========================================================
RESTART
========================================================= */

function restart() {

const screens =
    document.querySelectorAll(".screen");


screens.forEach(screen => {

    screen.classList.remove("active");

    screen.scrollTop = 0;

});


const envelope =
    document.getElementById("envelope");


if (envelope) {

    envelope.classList.remove("open");

}


setTimeout(() => {

    const intro =
        document.getElementById("intro");


    if (intro) {

        intro.classList.add("active");

        intro.scrollTop = 0;

    }

}, 100);


createHeartBurst();

}

/* =========================================================
HEART BURST
========================================================= */

function createHeartBurst() {

const hearts = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💞",
    "✨"
];


for (let i = 0; i < 25; i++) {

    const heart =
        document.createElement("div");


    heart.className = "heart";


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.bottom =
        "-30px";


    heart.style.animationDuration =
        (3 + Math.random() * 3) + "s";


    heart.style.fontSize =
        (14 + Math.random() * 22) + "px";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 7000);

}

}

/* =========================================================
SMALL HEART BURST
========================================================= */

function createSmallHeartBurst() {

const hearts = [
    "♡",
    "♥",
    "💕",
    "💗"
];


for (let i = 0; i < 10; i++) {

    const heart =
        document.createElement("div");


    heart.className = "heart";


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        (40 + Math.random() * 20) + "vw";


    heart.style.bottom =
        "-20px";


    heart.style.animationDuration =
        (3 + Math.random() * 2) + "s";


    heart.style.fontSize =
        (12 + Math.random() * 15) + "px";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 6000);

}

}

/* =========================================================
HEART EXPLOSION
========================================================= */

function createHeartExplosion() {

const hearts = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "💞",
    "✨"
];


for (let i = 0; i < 90; i++) {

    const heart =
        document.createElement("div");


    heart.style.position =
        "fixed";


    heart.style.left =
        "50%";


    heart.style.top =
        "50%";


    heart.style.zIndex =
        "9999";


    heart.style.pointerEvents =
        "none";


    heart.style.fontSize =
        (12 + Math.random() * 25) + "px";


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    const angle =
        Math.random() *
        Math.PI *
        2;


    const distance =
        100 +
        Math.random() *
        500;


    const x =
        Math.cos(angle) *
        distance;


    const y =
        Math.sin(angle) *
        distance;


    const rotation =
        Math.random() *
        720 -
        360;


    heart.animate(

        [

            {
                transform:
                    "translate(-50%, -50%) scale(0)",

                opacity: 1

            },

            {

                transform:
                    `translate(
                        calc(-50% + ${x}px),
                        calc(-50% + ${y}px)
                    )
                    scale(1.4)
                    rotate(${rotation}deg)`,

                opacity: 0

            }

        ],

        {

            duration:
                1000 +
                Math.random() * 1000,

            easing:
                "cubic-bezier(.17,.67,.35,1)"

        }

    );


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 2200);

}

}

/* =========================================================
CONTINUOUS FLOATING HEARTS
========================================================= */

function initializeFloatingHearts() {

if (floatingHeartTimer) {

    clearInterval(
        floatingHeartTimer
    );

}


floatingHeartTimer =
    setInterval(
        createFloatingHeart,
        1800
    );

}

/* =========================================================
CREATE FLOATING HEART
========================================================= */

function createFloatingHeart() {

const hearts = [
    "♡",
    "♥",
    "❤",
    "♡"
];


const heart =
    document.createElement("div");


heart.className = "heart";


heart.textContent =
    hearts[
        Math.floor(
            Math.random() *
            hearts.length
        )
    ];


heart.style.left =
    Math.random() * 100 + "vw";


heart.style.bottom =
    "-40px";


heart.style.animationDuration =
    (7 + Math.random() * 6) + "s";


heart.style.fontSize =
    (10 + Math.random() * 12) + "px";


heart.style.opacity =
    0.35 +
    Math.random() * 0.4;


document.body.appendChild(heart);


setTimeout(() => {

    heart.remove();

}, 14000);

}

/* =========================================================
STAR FIELD
========================================================= */

function initializeStars() {

starCanvas =
    document.getElementById("stars");


if (!starCanvas) {

    console.warn(
        "Star canvas not found."
    );

    return;

}


starContext =
    starCanvas.getContext("2d");


resizeStars();

createStars();


if (animationFrame) {

    cancelAnimationFrame(
        animationFrame
    );

}


drawStars();


window.addEventListener(
    "resize",
    handleStarResize
);

}

/* =========================================================
STAR RESIZE
========================================================= */

function handleStarResize() {

resizeStars();

createStars();

}

/* =========================================================
RESIZE CANVAS
========================================================= */

function resizeStars() {

if (!starCanvas) {
    return;
}


const pixelRatio =
    window.devicePixelRatio || 1;


starCanvas.width =
    window.innerWidth *
    pixelRatio;


starCanvas.height =
    window.innerHeight *
    pixelRatio;


starCanvas.style.width =
    window.innerWidth + "px";


starCanvas.style.height =
    window.innerHeight + "px";


if (starContext) {

    starContext.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
    );

}

}

/* =========================================================
CREATE STARS
========================================================= */

function createStars() {

if (!starCanvas) {
    return;
}


stars = [];


const amount =
    Math.min(
        180,
        Math.floor(
            window.innerWidth / 5
        )
    );


for (let i = 0; i < amount; i++) {

    stars.push({

        x:
            Math.random() *
            window.innerWidth,

        y:
            Math.random() *
            window.innerHeight,

        size:
            Math.random() * 1.5,

        opacity:
            0.2 +
            Math.random() * 0.7,

        speed:
            0.003 +
            Math.random() * 0.01

    });

}

}

/* =========================================================
DRAW STARS
========================================================= */

function drawStars() {

if (!starCanvas || !starContext) {
    return;
}


starContext.clearRect(
    0,
    0,
    window.innerWidth,
    window.innerHeight
);


const time =
    Date.now();


stars.forEach(star => {

    const twinkle =
        Math.sin(
            time *
            star.speed
        ) * .01;


    const opacity =
        Math.max(
            .15,
            Math.min(
                .9,
                star.opacity +
                twinkle
            )
        );


    starContext.beginPath();


    starContext.arc(
        star.x,
        star.y,
        star.size,
        0,
        Math.PI * 2
    );


    starContext.fillStyle =
        `rgba(
            255,
            230,
            245,
            ${opacity}
        )`;


    starContext.fill();

});


animationFrame =
    requestAnimationFrame(
        drawStars
    );

}

/* =========================================================
KEYBOARD
ESC → RESTART
========================================================= */

document.addEventListener(
"keydown",
event => {

    if (
        event.key === "Escape"
    ) {

        restart();

    }

}

);

/* =========================================================
MAKE FUNCTIONS AVAILABLE TO HTML
========================================================= */

window.nextScreen =
nextScreen;

window.startJourney =
startJourney;

window.openEnvelope =
openEnvelope;

window.sayYes =
sayYes;

window.restart =
restart;
/* =========================================
   PLAYFUL NO BUTTON
========================================= */

function playNo() {

    const noButton = document.getElementById("noButton");

    if (!noButton) return;

    const messages = [
        "Nope 🙈",
        "Try again 😌",
        "Are you sure? 🥺",
        "Nice try 😂",
        "You can't escape ❤️",
        "Wrong answer 🙈",
        "Think again, Papa 😏"
    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    noButton.innerText = randomMessage;


    /* Small playful movement */

    const x = (Math.random() * 120) - 60;
    const y = (Math.random() * 60) - 30;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;


    /* Bring it back after a moment */

    setTimeout(() => {

        noButton.style.transform = "translate(0, 0)";

    }, 900);
}