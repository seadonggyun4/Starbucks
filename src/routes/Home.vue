<template>
    <Header />
    <Visual />
    <Notice />
    <Rewards />
    <Youtube />
    <SeasonProduct />
    <ReserveCoffee />
    <PickYourFavorite />
    <ReserveStore />
    <FindStore />
    <Awards />
    <Footer />
    <ToTop />
</template>

<script>
import Header from '@/components/Header.vue'
import Visual from '@/components/Visual.vue'
import Notice from '@/components/Notice.vue';
import Rewards from '@/components/Rewards.vue';
import Youtube from '@/components/Youtube.vue';
import SeasonProduct from '@/components/SeasonProduct.vue';
import ReserveCoffee from '@/components/ReserveCoffee.vue';
import PickYourFavorite from '@/components/PickYourFavorite.vue';
import ReserveStore from '@/components/ReserveStore.vue';
import FindStore from '@/components/FindStore.vue';
import Awards from '@/components/Awards.vue';
import Footer from '@/components/Footer.vue';
import ToTop from '@/components/ToTop.vue';

import ScrollMagic from 'scrollmagic'

export default {
    components:{
        Header,
        Visual,
        Notice,
        Rewards,
        Youtube,
        SeasonProduct,
        ReserveCoffee,
        PickYourFavorite,
        ReserveStore,
        FindStore,
        Awards,
        Footer,
        ToTop
    },
    mounted(){
        this.scrollPositionAnimation()
    },
    methods:{
        scrollPositionAnimation(){
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
        }
    }
}
</script>

