export default {
    changeCity (state, city) {
        //所要做的事情
        state.city = city
        try{ 
            localStorage.city = city
        } catch (e) {}
    }
}