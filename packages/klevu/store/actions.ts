import { KlevuState, KlevuSettings } from '../types/State'
import { ActionTree } from 'vuex'
import fetch from 'isomorphic-fetch'
import config from 'config'
import qs from 'qs'
import RootState from '@vue-storefront/core/types/RootState'

export const actions: ActionTree<KlevuState, RootState> = {
  async setSettings ({ commit, state }, settings: Partial<KlevuSettings>) {
    commit('settings', settings)
  },
  async search ({ commit, state, getters }, string: String) {
    commit('search', string)
    if (string.length === 0) {
      commit('setLoading', false)
      return
    }
    const {ticket, cloudSearchHostURL} = getters.options
    const options: any = {
      ...state.settings,
      ticket,
      sv: config.klevu.sv,
      term: string
    }
    // Filter unused keys
    Object.keys(options).forEach(key => options[key] === undefined && delete options[key])
    const url = `https://${cloudSearchHostURL}/cloud-search/n-search/search?${qs.stringify(options)}`
    try {
      const result = await fetch(url)
      const json = await result.json()
      commit('results', json)
      return json
    } catch(e) {
      console.log('Klevu error:', e)
    }
  }
}
