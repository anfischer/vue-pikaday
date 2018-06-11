# vue-pikaday-component

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