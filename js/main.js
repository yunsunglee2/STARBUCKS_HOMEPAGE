const searchEl = document.querySelector('.search');
const inputSeachEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  inputSeachEl.focus();
});
inputSeachEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  inputSeachEl.setAttribute('placeholder', '통합검색');
});
inputSeachEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  inputSeachEl.setAttribute('placeholder', '');
});

const  badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(
  function(){
    console.log(window.scrollY);
    if(window.scrollY > 700){
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      })
    } else {
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
      })
    }
  }
), 300);


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl , index){
  gsap.to(fadeEl, 1, {
    opacity:1,
    delay: (index + 1) * .6
  });
});
 

new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: true,
  // freeMode: true,
  mousewheel: true,
  autoplay: {
    delay: 4000
  },
  pagination: {
    el: '.promotion .swiper-pagination',  
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromtion = false ;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromtion = !isHidePromtion
  if (isHidePromtion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  // gasap.to(요소, 지속시간, 옵션);
  gsap.to(selector, 
    random(1.5, 2.5), 
    {
      y: size,
      repeat: -1,
      yoyo:true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelector('.section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.controller());
});