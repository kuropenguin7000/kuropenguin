import { createStore } from 'vuex'
import commonStore from '@/store/modules/common-store'

const store = createStore({
  modules: { commonStore }
})
export default store
