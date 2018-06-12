# vue-pikaday-component

[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]
[![Code Coverage][ico-codecov]][link-codecov]

A lightweight Vue.js component wrapping [dbushell/Pikaday](https://github.com/dbushell/Pikaday).

## Install
Install the library via NPM
```
npm install vue-pikaday-component
```

## Usage
Import the component into your Vue.js application
```js
import DatePicker from 'vue-pikaday-component'
```

Use the component
```js
new Vue({
  components: {
    DatePicker
  },
  data () {
    return { date: null }
  }
})
```

Create the date picker and bind the reactive date prop as v-model.
```html
<date-picker v-model="date"></date-picker>
```

Custom options can be passed to the datepicker (v-model and format have dedicated props)
```html
<date-picker v-model="date" format="YYYY-MM-DD"></date-picker>
```

All other options can be passed through the options prop.
```html
<date-picker v-model="date" :options="{ firstDay: 1, disableWeekends: true }"></date-picker>
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Testing

``` bash
$ npm run test
```

## Security

If you discover any security related issues, please email kontakt@season.dk instead of using the issue tracker.

## Credits

- [Andreas Fischer][link-author]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/anfischer/vue-pikaday/master.svg?style=flat-square
[ico-codecov]: https://codecov.io/gh/anfischer/vue-pikaday/branch/master/graph/badge.svg

[link-travis]: https://travis-ci.org/anfischer/vue-pikaday
[link-author]: https://github.com/anfischer
[link-codecov]: https://codecov.io/gh/anfischer/vue-pikaday