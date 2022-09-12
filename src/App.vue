<template>
  <RouterView />
</template>

<script>
import './scss/main.scss'

export default {
  
}
</script>



<style lang="scss">
  #app{
    overflow-x: hidden;
  }

  header .main-menu{
    .item{
      .contents__texture{
        background-image: url(./assets/images/main_menu_pattern.jpg);
      }
    }
  }

  .promotion{
    .swiper-pagination{
      &-bullet{
        background-image: url(./assets/images/promotion_slide_pager.png);
      }

      &-bullet-active{
        background-image: url(./assets/images/promotion_slide_pager_on.png);
      }
    }
  }

  .visual{
    .star1{
      background-image: url(./assets/images/visual_star1.png);
    }

    .star2{
      background-image: url(./assets/images/visual_star2.png);
    }
  }

  .find-store{
    background-image: url(./assets/images/find_store_bg.jpg);
  }

  .pick-your-favorite{
    background-image: url(./assets/images/favorite_bg.jpg);
    .inner{
      .fav-img{
        background-image: url(./assets/images/fav_img.png);
      }
    }
  }

  .reserve-store{
    background-image: url(./assets/images/reserve_store_bg.jpg);
  }

  .reserve-coffee{
    background-image: url(./assets/images/reserve_bg.jpg); 
  }

  .rewards{
    .inner{
      background-image: url(./assets/images/rewards.jpg);
    }
  }

  .season-product{
    background-image: url(./assets/images/season_product_bg.jpg);
  }

  .youtube{
    &_cover{
      background-image: url(./assets/images/video_cover_pattern.png);    
    }
  }
</style>