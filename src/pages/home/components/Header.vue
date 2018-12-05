<template>
    <div class="header">
       <div class="header-left">
           <div class="iconfont">&#xe624;</div>
       </div>
       <div class="header-input">
           <span class="iconfont">&#xe632;</span>
           输入城市、游玩、景点主题
       </div>
       <div class="header-right">城市
           <span class="iconfont">&#xe634;</span>
       </div>
    </div>
</template>

<script>

export default {
    name:"Header"
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        background-color: $bgColor
        display :flex
        height: .86rem
        line-height:.86rem
        padding-left :.2rem
        color:#fff
         .header-left 
            width :.64rem
            float:left
            font-size:.4rem 
        .header-right
            width :1.24rem
            float: right 
            text-align:center
        .header-input
            flex :1
            line-height:.64rem
            background-color: #fff
            border-radius: .1rem
            margin:.12rem
            height :.64rem
            margin-left :.2rem
            color:#ccc
            padding-left:.2rem
</style>
