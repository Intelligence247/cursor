const cursorEl = document.querySelector('.cursor')

window.addEventListener('mousemove', (e) => {
    cursorEl.style.left = e.pageX + 'px'
    cursorEl.style.top = e.pageY + 'px'
    cursorEl.setAttribute('data-fromTop', cursorEl.offsetTop - scrollY)
})
window.addEventListener('click', function () {

    if (cursorEl.classList.contains('click')) {
        cursorEl.classList.remove('click')
        void cursorEl.offsetWidth;
        cursorEl.classList.add('click')
    } else {
        cursorEl.classList.add('click')
    }
})