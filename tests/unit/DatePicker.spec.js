import { shallowMount } from '@vue/test-utils'
import Pikaday from 'pikaday'
import DatePicker from '@/components/DatePicker.vue'

jest.mock('pikaday', () => {
  return jest.fn().mockImplementation((constructorParams) => {
    return {
      setDate: jest.fn(() => {
        constructorParams.onSelect.call(this)
      }),
      toString: jest.fn(() => {
        return '9999-99-99'
      }),
    }
  })
})

describe('DatePicker.vue', () => {
  beforeEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('The mounted hook construct a new Pikaday', () => {
    const value = '2018-06-08'
    const wrapper = shallowMount(DatePicker, {
      propsData: { value },
    })

    expect(Pikaday).toBeCalledWith({
      field: wrapper.vm.$refs.input,
      format: 'YYYY-MM-DD',
      onSelect: expect.any(Function),
    })
  })

  it('If format is passed as a prop it overrides the default format', () => {
    const value = '2018-06-08'
    const format = 'DD-MM-YYYY'
    const wrapper = shallowMount(DatePicker, {
      propsData: { value, format },
    })

    expect(Pikaday).toBeCalledWith({
      field: wrapper.vm.$refs.input,
      format: 'DD-MM-YYYY',
      onSelect: expect.any(Function),
    })
  })

  it('If options are passed as a prop they are merged into the Pikaday constructor', () => {
    const value = '2018-06-08'
    const options = { additional: 'option' }
    const wrapper = shallowMount(DatePicker, {
      propsData: { value, options },
    })

    expect(Pikaday).toBeCalledWith({
      field: wrapper.vm.$refs.input,
      format: 'YYYY-MM-DD',
      onSelect: expect.any(Function),
      additional: 'option',
    })
  })

  it('It renders an input field', () => {
    const value = '2018-06-08'

    const wrapper = shallowMount(DatePicker, {
      propsData: { value },
    })

    expect(wrapper.html()).toMatch('<input placeholder="YYYY-MM-DD">')
  })

  it('When the the value prop changes the Pikaday instance receives setDate(value)', () => {
    const value = '2018-06-08'
    const wrapper = shallowMount(DatePicker, {
      propsData: { value },
    })

    expect(wrapper.props()).toEqual({ value: value })
    wrapper.setProps({ value: '2018-12-12' })
    expect(wrapper.vm.value).toEqual('2018-12-12')

    expect(wrapper.vm.datePicker.setDate).toBeCalledWith('2018-12-12')
  })

  it('When onSelect() is called by pikaday it emits an input event with the string value of the picker', () => {
    const value = '2018-06-08'
    const wrapper = shallowMount(DatePicker, {
      propsData: { value },
    })

    wrapper.vm.datePicker.setDate()
    expect(wrapper.emitted('input')[0]).toEqual(['9999-99-99'])
  })
})
