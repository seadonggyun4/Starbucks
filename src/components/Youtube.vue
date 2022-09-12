<template>
  <!-- ========== YOUTUBE VIDEO ==========  -->
  <!-- youtube -->
  <section class="youtube" aria-label="background video effect">
    <div class="youtube_area" aria-hidden="true">
      <div id="player"></div>
    </div>
    <div class="youtube_cover" aria-hidden="true"></div>

    <!-- animation -->
    <div class="inner" aria-hidden="true">
      <img class="floating floating1" src="../assets/images/floating1.png" alt="Icon" aria-hidden="true"/>
      <img class="floating floating2" src="../assets/images/floating2.png" alt="Icon" aria-hidden="true"/>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'


export default {
  mounted(){
    this.floatingAnimation()
  },
  methods: {
    floatingAnimation(){
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
            delay: random(0, delay) //다시 애니메이션 이 실행되기까지 걸리는 시간ㄴ 
          }
        )
      }

      //css 선택자를 넣을수 있다.
      floatingObject('.floating1', 1, 55);
      floatingObject('.floating2', .5, 55);
      floatingObject('.floating3', 1.5, 60);
    }
  }
}
</script>