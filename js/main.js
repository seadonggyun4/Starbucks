console.log('Starbucks clone Project!!');

/* ==============================  HEADER: Search Box Event ============================== */
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', function(){
  //focus()는 강제로 focus상태로 만드는 명령어
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  //setAttribute(속성, 값) 으로 html의 요소를 제어할 수 있다.
  searchInputEl.setAttribute('placeholder', '통합검색');
})


searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})

/* ============================== HEADER: main-menu dropbox ============================== */
const mainMenuItems = document.querySelectorAll('.main-menu .item');


console.log(mainMenuItems.length);

for (let i = 0; i < mainMenuItems.length; i++) {
  console.log(mainMenuItems[i]);
  mainMenuItems[i].addEventListener('mouseover',function(){
    let j = 0;
    while(j < mainMenuItems.length){
      mainMenuItems[j++].className = 'item';
    }
    mainMenuItems[i].className = 'item show';
  })

  mainMenuItems[i].addEventListener('mouseout',function(){
    mainMenuItems[i].className = 'item';
  })
  
}



/* ============================== HEADER: badges Event ============================== */
const badgeEl = document.querySelector('header .badges');

//window: document가 html파일문서를 의미하듯이 window는 브라우저 창 을 의미한다.

/*
보통 scroll 함수는 실행되는 함수가 굉장히 많아질수 있고 이는 곧 프로젝트가 무거워질수 있음을 의미
이런점을 보안하기 위해 외부 라이브러리를 통해 제어하면 보안할수 있다. 
lodash라는 라이브러리에서 제공하는 " -.throttle" 이라는 함수는 몇초에 한번씩 실행을 할지 제어할수 있는 함수이다.
뒤의 300은 0.3초를 의미하며 이렇게 부하를 걸면 매 순간 함수가 실행되며 프로젝트가 무거워 지는것을 방지 할 수 있다.

_.throttle(함수, 시간)

=> lodash 라이브러리의 명령어
*/
window.addEventListener('scroll', _.throttle(function(){
  console.log(scrollY);

  if (window.scrollY > 500){
    //gsap.to(적용요소, 지속시간, 스타일옵션)  => gsap 라이브러리의 명령어
    gsap.to(badgeEl, .6, {
      opacity:0,
      display: 'none'
    });
  } else{
    gsap.to(badgeEl, .6, {
      opacity:1,
      display: 'block'
    });
  }


},300));

/* ============================== VISUAL: fade-in Event ============================== */
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
  //gsap.to(적용요소, 지속시간, 스타일옵션)
  gsap.to(fadeEl, 1, {
    opacity:1,
    // 0.7 -> 1.4 -> 2.1 -> 2.7
    delay: (index + 1) * .7
  });
});


/* ============================== NOTICE: notice-line swiper ============================== */

//new Swiper(선택자, 옵션)
var swiper = new Swiper(".notice-line .swiper-container", {
  direction: "vertical", // 슬라이드 방향
  autoplay: true, //자동재생 여부
  loop: true // 반복재생 여부
});

/* ============================== NOTICE: promotion swiper ============================== */
var swiper = new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데에 보이게 하기
  loop: true, // 반복재생 여부
  autoplay: {
    delay: 5000
  }, //자동재생 여부
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true // 클릭 가능여부
  },

  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


const swiperEl = document.querySelector('.promotion .swiper-slide .swiper-slide-active')
console.log(swiperEl);

/* ============================== NOTICE: promotion toggle ============================== */
const promotionEl = document.querySelector('.promotion'); //프로모션 페이지
const promotionToggleBtn = document.querySelector('.toggle-promotion')//토글버튼
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion // !는 부정문 즉 반대 값을 의미한다.

  if(isHidePromotion){
    //숨김 처리!
    promotionEl.classList.add('hide');

  } else {
    //보임 처리!
    promotionEl.classList.remove('hide');
  }
});



