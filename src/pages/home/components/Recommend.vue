<template>
    <!-- 热销推荐 -->
    <div class="recommend-title">
        <ul>
            <li class="item" border-bottom v-for="item in recommendList" :key="item.id" >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>    
                 <div class="item-info">
                     <p class="item-title">{{item.title}}</p>
                     <p class="item-desc">{{item.desc}}</p>
                     <button class="item-button">查看详情</button>
                </div>   
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Recommend',
    data(){
       return {
            recommendList:[{
            id:'0001',
            imgUrl:'https://imgs.qunarzz.com/p/tts5/1607/26/6de040d36fad6a9a.jpg_r_390x260x90_7a5b94fd.jpg',
            title:'大连沈亚海洋世界',
            desc:'浪漫大连首站，浪漫的海洋主题乐园'
        }]
       }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .recommend-title
        line-height:.4rem
        text-text-indent 0.8rem
        margin-top :0.2rem
    .item
        overflow :hidden
        display :flex
        height :1.9rem
        .item-img
            width :1.7rem
            height :1.7rem
            padding :0.1rem
        .item-info
            min-width:0
            flex:1
            padding ：0.3rem
            .item-title
                ellipsis()
                line-height :0.54rem
                font-size :.32rem
            .item-desc
                ellipsis()
                line-height :.4rem
                // color:#ccc
             .item-button
                line-height :.54rem
                 margin-top:.16rem
                background-color:#ff9300
                padding :0 .2rem
                border-radius:.3rem
                color :#fff
</style>

