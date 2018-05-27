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
                    <img v-lazy="banner.imageUrl" alt="" width="100%">
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'shopping mall',
                locationIcon:require('../../assets/images/location.png'),
                bannerPicArray:[
                    {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
                    {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
                    {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
                ]
            }
        },
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
</style>