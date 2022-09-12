<template>
    <!-- ==========  AWARDS ==========  -->
    <section class="awards">
        <div class="inner">
            <swiper class="swiper-container"
            :modules="modules"
            :slides-per-view="4"
            :space-between="30"
            :autoplay="{delay: 5000}"
            :loop="true"
            :navigation="true">
                <swiper-slide class="swiper-slide">
                    <img src="../assets/images/awards_slide1.jpg" alt="award image" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../assets/images/awards_slide2.jpg" alt="award image" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../assets/images/awards_slide3.jpg" alt="award image" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../assets/images/awards_slide4.jpg" alt="award image" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../assets/images/awards_slide5.jpg" alt="award image" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../assets/images/awards_slide6.jpg" alt="award image" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../assets/images/awards_slide7.jpg" alt="award image" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../assets/images/awards_slide8.jpg" alt="award image" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../assets/images/awards_slide9.jpg" alt="award image" />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../assets/images/awards_slide10.jpg" alt="award image" />
                </swiper-slide>
            </swiper>

            <!-- <div class="swiper-prev">
                <div class="material-icons">arrow_back</div>
            </div>
            <div class="swiper-next">
                <div class="material-icons">arrow_forward</div>
            </div> -->
        </div>
    </section>
</template>

<script>
// import Swiper core and required modules
import { Navigation} from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },  
    setup() {
      return {
        modules: [Navigation],
      };
    },
}
</script>