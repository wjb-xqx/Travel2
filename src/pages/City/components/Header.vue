<template>
    <div class="header">
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
        城市选择
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        height :$headerHeight
        line-height :$headerHeight
        background-color :$bgColor
        color:#fff
        text-align:center  
        font-size :.32rem
        .header-back
            color:#Fff
            position:absolute
            top:0
            left:0
            font-size :.4rem
            width:.64rem
            text-align:center
</style>

