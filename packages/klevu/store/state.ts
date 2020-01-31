import { KlevuState } from '../types/State'

export const state: KlevuState = {
  settings: {
    autoComplete: true,
    typeOfSuggestions: 'cms|category',
    noOfResults: 12,
    noOfResultsAC: 5,
    enablePartialSearch: false,
    sortOrder: "rel",
    showOutOfStockProducts: false,
    priceFieldSuffix: undefined,
    visibility: "search",
    resultForZero: 0,
    recentCategory: undefined,
    noOfResultsZero: 5,
    optionalFilters: undefined,
    responseType: "json",
  },
  searchString: '',
  products: [],
  categories: [],
  pages: [],
  loading: false
}
