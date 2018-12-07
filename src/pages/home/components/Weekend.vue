<template>
    <!-- 热销推荐 -->
    <div class="recommend-title">
        <div class="title">周末去哪</div>
        <ul>
            <li class="item" border-bottom v-for="item in list" :key="item.id" >
                
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
    props:{
        list:Array
    },
    data(){
       return {
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

