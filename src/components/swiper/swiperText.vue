<template>
<div>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="text">
      <div>
        有一次，在我参加的一个晚会上，主持人问一个小男孩：你长大以后要做什么样的人？孩子看看我们这些企业家，然后说：做企业家。在场的人忽地笑着鼓起了掌。我也拍了拍手，但听着并不舒服。我想，这孩子对于企业究竟知道多少呢？他是不是因为当着我们的面才说要当企业家的呢？他是不是受了大人的影响，以为企业家风光，都是有钱的人，才要当企业家的呢？
        　　这一切当然都是一个谜。但不管怎样，作为一个人的人生志向，我以为当什么并不重要；不管是谁，最重要的是从小要立志做一个努力的人。
        　　我小的时候也曾有人问过同样的问题，我的回答不外乎当教师、解放军和科学家之类。时光一晃流走了二十多年，当年的孩子，如今已是四十出头的大人。但仔细想一想，当年我在大人们跟前表白过的志向，实际一个也没有实现。我身边的其他人差不多也是如此。有的想当教师，后来却成了个体户；想当解放军的，有人竟做了囚犯。我上大学时有两个同窗好友，他们现在都是我国电子行业里才华出众的人，一个成长为“康佳”集团的老总，一个领导着TCL集团。我们三个不期而然地成为中国彩电骨干企业的经营者，可是当年大学毕业时，无论有多大的想像力，我们也不敢想十几年后会成现在的样子。一切都是我们在奋斗中见机行事，一步一步努力得来的。与其说我们是有理想的人，不如说我们是一直在努力的人。
      </div>
    </swiper-slide>
  </swiper>
</div>

</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper,swiperSlide } from 'vue-awesome-swiper'
    export default {
      data() {
          return{
            swiperOption:{
              direction:'vertical',
              slidesPerView: 'auto',
              freeMode:true,
              mousewheel:true
            }
        }
      },
      components:{
        swiper,
        swiperSlide
      }
    }
</script>

<style scoped>
.swiper{
  height: 300px;
  overflow: hidden;
}
  .text{
    font-size: 16px;
    text-align: left;
    padding: 20px;
    height: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
