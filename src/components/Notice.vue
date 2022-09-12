<template>
  <!-- ========== NOTICE ==========  -->
  <section class="notice">
    <div class="notice-line">
      <div class="bg-left"></div>
      <div class="bg-right"></div>
      <div class="inner"> 
        <div class="inner-left">
          <h2>공지사항</h2>
          <swiper class="swiper-container" style="overflow: hidden;"
            :direction="'vertical'"
            :autoplay="{delay: 5000}"
            :loop="true">
            <swiper-slide class="swiper-slide"><a href="javascript:void(0)">크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내</a></swiper-slide>
            <swiper-slide class="swiper-slide"><a href="javascript:void(0)">[당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트</a></swiper-slide>
            <swiper-slide class="swiper-slide"><a href="javascript:void(0)">스타벅스커피 코리아 애플리케이션 버전 업데이트 안내</a></swiper-slide>
            <swiper-slide class="swiper-slide"><a href="javascript:void(0)">[당첨자 발표] 뉴이어 전자영수증 이벤트</a></swiper-slide>
          </swiper>
          <a href="javascript:void(0)" class="notice-line-more">
            <div class="material-icons" aria-hidden="true">add_circle</div>
          </a>
        </div>
        <div class="inner-right">
          <h2>스타벅스 프로모션</h2>
          <div class="toggle-promotion">
            <div class="material-icons" aria-hidden="true">upload</div>
          </div>
        </div>
      </div>
    </div>


    <div class="promotion">
      <swiper class="swiper-container"
        :modules="modules"
        :slides-per-view="3"
        :space-between="10"
        :autoplay="{delay: 5000}"
        :loop="true"
        :centeredSlides="true"
        :navigation="true"
        :pagination="{ clickable: true }">
        <swiper-slide class="swiper-slide">
          <img src="../assets/images/promotion_slide1.jpg" alt="2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!"/>
          <a class="btn" href="javascript:void(0)">자세히 보기</a>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="../assets/images/promotion_slide2.jpg" alt="2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!"/>
          <a class="btn" href="javascript:void(0)">자세히 보기</a>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="../assets/images/promotion_slide3.jpg" alt="2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!"/>
          <a class="btn" href="javascript:void(0)">자세히 보기</a>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: {
      Swiper,
      SwiperSlide,
  },  
  setup() {
      return {
        modules: [Navigation, Pagination],
      };
  },
  mounted(){
    this.promotionSlideBtn()
    this.promotionToggle()
  },
  methods:{
    //promotionSlide 의 버튼 스타일 적용
    promotionSlideBtn(){
      const promotion = document.querySelector('.promotion')
      const swiperPrev = promotion.querySelector('.swiper-button-prev')
      const swiperNext = promotion.querySelector('.swiper-button-next')

      swiperPrev.classList.add('btn')
      swiperNext.classList.add('btn')
    },
    //promotion 토글 기능
    promotionToggle(){
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
    }
  }
}
</script>