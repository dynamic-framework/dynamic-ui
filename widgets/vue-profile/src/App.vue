<template>
  <div>
    <h1>Hello</h1>
    <m-text>world! from vue</m-text>
    <m-button
      text="click me!"
      @button-click="onButtonClick"
    />
    <m-alert
      ref="alert"
      :title="title"
      body="body prop text"
      :actions="actions"
      @action-click="onActionClick"
    >
      children text
    </m-alert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { MButton, MText, MAlert } from '@modyo/vue-design-system';
import { AlertAction } from '@modyo/design-system';

export default defineComponent({
  name: 'App',
  components: {
    MButton,
    MText,
    MAlert
  },
  data() {
    return {
      title: 'the title',
      actions: [
        { id: 'action 1', text: 'Action 1' },
        { id: 'action 2', text: 'Action 2' },
      ]
    };
  },
  methods: {
    onButtonClick() {
      console.log('button-clicked');
    },
    onActionClick({ detail: alertAction }: CustomEvent<AlertAction>) {
      console.log('action-clicked', alertAction)
    }
  }
});
</script>

