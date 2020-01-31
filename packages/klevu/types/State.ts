export interface KlevuSettings {
  autoComplete: Boolean;
  typeOfSuggestions?: String;
  noOfResults: Number;
  noOfResultsAC: Number;
  enablePartialSearch: Boolean;
  sortOrder: "rel" | "lth" | "htl";
  showOutOfStockProducts: Boolean;
  priceFieldSuffix?: String;
  visibility: String;
  resultForZero: 0 | 1;
  recentCategory?: String;
  noOfResultsZero: Number;
  optionalFilters?: String;
  responseType: "json";
}

export interface KlevuState {
  settings: KlevuSettings;
  searchString: String;
  products: Array<any>;
  categories: Array<any>;
  pages: Array<any>;
  loading: Boolean;
}
