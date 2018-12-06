<template>
    <div class="search">
       <input class="search-input" type="text" placeholder="输入城市名或拼音" />
       
    </div>
</template>

<script>
export default {
    name:'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height :.72rem
    background-color:$bgColor
    padding :0 .1rem
    .search-input
        height :.64rem
        line-height :.62rem
        width:100%
        text-align :center
        border-radius: .6rem
        color:#666
        box-sizing:border-box
        padding:0 .1rem
</style>

