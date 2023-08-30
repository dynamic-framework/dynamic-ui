import { h, defineComponent } from 'vue';
import { ContentLoader } from 'vue-content-loader';

export const DSkeleton = /*@__PURE__*/ defineComponent({
  name: 'DSkeleton',
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
      default: "#e1dffe"
    },
    foregroundColor: {
      type: String,
      default: "#f7f7ff"
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
