const boxes = document.querySelectorAll(".box");
const box = document.querySelectorAll(".box2");


window.addEventListener( 'scroll', checkboxes);
window.addEventListener( 'scroll', checkbox);


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