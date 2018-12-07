<template>
<div class="list" ref="wrapper">
    <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.currentCity}}</div>
                </div>
            </div>
        </div>
         <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" 
                v-for="item in hot" :key="item.id"
                @click="handleCityClick(item.name)"
                >
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
         <div class="area" 
         v-for="(item, key) in cities" 
         :key="key"
         :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list" >
                <div v-for="innerItem in item" :key="innerItem.id"
                class="item border-bottom"
                 @click="handleCityClick(innerItem.name)">
                {{innerItem.name}}</div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import BSrcoll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    name:'CityList',
    props:{
        hot:Array,
        cities:Object,
        letter:String
    },
    methods:{
        handleCityClick (city) {
            // alert(city)
            // this.$store.dispatch('changeCity',city)
            // this.$store.commit('changeCity',city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch:{
        //监听letter变化
        letter () {
           if (this.letter) {
             const element = this.$refs[this.letter][0]
             this.scroll.scrollToElement(element)
            }
        }
    },
    mounted() {
        this.scroll = new BSrcoll(this.$refs.wrapper)
        // console.log(this.letter)
    },
    computed:{
         ...mapState({
             currentCity:'city'
         })
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
    &:before
        border-color:#ccc
    &:after 
        border-color:#ccc
.border-bottom
     &:before
        border-color:#ccc
.list 
    overflow: hidden
    position: absolute
    top: 1.8rem
    left:0
    right :0
    bottom :0
    .title 
        line-height: .54rem
        background-color: #eee
        padding-left:.2rem
        color:#666
        font-size :.26rem
    .button-list
        overflow: hidden
        padding :.1rem .6rem .1rem .1rem
        .button-wrapper
            float: left
            width : 33.33%
            .button
                margin : .1rem
                padding : .1rem 0
                text-align: center
                border: .1rem solid #cccccc
                border-radius: .6rem
    .item-list 
        .item
            line-height: .64rem
            padding-left : .2rem
</style>
