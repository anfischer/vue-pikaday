<script>
import Pikaday from 'pikaday'

export default {
  props: {
    value: { required: true },
    format: { default: 'YYYY-MM-DD' },
    options: { default: () => {} },
  },

  watch: {
    value (value) {
      this.datePicker.setDate(value)
    },
  },

  mounted () {
    this.datePicker = new Pikaday({
      field: this.$refs.input,
      format: this.format,
      onSelect: () => this.$emit('input', this.datePicker.toString()),
      ...this.options,
    })
  },

  render (createElement) {
    return createElement('input', { ref: 'input', domProps: { value: this.value }, attrs: { placeholder: this.format } })
  },
}
</script>

<style>
@import '~pikaday/css/pikaday.css';
</style>
