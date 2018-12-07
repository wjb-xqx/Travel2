<template>
    <!-- 热销推荐 -->
    <div class="recommend-title">
        <div class="title">热销推荐</div>
        <ul>
            <router-link tag="li" :to="'/detail/' + item.id" class="item"
             border-bottom v-for="item in list" :key="item.id" >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>    
                 <div class="item-info">
                     <p class="item-title">{{item.title}}</p>
                     <p class="item-desc">{{item.desc}}</p>
                     <button class="item-button">查看详情</button>
                </div>   
            </router-link>
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
        margin-top :0.2rem
    .title
        width :100%
        height :0.6rem
        background-color:#ccc
        line-height :0.6rem
        padding-left:0.1rem
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
                color:#ccc
             .item-button
                line-height :.54rem
                 margin-top:.16rem
                background-color:#ff9300
                padding :0 .2rem
                border-radius:.3rem
                color :#fff
</style>

