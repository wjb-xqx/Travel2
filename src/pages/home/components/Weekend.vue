<template>
    <!-- 热销推荐 -->
    <div class="recommend-title">
        <div class="title">周末去哪</div>
        <ul>
            <li class="item" border-bottom v-for="item in recommendList" :key="item.id" >
                
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>    
                 <div class="item-info">
                     <p class="item-title">{{item.title}}</p>
                     <p class="item-desc">{{item.desc}}</p>
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
        },{
            id:'0002',
            imgUrl:'https://imgs.qunarzz.com/p/tts5/1607/26/6de040d36fad6a9a.jpg_r_390x260x90_7a5b94fd.jpg',
            title:'大连沈亚海洋世界',
            desc:'浪漫大连首站，浪漫的海洋主题乐园'
        },{
            id:'0003',
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
    .title
        width :100%
        height :0.6rem
        background-color:#ccc
        line-height :0.6rem
        padding-left:0.1rem
    .item-img-wrapper
       overflow: hidden
       height :0
       padding-bottom :33.9%
    .item-img
            width :100%
    .item-info
        padding ：0.3rem
        .item-title
            ellipsis()
            line-height :0.54rem
            font-size :.32rem
        .item-desc
            ellipsis()
            line-height :.4rem
            color:#ccc
</style>

