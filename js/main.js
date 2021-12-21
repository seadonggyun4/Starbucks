console.log('Starbucks clone Project!!');

/* ==============================  HEADER Search Box Event ============================== */
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



/* ============================== HEADER badges Event ============================== */
const badgeEl = document.querySelector('header .badges');

//window: document가 html파일문서를 의미하듯이 window는 브라우저 창 을 의미한다.

/*
보통 scroll 함수는 실행되는 함수가 굉장히 많아질수 있고 이는 곧 프로젝트가 무거워질수 있음을 의미
이런점을 보안하기 위해 외부 라이브러리를 통해 제어하면 보안할수 있다. 
lodash라는 라이브러리에서 제공하는 " -.throttle" 이라는 함수는 몇초에 한번씩 실행을 할지 제어할수 있는 함수이다.
뒤의 300은 0.3초를 의미하며 이렇게 부하를 걸면 매 순간 함수가 실행되며 프로젝트가 무거워 지는것을 방지 할 수 있다.

_.throttle(함수, 시간)
*/
window.addEventListener('scroll', _.throttle(function(){
  console.log(scrollY);

  if (window.scrollY > 500){
    //gsap.to(적용요소, 지속시간, 스타일옵션)
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

/* ============================== VISUAL fade-in Event ============================== */
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
  //gsap.to(적용요소, 지속시간, 스타일옵션)
  gsap.to(fadeEl, 1, {
    opacity:1,
    // 0.7 -> 1.4 -> 2.1 -> 2.7
    delay: (index + 1) * .7
  });
});