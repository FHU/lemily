const boxes = document.querySelectorAll(".box");
const box = document.querySelectorAll(".box2");


window.addEventListener( 'scroll', checkboxes);
window.addEventListener( 'scroll', checkbox);

window.addEventListener('mouseover')
const circle1 = document.querySelector(".one");
circle1.addEventListener('click', function() {
    circle1.children[0].classList.toggle("hidden");
    circle1.children[1].classList.toggle("hidden");
});

const circle2 = document.querySelector(".two");
circle2.addEventListener('click', function() {
    circle2.children[0].classList.toggle("hidden");
    circle2.children[1].classList.toggle("hidden");
});

const circle3 = document.querySelector(".three");
circle3.addEventListener('click', function() {
    circle3.children[0].classList.toggle("hidden");
    circle3.children[1].classList.toggle("hidden");
});

const circle4 = document.querySelector(".four");
circle4.addEventListener('click', function() {
    circle4.children[0].classList.toggle("hidden");
    circle4.children[1].classList.toggle("hidden");
});

const circle5 = document.querySelector(".five");
circle5.addEventListener('click', function() {
    circle5.children[0].classList.toggle("hidden");
    circle5.children[1].classList.toggle("hidden");
});

function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        }
        else {
            box.classList.remove("show");
        }
    });
}

function checkbox() {
    const triggerBottom = window.innerHeight / 5 * 4;

    box.forEach( x => {
        const bxTop = x.getBoundingClientRect().top;

        if (bxTop < triggerBottom) {
            x.classList.add("show");
        }
        else {
            x.classList.remove("show");
        }
    });
}


