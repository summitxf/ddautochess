import Vue from 'vue'

const state = {
  selected_zhongzus: [],
  selected_zhiyes: [],
  zhongzu_fetters: [],
  zhiye_fetters: []
}

const getters = {
  get_zhongzu_fetters(state) {
    return state.zhongzu_fetters
  },
  get_zhiye_fetters(state) {
    return state.zhiye_fetters
  },
  get_selected_zhongzus(state) {
    return state.selected_zhongzus
  },
  get_selected_zhiyes(state) {
    return state.selected_zhiyes
  }
}

const mutations = {
  ADD_SELECTED_ZHONGZU(state, name) {
    let hasName = state.selected_zhongzus.some(e => e === name)
    if (!hasName) {
      state.selected_zhongzus.push(name)
    }
  },
  DEL_SELECTED_ZHONGZU(state, name) {
    state.selected_zhongzus = state.selected_zhongzus.filter(e => e !== name)
  },
  ADD_SELECTED_ZHIYE(state, name) {
    let hasName = state.selected_zhiyes.some(e => e === name)
    if (!hasName) {
      state.selected_zhiyes.push(name)
    }
  },
  DEL_SELECTED_ZHIYE(state, name) {
    state.selected_zhiyes = state.selected_zhiyes.filter(e => e !== name)
  },
  DECREMENT_ZHONGZU_COUNTER(state, name) {
    if (!state.zhongzu_fetters[name]) {
      Vue.set(state.zhongzu_fetters, name, { count: 0 })
    }
    state.zhongzu_fetters[name].count--
  },
  INCREMENT_ZHONGZU_COUNTER(state, name) {
    if (!state.zhongzu_fetters[name]) {
      Vue.set(state.zhongzu_fetters, name, { count: 0 })
    }
    state.zhongzu_fetters[name].count++
  },
  DECREMENT_ZHIYE_COUNTER(state, name) {
    if (!state.zhiye_fetters[name]) {
      Vue.set(state.zhiye_fetters, name, { count: 0 })
    }
    state.zhiye_fetters[name].count--
  },
  INCREMENT_ZHIYE_COUNTER(state, name) {
    if (!state.zhiye_fetters[name]) {
      Vue.set(state.zhiye_fetters, name, { count: 0 })
    }
    state.zhiye_fetters[name].count++
  },
  CLEAR_ZHONGZU_COUNTER(state, name) {
    if (!state.zhongzu_fetters[name]) {
      Vue.set(state.zhongzu_fetters, name, { count: 0 })
    }
    Vue.set(state.zhongzu_fetters, name, { count: 0 })
  },
  CLEAR_ZHIYE_COUNTER(state, name) {
    if (!state.zhiye_fetters[name]) {
      Vue.set(state.zhiye_fetters, name, { count: 0 })
    }
    Vue.set(state.zhiye_fetters, name, { count: 0 })
  }
}

const actions = {
  addSelectedZhongzu({ commit }, name) {
    // do something async
    commit('ADD_SELECTED_ZHONGZU', name)
  },
  delSelectedZhongzu({ commit }, name) {
    // do something async
    commit('DEL_SELECTED_ZHONGZU', name)
  },
  addSelectedZhiye({ commit }, name) {
    // do something async
    commit('ADD_SELECTED_ZHIYE', name)
  },
  delSelectedZhiye({ commit }, name) {
    // do something async
    commit('DEL_SELECTED_ZHIYE', name)
  },
  incZhongzu({ commit }, name) {
    // do something async
    commit('INCREMENT_ZHONGZU_COUNTER', name)
  },
  decZhongzu({ commit }, name) {
    // do something async
    commit('DECREMENT_ZHONGZU_COUNTER', name)
  },
  incZhiye({ commit }, name) {
    // do something async
    commit('INCREMENT_ZHIYE_COUNTER', name)
  },
  decZhiye({ commit }, name) {
    // do something async
    commit('DECREMENT_ZHIYE_COUNTER', name)
  },
  clearZhongzu({ commit }, name) {
    // do something async
    commit('CLEAR_ZHONGZU_COUNTER', name)
  },
  clearZhiye({ commit }, name) {
    // do something async
    commit('CLEAR_ZHIYE_COUNTER', name)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
