<template>
    <!-- ==========  FOOTER ==========  -->
    <footer>
        <div class="inner">
            <ul class="menu">
                <li><a class="green" href="javascript:void(0)">개인정보처리방침</a></li>
                <li><a href="javascript:void(0)">영상정보처리기기 운영관리 방침</a></li>
                <li><a href="javascript:void(0)">홈페이지 이용약관</a></li>
                <li><a href="javascript:void(0)">위치정보 이용약관</a></li>
                <li><a href="javascript:void(0)">스타벅스 카드 이용약관</a></li>
                <li><a href="javascript:void(0)">윤리경영 핫라인</a></li>
            </ul>
        
            <div class="btn-group">
                <a class="btn btn--white" href="javascript:void(0)">찾아오시는 길</a>
                <a class="btn btn--white" href="javascript:void(0)">신규입점제의</a>
                <a class="btn btn--white" href="javascript:void(0)">사이트 맵</a>
            </div>
        
            <div class="info">
                <span>사업자등록번호 201-81-4207</span>
                <span>(주)스타벅스 화성 대표이사 서동균</span>
                <span>TEL : 02) 3015-2020 / FAX : 02: 3015-1189</span>
                <span>개인정보 책임자 : 서동균</span>
            </div>
        
            <p class="copyright"> 
                <!-- Entities: 아래와 같은 특수기호는 태그가 아닌 문자로서 해석되려고 명시하기 위해서 사용된다. -->
                &copy; <span class="this-year"></span> DongGyun Coffee Company. All Rights Reserved
            </p>
            <img class="logo" src="../assets/images/starbucks_logo_only_text.png" alt="starbucks_logo" />
        </div>
    </footer>
</template>


<script>
export default {
    mounted(){
        this.calculateDateAndYear()
    },
    methods:{
        //날짜 및 연도 계산
        calculateDateAndYear(){
            /* ============================== FOOTER : calculate date and year ============================== */

            const thisYear = document.querySelector('.this-year');
            //textContent 는 텍스트 값을 받아오거나 수정할수 있다. 여기서는 수정을 의미
            //Date()함수로 현재 시간,년도,월,일,요일 등을 받고 getFullyear()함수로 그중 년도를 추출
            thisYear.textContent = new Date().getFullYear();
        }
    }
}
</script>