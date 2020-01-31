import { MutationTree } from 'vuex'
import { KlevuSettings, KlevuState } from '../types/State'

const stripDomain = (item) => ({
  ...item,
  url: item.url.replace(/^.*\/\/[^\/]+/, '')
})

export const mutations: MutationTree<KlevuState> = {
  results (state: KlevuState, json: any = {}) {
    const filters = ['categories', 'pages']
    state.products = json.result
      .filter(({category}) => !filters.includes(category))
      .map((product: any) => {
        const sku = product.sku.split(';').reverse()[0]
        return {
          id: sku,
          sku,
          url_path: product.url.split('/').reverse()[0],
          name: product.name,
          priceInclTax: product.startPrice,
          price: product.startPrice,
          final_price: product.startPrice,
          image: product.imageUrl.split(/klevu_images\/\d+X\d+/)[1],
          category: [],
          originalProduct: {
            id: product.itemGroupId
          },
          klevu: product
        }
      })
    state.loading = false
    state.categories = json.categories.slice(0, 3).map(stripDomain)
    state.pages = json.pages.slice(0, 3).map(stripDomain)
  },
  settings (state: KlevuState, settings: Partial<KlevuSettings>) {
    state.settings = {
      ...state.settings,
      ...settings
    }
  },
  search (state: KlevuState, searchString: String) {
    if (searchString.length === 0) {
      state.categories = []
      state.pages = []
      state.products = []
    }
    state.loading = true
    state.searchString = searchString
  },
  setLoading (state: KlevuState, loading: Boolean) {
    state.loading = loading
  }
}
