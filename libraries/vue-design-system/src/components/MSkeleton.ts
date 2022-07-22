import { h, defineComponent } from 'vue';
import { ContentLoader } from "vue-content-loader"

export const MSkeleton = /*@__PURE__*/ defineComponent({
  name: 'MSkeleton',
  props: {
    viewBox: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 2
    },
    primaryColor: {
      type: String,
      default: "#f3f3f3"
    },
    secondaryColor: {
      type: String,
      default: "#ecebeb"
    },
    interval: {
      type: Number,
    },
    gradientRatio: {
      type: Number,
    }
  },
  setup(props, { slots }) {
    return () => {
      return h(
        ContentLoader,
        {
          ...props,
          ['class']: '',
        },
        () =>  slots.default && slots.default()
      )
    }
  }
});