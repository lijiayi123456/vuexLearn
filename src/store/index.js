import Vue from 'vue'
import Vuex from 'vuex'

// 挂载Vuex
Vue.use(Vuex)

// 创建Vuex对象
const store = new Vuex.Store({
    state: {
        name: 'helloVuex',
        count: 0,
        date: new Date()
    },
    // 这里通过提交mutation的方式，而非直接修改state，
    // 是因为想要更明确地追踪到状态的变化。
    mutations: {
        increment(state) {
            state.count ++;
        }
    },
    getters: {
        weekDate: state => {
            return moment(state.date).format('ddd');
        },
        dateLength: (state,getters) => {
            return getters.weekDate.length;
        },
        // 可使用$store.getters.weekDate来访问这些值
    }
})

export default store