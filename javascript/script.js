//Определение всех блоков контента на сайте в виде массива
const blocks = document.querySelectorAll(".section-block");
let arr = new Array;
for(var i = 0; i < blocks.length; i++){
    arr.push(blocks[i].id);
}

let slider; //Переменная определяет с каким слайдером мы работаем
let sliderDots; //Переменная определяет с точками какого слайдера мы работаем

//Вызывается при открыти страницы
function openActive(){
    if(sessionStorage.getItem('idActive')==null){
        sessionStorage.setItem('idActive', 'cont_main');
    }
        changeContent(sessionStorage.getItem('idActive'));
}

//Функция по изменению отображающегося блока
function changeContent(id){
    let activeClass = document.querySelectorAll('.section-active');
    if(activeClass!==null){
      for(let i=0; i<activeClass.length; i++){
        activeClass[i].classList.remove('section-active');
      }
    }
    document.getElementById(id).classList.add('section-active');
    sessionStorage.setItem('idActive', id);

    //Переключение отображающегося слайдера
    switch (id) {
      case 'cont_lic': 
        slider = 'item2';
        sliderDots = 'slider-dots_item2';
      break;
      case 'cont_ust': 
        slider = 'item3';
        sliderDots = 'slider-dots_item3';
      break; 
      case 'cont_spr': 
        slider = 'item4';
        sliderDots = 'slider-dots_item4';
      break; 
      case 'cont_kab': 
        slider = 'item5';
        sliderDots = 'slider-dots_item5';
      break; 
      case 'cont_avt': 
        slider = 'item6';
        sliderDots = 'slider-dots_item6';
      break; 
      default:
        slider = 'item1';
        sliderDots = 'slider-dots_item1';
        break;
    }
    //Установка первого слайда
    currentSlide(1);
}

//Активация при открытии страницы
openActive();

//Номер отображаемого слайда
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName(slider);
    var dots = document.getElementsByClassName(sliderDots);
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
