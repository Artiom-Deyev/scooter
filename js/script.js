//Переменные
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next')

const carouselList = document.querySelector('#carousel-display');
const carouselArr = [...carouselList.children];

const carouselArray = document.querySelector('#carousel-array')

const arrLeft = document.querySelector('#carousel-arrow-left')
const arrRight = document.querySelector('#carousel-arrow-right')

const layer = document.querySelector('#layer')
const layerClose = document.querySelector('#layer-close')

const btns = document.querySelectorAll('#button')


//Функции
let distance = 0;

function changeImgForw () {
    btnPrev.disabled = false;
    arrLeft.style.opacity = '1';

    if (distance === -686) {
        distance = distance - 343;

        carouselArray.style.transform = `translateX(${distance}px)`;
        carouselArray.style.transition = '1s';

        btnNext.disabled = true;
        arrRight.style.opacity = '.5';
    } else {
        distance = distance - 343;

        carouselArray.style.transform = `translateX(${distance}px)`;
        carouselArray.style.transition = '1s';
    }
}


function changeImgPrev () {
    btnNext.disabled = false;
    arrRight.style.opacity = '1';

    if (distance === -343) {
        distance = distance + 343;

        carouselArray.style.transform = `translateX(${distance}px)`;
        carouselArray.style.transition = '1s';
        
        btnPrev.disabled = true;
        arrLeft.style.opacity = '.5';
    } else {
        distance = distance + 343;

        carouselArray.style.transform = `translateX(${distance}px)`;
        carouselArray.style.transition = '1s';
    }
}


//Нажатие на кнопки
function pressBtn () {
    layer.style.display = 'block';

    layerClose.addEventListener('click', () => {
        layer.style.display = 'none'
        btns.forEach(el => {el.style.display = 'inline-block'})
    });
    
    btns.forEach(el => {el.style.display = 'none'})
}


//События
btnNext.addEventListener('click',
    changeImgForw);

btnPrev.addEventListener('click',
changeImgPrev);

btns.forEach(btn => {
    btn.addEventListener('click', pressBtn)
})
