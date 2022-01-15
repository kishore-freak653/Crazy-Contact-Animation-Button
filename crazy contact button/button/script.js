const fab = document.querySelector('.FAB')
const icons = document.querySelector('.icons')

fab.addEventListener('click', ()=>{
    icons.classList.toggle('open')
})