import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// export default new Vuex.Store({
//     state:{
//         city:'上海'
//     },
//     actions:{
//         changeCity(ctx, city){
//             // console.log(city)
//             //调用mutations方法
//             ctx.commit('changeCity',city)
//         }
//     },
//     mutations: {
//         changeCity (state, city) {
//             //所要做的事情
//             state.city = city
//         }
//     }
// })
import state from "./state"
import mutations from "./mutations"

//没有异步超过 可以不需要actiions
export default new Vuex.Store({
    state,
    mutations
})