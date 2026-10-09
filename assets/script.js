
const bodyThingthings = document.querySelectorAll('.bodyThing .things');

bodyThingthings.forEach((things) => {
    things.addEventListener('click', (e) => {
        const bodyThing = things.parentElement;

        bodyThing.classList.toggle('open');
})})
