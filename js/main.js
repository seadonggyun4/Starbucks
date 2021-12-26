console.log(' [== Starbucks clone Project! ==]');

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


for (let i = 0; i < mainMenuItems.length; i++) {
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



/* ============================== HEADER: badges & to-top button Event ============================== */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

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

  if (window.scrollY > 500){
    //gsap.to(적용요소, 지속시간, 스타일옵션)  => gsap 라이브러리의 명령어
    //배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity:0,
      display: 'none'
    });
    //버튼보이기
    gsap.to(toTopEl, .4, {
      x:0
    })
  } else{
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl, .4, {
      x: 100
    })
  }
},300));


toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  })
})



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
// const swiperEl = document.querySelector('.promotion .swiper-slide .swiper-slide-active')
// console.log(swiperEl);


/* ============================== AWARDS: AWARDS swiper ============================== */
var swiper = new Swiper('.awards .swiper-container', {
  slidesPerView: 5, //한번에 보여줄 슬라이드 개수
  autoplay: true,
  loop: true, // 반복재생 여부
  spaceBetween: 30,

  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});





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

/* ============================== YOUTUBE VIEDO: floating animation ============================== */
// [범위 랜덤 함수(소수점 2자리까지)]
// random(최솟값, 최댓값): 최솟값 ~ 최댓값 사이의 랜덤한 값을 적용한다.
function random(min, max) { 
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size){
  // gsap.to(요소,시간,적용스타일)
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      y: size, // y축으로 얼마나 움직일지
      repeat: -1, // 반복 여부: -1은 무한반복을 의미
      yoyo: true, // yoyo 는 한번재생된 애니메이션을 역으로 다시 재생할수있는 함수
      ease: Power1.easeInOut, //easing 함수
      delay: random(0, delay) //다시 애니메이션 이 실행되기까지 걸리는 시간ㄴ 
    }
  )
}

//css 선택자를 넣을수 있다.
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


/* ============================== ALL: scroll position animation ============================== */
const spyEls = document.querySelectorAll('section.scroll-spy');

/*
구조:

ScrollMagic 에서 추가한 옵션들을 -> addTo(ScrollMagic.Contoller)를 통해내부의 컨트롤러에 내용을 할당해
실제로 동작할수 있는 구조
*/

spyEls.forEach(function(spyEl){
  //Scene: 특정 요소를 감지하는 메소드
  //setClassToggle: class 를 토글 시켜주는 메소드
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //감시할 요소를 인지, 식별하는 지점을 명시 -> 뷰포트 최상단 0 ~ 뷰포트 최하단 1 로 환산한다. 
    })
    .setClassToggle(spyEl, 'show') // setClassToggle(적용될 식별자, 토글될 클래스 명)
    .addTo(new ScrollMagic.Controller());
})


/* ============================== FOOTER : calculate date and year ============================== */

const thisYear = document.querySelector('.this-year');
//textContent 는 텍스트 값을 받아오거나 수정할수 있다. 여기서는 수정을 의미
//Date()함수로 현재 시간,년도,월,일,요일 등을 받고 getFullyear()함수로 그중 년도를 추출
thisYear.textContent = new Date().getFullYear();