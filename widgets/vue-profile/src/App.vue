<template>
  <div>
    <h1>Hello</h1>
    <m-text>world! from vue</m-text>
    <m-button
      text="click me!"
      @mod-button-click="onButtonClick"
    />
    <m-alert
      :header="title"
      body="body prop text"
      :actions="actions"
      @mod-action-click="onActionClick"
    >
      children text
    </m-alert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { MButton, MText, MAlert } from '@modyo/vue-design-system';

export default defineComponent({
  name: 'App',
  components: {
    MButton,
    MText,
    MAlert
  },
  setup() {
    const title = 'title prop text';
    const actions = [
      { id: 'action 1', text: 'Action 1' },
      { id: 'action 2', text: 'Action 2' }
    ];

    const onButtonClick = () =>{
      console.log('button-clicked')
    };

    const onActionClick = ({ detail: alertAction }: CustomEvent) => {
      console.log('action-clicked', alertAction)
    };

    return {
      title,
      actions,
      onButtonClick,
      onActionClick
    }
  }
});
</script>

