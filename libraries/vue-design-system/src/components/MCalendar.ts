import { h, defineComponent } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export const MCalendar = /*@__PURE__*/ defineComponent({
  name: 'MCalendar',
  props: [
    'modelValue'
  ],
  emits: [
    'update:modelValue'
  ],
  render() {
    return h(
      Datepicker,
      {
        modelValue: this.modelValue,
        'onUpdate:modelValue': (value: any) => this.$emit('update:modelValue', value),
        ['class']: '',
      }
    )
  }
});