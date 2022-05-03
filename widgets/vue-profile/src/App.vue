<template>
  <div>
    <h1>Hello</h1>
    <MText>world! from vue</MText>
    <MButton text="click me!" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { MButton, MText } from '@modyo/vue-design-system';

export default defineComponent({
  name: 'App',
  components: {
    MButton,
    MText
  },
});
</script>

