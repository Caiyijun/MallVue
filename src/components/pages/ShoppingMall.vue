<template>
    <div>
        <div class="search-bar">
            <van-row class="test-row">
                <van-col span='3'>
                    <img :src="locationIcon" alt="" width="65%" class="location-icon">
                </van-col>
                <van-col span='16'>
                    <input type="text" class="search-input">
                </van-col>
                <van-col span='5'>
                    <van-button size='mini' class="search-button">搜索</van-button>
                </van-col>
            </van-row>
        </div>
        <!-- swiper area -->
        <div class="swiper-area">
            <van-swipe :autoplay='1000'>
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key='index'>
                    <img v-lazy="banner.image" alt="" width="100%">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- type bar -->
        <div class="type-bar">
            <div v-for="(cate, index) in category" :key='index'>
                <img v-lazy="cate.image" width="90%" alt="">
                <span>{{ cate.mallCategoryName }}</span>
            </div>
        </div>
        <!-- adbanner -->
        <div>
            <img v-lazy="adbanner" alt="" width="100%">
        </div>
        <!-- 商品推荐 -->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <swiper :options = "swiperOption">
                    <swiper-slide v-for="(item, index) in recommendGoods" :key="index">
                        <div class="recommed-item">
                            <img :src="item.image" width="80%" alt="">
                            <div>{{ item.goodsName }}</div>
                            <div>￥{{item.price}}(￥{{ item.mallPrice }})</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
      <!--<swiperDefault></swiperDefault>-->
      <!--<swiperDefault2></swiperDefault2>-->
      <!--<swiperDefault3></swiperDefault3>-->
      <!--<swiperText></swiperText>-->
      <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
      <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
      <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
      <!--Hot Area-->
      <div class="hot-area">
        <div class="hot-title">热卖商品</div>
        <div class="hot-goods">
          <!--这里需要一个list组件-->
          <van-list>
            <van-row gutter="20">
              <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                <floorInfo :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.Price"></floorInfo>
              </van-col>
            </van-row>
          </van-list>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import floorComponent from '../component/floorComponent'
import { toMoney } from "@/filter/money";
import floorInfo from '../component/goodsInfoComponent'
import url from '@/serviceAPI.config.js'
    export default {
        data() {
            return {
                swiperOption:{
                    slidesPerView:3
                },
                msg: 'shopping mall',
                locationIcon:require('../../assets/images/location.png'),
                bannerPicArray:[],
                category:[],
                adbanner:'',
                recommendGoods:[],
                floor1:[],
                floor2:[],
                floor3:[],
                floorName:{},
              hotGoods:[]
            }
        },
        components:{swiper, swiperSlide,floorComponent,floorInfo},
        created(){
            axios({
                url:url.getShopMallInfo,
                method: 'get',
            })
            .then(response => {
                console.log(response)
                if( response.status == 200 ){
                    this.category = response.data.data.category;
                    this.adbanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
                    this.bannerPicArray = response.data.data.slides;
                    this.recommendGoods = response.data.data.recommend;
                    this.floor1 = response.data.data.floor1;
                    this.floor2 = response.data.data.floor2;
                    this.floor3 = response.data.data.floor3;
                      this.floorName = response.data.data.floorName;
                      this.hotGoods = response.data.data.hotGoods;
                }
            })
            .catch( error => {
                console.log(error);
            })
        }
    }
</script>

<style scoped>
.search-bar{
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
}
.search-input{
    width: 100%;
    height: 1.3rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    color: rgba(255,255,255,0.5);
}
.location-icon{
    padding-top: .3rem;
    padding-left: .3rem;
}
.search-button{
    height: 1.5rem;
    font-size: 0.875rem;
    margin-left: .5rem;
}
.swiper-area{
    clear: both;
    max-height: 15rem;
    overflow: hidden;
}
.type-bar{
    background-color: #fff;
    margin: 0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.type-bar div{
    padding: .3rem;
    font-size: 12px;
    text-align: center;
}
.recommend-area{
    background-color: #fff;
    margin-top: 0.3rem;
}
.recommend-title{
    border-bottom:1px solid #eee;
    font-size: 14px;
    padding: 0.2rem;
    color: #e5017d;
}
.recommend-body{
    border-bottom: 1px solid #eee;
}
.recommend-item{
    width: 99%;
    border-right:1px solid #eee;
    font-size: 12px;
    text-align: center;
}
</style>
