const blocks = document.querySelectorAll('.block_2');
const view = document.querySelector('.main__view');
const close = document.querySelector('.main__close');

view.addEventListener('click', function () {
    view.classList.toggle('active')
    close.classList.toggle('active')

    blocks.forEach(block => block.classList.add('active'))
})

close.addEventListener('click', function () {
    view.classList.toggle('active')
    close.classList.toggle('active')

    blocks.forEach(block => block.classList.remove('active'))
})

