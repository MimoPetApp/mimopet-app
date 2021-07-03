import { createStore } from 'vuex'
import modules from './modules'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'mimopetapp',
  reducer: state => ({
    auth: state.auth
  })
})

const store = createStore({
  modules,
  plugins: [vuexLocal.plugin]
})

export default store
