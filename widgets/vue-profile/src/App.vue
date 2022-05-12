<template>
  <div>
    <h1>Hello</h1>
    <m-text>world! from vue</m-text>
    <m-button
      text="click me!"
      @mod-button-click="onButtonClick"
    />
    <br />
    <m-alert
      :header="title"
      body="body prop text"
      :actions="actions"
      @mod-action-click="onActionClick"
    >
      children text
    </m-alert>
    <br />
    <m-input
      id="input-1"
      placeholder="the placeholder"
      type="text"
      :value="value"
      @modChange="onInputChange"
    />
    <m-text>
      the new value is: {{value}}
    </m-text>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { MButton, MText, MAlert, MInput } from '@modyo/vue-design-system';

export default defineComponent({
  name: 'App',
  components: {
    MButton,
    MText,
    MAlert,
    MInput
  },
  data() {
    return {
      title: 'title prop text',
      actions: [
        { id: 'action 1', text: 'Action 1' },
        { id: 'action 2', text: 'Action 2' }
      ],
      value: 'initial'
    }
  },
  methods: {
    onButtonClick() {
      console.log('button clicked');
    },
    onActionClick({ detail: alertAction }: CustomEvent) {
      console.log('action clicked', alertAction);
    },
    onInputChange(event: CustomEvent<string>) {
      this.value = event.detail;
    }
  }
});
</script>

