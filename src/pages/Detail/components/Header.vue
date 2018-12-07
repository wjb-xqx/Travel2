<template>
    <div class="header">
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont heder-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opcityStyle">
            <router-link  to="/">
                <div class="iconfont header-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailHeader",
    data(){
        return {
            showAbs:true,
            opcityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handLescroll(){
            const top = document.documentElement.scrollTop;
            if(top > 60) {
                let opacity = top / 140
                opacity = opacity >1 ? 1 :opacity
                this.opcityStyle = {opacity}
                this.showAbs = false
            }else{
                this.showAbs = true
            }
        }
    },
    activated(){
        //因为用了缓存   页面展示时候
        window.addEventListener('scroll',this.handLescroll)
    },
    deactivated () {
        //页面即将被替换（影藏）成新的页面时候的生命周期函数
        window.removeEventListener('scroll',this.handLescroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position :fixed
    top:0
    left :.2rem
    text-outline 0.2rem
    width :.8ren
    height :.8rem
    line-height :.8rem
    border-radius:.4rem
    text-align:center
    background-color:rgba(0,0,0,.8rem)
    .heder-abs-back
        color:#fff
        font-size :.4rem
.header-fixed
    z-index: 999
    width: 100%
    position :fixed
    top:0
    left :0
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
