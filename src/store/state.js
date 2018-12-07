//使用localStorage 建议在外包裹try catch 因为在某些浏览器
// 如果用户在关闭浏览器或者影身模式，使用localStorage会导致代码抛出异常
let defalutcity = '上海'
try{
    if(localStorage.city){
        defalutcity = localStorage.city
    }
} catch (e) {

}

export default {
    city:defalutcity  //这里写如果刷新网站就不存在了   所以这里需要使用localStorage实现类似cookie
}