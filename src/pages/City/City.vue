<template>
    <div class="city">
        <city-header></city-header>
       <city-search></city-search>
       <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
       <city-alpahabet :cities="cities"
       @change="handleLetterChange"></city-alpahabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlpahabet from './components/Alpahabet'
import axios from 'axios'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlpahabet
    },
    data(){
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods:{
        getCityInfo() {
            axios.get('/api/city.json')
            .then(this.handLeGetCityIncoSucc)
        },
        handLeGetCityIncoSucc(res) {
            res = res.data 
            if(res.ret && res.data){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange(letter){
            this.letter=letter
            // console.log(letter)
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>

