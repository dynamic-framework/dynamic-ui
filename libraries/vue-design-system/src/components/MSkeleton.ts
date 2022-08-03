import { h, defineComponent } from 'vue';
import { ContentLoader } from 'vue-content-loader';

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
    backgroundColor: {
      type: String,
      default: "#f3f3f3"
    },
    foregroundColor: {
      type: String,
      default: "#ecebeb"
    }
  },
  setup({
    viewBox,
    speed,
    backgroundColor,
    foregroundColor
  }, { slots }) {
    return () => {
      return h(
        ContentLoader,
        {
          viewBox,
          speed,
          primaryColor: backgroundColor,
          secondaryColor: foregroundColor,
          ['class']: '',
        },
        () =>  slots.default && slots.default()
      );
    };
  }
});