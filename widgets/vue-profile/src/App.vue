<template>
  <m-app>
    <m-button
      text="click me!"
      @mod-button-click="onButtonClick"
    />
    <br />
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
    <br />
    <m-card
      header="card header"
      theme="warning"
    >
      card w/o shadow
    </m-card>
    <br />
    <br />
    <m-card
      header="card header"
      theme="warning"
      :style="{'--bs-dark-rgb': '255, 0, 0'}"
    >
      card w style
    </m-card>
    <br />
    <br />
    <m-input
      id="input-1"
      placeholder="the placeholder"
      type="text"
      :value="value"
      @modChange="onInputChange"
    />
    <br />
    <br />
    <m-text>
      the new value is: {{value}}
    </m-text>
    <div class="container">
      <div class="shadows-container pb-5">
      <h5>Test shadows</h5>
      <div class="d-flex justify-content-evenly align-items-center gap-5">
        <div class="shadow-none">None</div>
        <div class="shadow-sm">Shadow sm</div>
        <div class="shadow">Shadow</div>
        <div class="shadow-lg">Shadow lg</div>
      </div>
    </div>
    <div class="rounded-container pb-5">
      <h5>Test rounded</h5>
      <div class="d-flex justify-content-evenly align-items-center gap-5 flex-wrap">
        <div class="rounded-0">0</div>
        <div class="rounded-1">1</div>
        <div class="rounded-2">2</div>
        <div class="rounded-3">3</div>
        <div class="rounded-4">4</div>
        <div class="rounded-circle">Circle</div>
        <div class="rounded-pill">Pill</div>
      </div>
    </div>
    </div>
  </m-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {
  MButton,
  MText,
  MAlert,
  MInput,
  MCard,
  MApp,
} from '@modyo/vue-design-system';

export default defineComponent({
  name: 'App',
  components: {
    MButton,
    MText,
    MAlert,
    MInput,
    MCard,
    MApp,
  },
  data() {
    return {
      title: 'title prop text',
      actions: [
        { id: 'action 1', text: 'Action 1' },
        { id: 'action 2', text: 'Action 2' },
      ],
      value: 'initial',
    };
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
    },
  },
});
</script>

<style lang="scss" scoped>
.shadows-container {

   .d-flex {

     div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      border-radius: 12px;
      background: #F8F8FB;
      color: gray;
      font-size: 14px;
    }
   }
}

.rounded-container {

   .d-flex {

     div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      border-radius: 12px;
      background: #F8F8FB;
      color: gray;
      font-size: 14px;

      &.rounded-pill {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 40px;
        border-radius: 12px;
        background: #F8F8FB;
        color: gray;
        font-size: 14px;
      }
    }
   }
}
</style>
