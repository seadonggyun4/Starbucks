<template>
    <!-- ========== VISUAL ==========  -->
    <section class="visual">
      <div class="inner">

        <div class="star1" aria-hidden="true"></div>
        <div class="star2" aria-hidden="true"></div>

        <div class="title fade-in">
          <img src="../assets/images/visual_title.png" alt="Starbucks Delightful start to the years" />
          <a class="btn btn--white effect" href="javascript:void(0)" >자세히 보기</a>
        </div>

        <div class="fade-in">
          <img class="cup1 image" src="../assets/images/visual_cup1.png" alt="new OATEMAL LATTE" />
        </div>

        <div class="fade-in">
          <img class="cup2 image" src="../assets/images/visual_cup2.png" alt="new STARBUCKS CARAMEL CRUMBLE MOCA" />
        </div>

        <div class="fade-in">
          <img class="spoon" src="../assets/images/visual_spoon.png" alt="Spoon"/>
        </div>
        
      </div>
    </section>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted(){
    this.fadeInEvent()
  },
  methods: {
    //fade-in 이벤트
    fadeInEvent(){
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
    }
  }
}
</script>