<template>
    <div class="detail">
        <detail-banner :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[]
        }
    },
    methods:{
        gerDetailInfo(){
            axios.get("api/detail.json",{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.handLegetdataSucc)
        },
        handLegetdataSucc(res){
            res = res.data
            if(res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    mounted(){
        this.gerDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
