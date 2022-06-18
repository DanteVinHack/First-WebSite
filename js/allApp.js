const mask = document.querySelector('.mask');
const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    mask.classList.add('visible')
    burger.classList.add('visible')

    mask.addEventListener('click', function(){
        mask.classList.remove('visible')
        burger.classList.remove('visible')
    })

})
