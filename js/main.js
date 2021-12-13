console.log('Starbucks clone Project!!');

/*HEADER Search Box Event */
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