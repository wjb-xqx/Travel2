<template>
    <ul class="list">
        <li class="item"
         v-for="item in letters" 
         :key="item"
         :ref='item'
         @touchstart="handTouchStart"
          @touchmove.prevent="handTouchMove"
           @touchendt="handTouchEnd"
         @click="handleLetterClick"
         >{{item}}
         </li>
    </ul>
</template>

<script>
export default {
    name:"CityAlpahabet",
    props:{
        cities:Object
    },
    computed:{
        letters() {
            const letters = []
            for(let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data(){
        return {
            touchstarts :false,
            startY:0,
            timer:null
        }
    },
    updated(){
        //优化
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
        handleLetterClick(e){
           this.$emit('change',e.target.innerText) 
        },
        handTouchStart(e){
            this.touchstarts = true
        },
        handTouchMove(e){
            if(this.touchstarts){
                if(this.timer){// 函数节流  
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY //获取手指的位置
                const index = Math.floor((touchY-this.startY) / 20)
                if(index >= 0 && index<this.letters.length){
                    this.$emit('change',this.letters[index])
                }    
                },16)
            }
        },
        handTouchEnd(e){
            this.touchstarts = false
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display : flex
    flex-direction: column
    justify-content: center
    position : absolute
    top: 1.58rem
    right : 0
    bottom :0
    width : .4rem
    .item
        line-height : .4rem
        color: $bgColor
        text-align: center
</style>
