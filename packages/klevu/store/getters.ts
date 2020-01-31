import { KlevuState } from '../types/State'
import { GetterTree } from 'vuex';

export const getters: GetterTree<KlevuState, any> = {
  products: (state: KlevuState) => state.products,
  categories: (state: KlevuState) => state.categories,
  pages: (state: KlevuState) => state.pages,
  searchString: (state: KlevuState) => state.searchString,
  loading: (state: KlevuState) => state.loading,
  emptyResults: (state: KlevuState) => state.searchString.length > 0 && state.products.length < 1 && !state.loading
}
