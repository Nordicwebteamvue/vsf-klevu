# vsf-klevu ![for VSF 1.11](https://img.shields.io/static/v1?label=vsf&message=1.11&color=brightgreen)

## Documentation

Config example:

```
"klevu": {
  "sv": "1.2.5",
  "cloudSearchHostURL": "uscs.ksearchnet.com",
  "ticket": "klevu-15000000000000000",
  "storeViews": {
    "se": {
      "ticket": "klevu-15000000000000000",
      "cloudSearchHostURL": "uscs.ksearchnet.com"
    },
    "en": {
      "ticket": "klevu-15000000000000000",
      "cloudSearchHostURL": "uscs.ksearchnet.com"
    }
  }
}
```

Add the following to `vue-storefront/src/modules/client.ts`

```
...
import { Klevu } from './klevu'

export const registerModules: VueStorefrontModule[] = [
  ...
  Klevu
]
```

And in `theme/components/core/blocks/SearchPanel/SearchPanel.vue`:

```
import { KlevuSearch } from 'src/modules/klevu/components/KlevuSearch'
[...]
mixins: [KlevuSearch, VueOfflineMixin],
```
