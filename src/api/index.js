import axios from '@/axios/axios.js';

var api = {
    getSearchList(){
        return axios.get('/api/meituan/header/search.json');
    },
    getHotSearch(){
        return axios.get('/api/meituan/header/searchHotWords.json');
    },
    getLeftNavList(){
        return axios.get('/api/meituan/index/nav.json');
    },
    getProvinceList(){
        return axios.get('/api/meituan/city/province.json');
    },
    getCurPosition(){
        return axios.get('/api/meituan/city/getPosition.json');
    },
    getHotCity(){
        return axios.get('/api/meituan/city/hot.json');
    },
    getRecentCity(){
        return axios.get('/api/meituan/city/recents.json');
    },
    getAllCityList(){
        return axios.get('/api/meituan/city/cityList.json');
    },
    getFoodList(){
        return axios.get('/api/meituan/list/classify.json');
    },
    getFoodPositonList(){
        return axios.get('/api/meituan/list/areaList.json');
    },
    getGoodsList(){
        return axios.get('/api/meituan/list/goodsList.json');
    },
    getRecommendGoods(){
        return axios.get('/api/meituan/list/recommend.json');
    },
    getLoginData(params){
        return axios.get('/api/meituan/login',params);
    },
    getRegister(params){
        return axios.get('/api/meituan/register',params);
    }
}

export default api;