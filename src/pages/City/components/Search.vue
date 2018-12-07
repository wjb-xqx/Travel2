<template>
    <div>
        <div class="search">
             <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
         </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" 
                v-for="item in list" :key="item.id"
                @click="handleCityClick(item.name)" >{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoList">没有找到匹配的数据</li>
            </ul>
         </div>
    </div>
</template>

<script>
import BSrcoll from 'better-scroll'
export default {
    name:'CitySearch',
    data(){
        return {
            keyword:'',
            list:[],
            timer:null
        }
    },
    props:{
        cities:Object
    },
    computed:{
        hasNoList() {
            //模板里面保证简单语法
            return !this.list.length
        }
    },
    watch:{
        keyword () {
            //节流函数 提高代码性能
            if(this.timer){
                clearTimeout(this.timer)
            }
            //不输入事底下不需要数据
            if(!this.keyword){
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities){
                    this.cities[i].forEach(value => {
                       if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                        result.push(value)
                }
            })
        }
        this.list = result
      },100)
     }
    },
    mounted(){
      //添加搜索滚动效果  
      this.scroll= new BSrcoll(this.$refs.search)
    },
    methods:{
        handleCityClick (city) {
            // this.$store.dispatch('changeCity',city)
            this.$store.commit('changeCity',city);
            this.$router.push('/')
        }
    }
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
.search-content
    overflow: hidden
    position :absolute
    top: 1.58rem
    left: 0
    right : 0
    bottom : 0
    background-color: #eee
    z-index: 1
    .search-item
        line-height : .62rem
        padding-left : .2rem
        background-color: #fff
        color: #666
</style>

