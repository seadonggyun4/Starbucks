<template>
    <!-- ========== HEADER ==========  -->
    <header>
      <div class="inner" aria-hidden="true">
        <!-- logo -->
        <a class="logo" href="/">
          <img src="../assets/images/starbucks_logo.png" alt="starbucks logo"/>
        </a>

        <!-- sub-menu -->
        <div class="sub-menu">
          <ul class="menu">
            <li class="item"><a href="/signin">Sign In</a></li>
            <li class="item"><a href="#">My Starbucks</a></li>
            <li class="item"><a href="#">Customer Service & Ideas</a></li>
            <li class="item"><a href="#">Find a Store</a></li>
          </ul>
          <div class="search">
            <input type="text" class="text"/>
            <div class="material-icons" aria-hidden="true">search</div>
          </div>
        </div>

        <!-- main-menu -->
        <ul class="main-menu">
          <li class="item">
            <div class="item__name">COFFEE</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner contents-sub__menu">
                  <li>
                    <h4>커피</h4>
                    <ul>
                      <li>스타벅스 원두</li>
                      <li>스타벅스 비아</li>
                      <li>스타벅스 오리가미</li>
                    </ul>
                  </li>
                  <li>
                    <h4>에스프레소 음료</h4>
                    <ul>
                      <li>도피오</li>
                      <li>에스프레소 마끼아또</li>
                      <li>아메리카노</li>
                      <li>마키아또</li>
                      <li>카푸치노</li>
                      <li>라떼</li>
                      <li>모카</li>
                      <li>리스트레또 비안코</li>
                    </ul>
                  </li>
                  <li>
                    <h4>커피이야기</h4>
                    <ul>
                      <li>스타벅스 로스트 스팩트럼</li>
                      <li>최상의 아라비카 원두</li>
                      <li>한잔의 커피가 완성되기까지</li>
                      <li>클로버 & 커피 추출시스템</li>
                    </ul>
                  </li>
                  <li>
                    <h4>최상의 커피를 즐기는 법</h4>
                    <ul>
                      <li>커피 프레스</li>
                      <li>푸어 오버</li>
                      <li>아이스 푸어 오버</li>
                      <li>커피 메이커</li>
                      <li>리저브를 매장에서 다양하게 즐기는법</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h4>나와 어울리는 커피 찾기</h4>
                  <p>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</p>
                  <h4>나와 어울리는 커피 찾기</h4>
                  <p>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="item__name">MENU</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner contents-sub__menu">
                  <li>
                    <h4>음료</h4>
                    <ul>
                      <li>콜드 브루</li>
                      <li>브루드 커피</li>
                      <li>에스프레소</li>
                      <li>프라푸치노</li>
                      <li>블렌디드 음료</li>
                      <li>스타벅스 피지오</li>
                      <li>티(티바나)</li>
                      <li>기타 제조 음료</li>
                      <li>스타벅스 주스(병음료)</li>
                    </ul>
                  </li>
                  <li>
                    <h4>푸드</h4>
                    <ul>
                      <li>베이커리</li>
                      <li>케익</li>
                      <li>샌드위치 & 샐러드</li>
                      <li>따뜻한 푸드</li>
                      <li>과일 & 요거트</li>
                      <li>스낵 & 미니 디저트</li>
                      <li>아이스크림</li>
                    </ul>
                  </li>
                  <li>
                    <h4>상품</h4>
                    <ul>
                      <li>머그</li>
                      <li>글라스</li>
                      <li>플라스틱 텀블러</li>
                      <li>스테인리스 텀블러</li>
                      <li>보온병</li>
                      <li>액세서리</li>
                      <li>커피 용품</li>
                      <li>패키지 티(티바나)</li>
                    </ul>
                  </li>
                  <li>
                    <h4>카드</h4>
                    <ul>
                      <li>실물카드</li>
                      <li>e-Gift 카드</li>
                    </ul>
                  </li>
                  <li>
                    <h4>메뉴 이야기</h4>
                    <ul>
                      <li>콜드 브루</li>
                      <li>스타벅스 티바나</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h4 class="new">스타벅스 티바나</h4>
                  <p>다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의 티를 선보입니다.</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="item__name">STORE</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner contents-sub__menu">
                  <li>
                    <h4>매장 찾기</h4>
                    <ul>
                      <li>퀵 검색</li>
                      <li>지역 검색</li>
                      <li>My 매장</li>
                    </ul>
                  </li>
                  <li>
                    <h4>매장 이야기</h4>
                    <ul>
                      <li>청담스타</li>
                      <li>티바나 인스파이어드 매장</li>
                      <li>파미에파크</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h4>매장 찾기</h4>
                  <p>보다 빠르게 매장을 찾아보세요.</p>
                  <h4 class="new">청담스타</h4>
                  <p>스타벅스 1,000호점인 청담스타점을 만나보세요.</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="item__name">RESPONSIBILITY</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner contents-sub__menu">
                  <li>
                    <h4>지역 사회 참여 활동</h4>
                    <ul>
                      <li>회망배달 캠페인</li>
                      <li>재능기부 카페 소식</li>
                      <li>커뮤니티 스토어</li>
                      <li>청년인재 양성</li>
                      <li>우리 농산물 사랑 캠페인</li>
                      <li>우리 문화 지키기</li>
                    </ul>
                  </li>
                  <li>
                    <h4>환경보호 활동</h4>
                    <ul>
                      <li>환경 발자국 줄이기</li>
                      <li>일회용 컵 없는 매장</li>
                      <li>커피 원두 재활용</li>
                    </ul>
                  </li>
                  <li>
                    <h4>윤리 구매</h4>
                    <ul>
                      <li>윤리적 원두 구매</li>
                      <li>공정무역 인증</li>
                      <li>커피 농가 지원 활동</li>
                    </ul>
                  </li>
                  <li>
                    <h4>글로벌 사회 공헌</h4>
                    <ul>
                      <li>윤리경영 보고서</li>
                      <li>스타벅스 재단</li>
                      <li>지구촌 봉사의 달</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h4>커피원두 재활용</h4>
                  <p>스타벅스 커피 원두를 재활용 해보세요.</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="item__name">MY STARBUCKS REWARDS</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner contents-sub__menu">
                  <li>
                    <h4>마이 스타벅스 리워드</h4>
                    <ul>
                      <li>마이 스타벅스 리워드 소개</li>
                      <li>등급 및 혜택</li>
                      <li>스타벅스 별</li>
                      <li>자주하는 질문</li>
                    </ul>
                  </li>
                  <li>
                    <h4>스타벅스 카드</h4>
                    <ul>
                      <li>스타벅스 카드 소개</li>
                      <li>스타벅스 카드 갤러리</li>
                      <li>등록 및 조회</li>
                      <li>충전 및 이용안내</li>
                      <li>분실신고/환불신청</li>
                      <li>자주하는 질문</li>
                    </ul>
                  </li>
                  <li>
                    <h4>스타벅스 카드 e-Gift</h4>
                    <ul>
                      <li>스타벅스 카드 e-Gift 소개</li>
                      <li>이용안내</li>
                      <li>선물하기</li>
                      <li>자주하는 질문</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h4>스타벅스 카드 등록하기</h4>
                  <p>카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="item__name">WHAT'S NEW</div>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner contents-sub__menu">
                  <li>
                    <h4>프로모션 & 이벤트</h4>
                    <ul>
                      <li>전체</li>
                      <li>스타벅스 카드</li>
                      <li>마이 스타벅스 리워드</li>
                      <li>온라인</li>
                      <li>2017 스타벅스 플래너</li>
                    </ul>
                  </li>
                  <li>
                    <h4>새소식</h4>
                    <ul>
                      <li>전체</li>
                      <li>상품 출시</li>
                      <li>스타벅스의 문화</li>
                      <li>스타벅스 사회공헌</li>
                      <li>스타벅스 카드출시</li>
                    </ul>
                  </li>
                  <li>
                    <h4>매장별 이벤트</h4>
                    <ul>
                      <li>일반 매장</li>
                      <li>신규 매장</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="contents__texture">
                <div class="inner">
                  <h4>매장별 이벤트</h4>
                  <p>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</p>
                  <h4>소셜 스타벅스</h4>
                  <p>다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!</p>
                </div>
              </div>
            </div>
          </li>
        </ul>

      </div>

      <!-- badges -->
      <div class="badges">

        <div class="badge">
          <img src="../assets/images/badge1.jpg" alt="Badge1"/>
        </div>

        <div class="badge">
          <img src="../assets/images/badge2.jpg" alt="Badge2"/>
        </div>
      </div>
    </header>
</template>


<script>
import gsap from 'gsap'
import _ from "lodash"


export default {
  mounted(){
    console.log(' [ ======= ✨Starbucks clone Project✨ ======= ]');

    this.searchBoxEvent()
    this.mainMenuDrop()
    this.badgesAndTotop()
  },
  methods: {
    //검색 활성화 메서드
    searchBoxEvent(){
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
    },
    //메뉴 드랍 메서드
    mainMenuDrop(){
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
    },
    //badges 와 totop 버튼 활성화
    badgesAndTotop(){
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
        window.scrollTo({
          top:0,
          behavior: 'smooth'
        })
      })
    }
  }
}
</script>