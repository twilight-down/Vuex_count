import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state用于存储共享数据
    state: {
        count: 0
    },
    // mutations用于变更Store中的数据
    mutations: {
        add(state) {
            // 变更状态
            state.count++
        },
        addN(state, step) {
            // 变更状态
            state.count += step
        },
        sub(state) {
            state.count--
        },
        subN(state, step) {
            state.count -= step
        }
    },
    actions: {
        addAsync(context) {
            setTimeout(() => {
                context.commit('add')
            }, 1000);
        },
        addNAsync(context, step) {
            setTimeout(() => {
                context.commit('addN', step)
            }, 500);
        },
        subAsync(context) {
            setTimeout(() => {
                context.commit('sub')
            }, 400);
        },
        subNAsync(context, step) {
            setTimeout(() => {
                context.commit('subN', step)
            }, 400);
        }
    },
    getters: {
        showNum(state) {
            return '当前最新的数量是【' + state.count + '】'
        }
    }
})