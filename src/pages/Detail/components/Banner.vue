<template>
<div>
    <div class="banner" @click="handLetterClick">
        <img class="banner-img" :src="bannerImg" alt="">
        <div class="banner-info">
            <div class="banner-title">{{sightName}}</div>
            <div class="banner-number"> 
                <span class="iconfont banner-icon">&#xe600;</span>
                {{bannerImgs.length}}</div>
        </div>
    </div>
    <div class="container" v-show="showGallary" @click="hideGallary">
        <div class="wrapper">
           <swiper :options="swiperOption">
             <swiper-slide v-for="(item,index) in bannerImgs" :key="index">
               <img class="gallary-img" :src="item" />
             </swiper-slide>
             <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        </div>
    </div>
   
</div>
</template>

<script>
export default {
    name:'Banner',
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    data(){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                paginationType:'fraction'
            },
            showGallary:false
                }
            },
    methods:{
        handLetterClick(){
            this.showGallary = true;
        },
        hideGallary(){
            this.showGallary = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow:inherit
    .banner
        position: relative
        overflow: hidden
        height :0
        padding-bottom : 55%
        .banner-img
            width :100%
        .banner-info
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            display :flex
            position : absolute
            left :0
            right :0
            bottom :0
            line-height :.6rem
            color:#fff
            .banner-title
                flex :1
                font-size :.3rem
                padding : 0 0.1rem
            .banner-number 
                margin-top : .14rem
                line-height :.32rem
                padding :0 .32rem
                height :.4rem
                border radius 0.2rem
                background-color: rgba(0, 0, 0, .8)
                font-size :.24rem
                .banner-icon 
                    font-size: .24rem
    .container
        display :flex
        flex-direction: column
        justify-content :center
        z-index: 99 
        position :fixed
        left:0
        right :0 
        top: 0
        bottom:0
        background-color: #000
        .wrapper
            width :100%
            height :0
            padding-bottom :100%
            .gallary-img
                width :100%
            .swiper-pagination
                color: #fff
                bottom:-1rem
</style>
