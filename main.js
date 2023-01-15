const cursorEl = document.querySelector('.cursor')

window.addEventListener('mousemove', (e) => {
    cursorEl.style.left = e.pageX + 'px'
    cursorEl.style.top = e.pageY + 'px'
    cursorEl.setAttribute('data-fromTop', cursorEl.offsetTop - scrollY)
})
let active = 'active';
let wrong = undefined;
window.addEventListener('click', function () {

    if (cursorEl.classList.contains('click')) {
        cursorEl.classList.remove('click')
        cursorEl.offsetWidth;
        cursorEl.classList.add('click')
    } else {
        cursorEl.classList.add('click')
    }
})