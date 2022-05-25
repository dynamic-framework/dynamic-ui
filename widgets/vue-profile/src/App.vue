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
    <div>
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
    <div class="badges-container py-5">
      <h5>Test Badge</h5>
      <h6>Without theme</h6>
      <m-badge text="Primary"></m-badge>
      <h6>Text</h6>
      <m-badge theme="primary" text="Primary"></m-badge>
      <m-badge theme="secondary" text="Secondary"></m-badge>
      <m-badge theme="tertiary" text="Tertiary"></m-badge>
      <m-badge theme="success" text="Success"></m-badge>
      <m-badge theme="warning" text="Warning"></m-badge>
      <m-badge theme="danger" text="Danger"></m-badge>
      <m-badge theme="info" text="Info"></m-badge>
      <m-badge theme="dark" text="Dark"></m-badge>
      <m-badge theme="light" text="Light"></m-badge>
      <h6>Dot</h6>
      <m-badge theme="primary"></m-badge>
      <m-badge theme="secondary"></m-badge>
      <m-badge theme="tertiary"></m-badge>
      <m-badge theme="success"></m-badge>
      <m-badge theme="warning"></m-badge>
      <m-badge theme="danger"></m-badge>
      <m-badge theme="info"></m-badge>
      <m-badge theme="dark"></m-badge>
      <m-badge theme="light"></m-badge>
    </div>
    <div class="row list-group py-5 px-2 gap-3">
      <h6>Default + bg white</h6>
      <m-list-item
      text="List title"
      image
      subtext="Sub title - extra info"
      value="USD 38.00"
      alternative="Alternative"
      variant="complete"></m-list-item>
      <h6>Pills + bg white</h6>
      <m-list-item
      pill
      image
      text="List title"
      subtext="Sub title - extra info"
      value="USD 38.00"
      alternative="Alternative"
      variant="complete"></m-list-item>
      <h6>Default + bg light</h6>
      <m-list-item
      light
      image
      text="List title"
      subtext="Sub title - extra info"
      value="USD 38.00"
      alternative="Alternative"
      variant="complete"></m-list-item>
      <h6>Pills + bg light</h6>
      <m-list-item
      light
      pill
      text="List title"
      image
      subtext="Sub title - extra info"
      value="USD 38.00"
      alternative="Alternative"
      variant="complete"></m-list-item>
      <h6>With Image</h6>
      <m-list-item
      urlImage="https://via.placeholder.com/100/f0ff04?text=IMG"
      light
      pill
      image
      text="List title"
      subtext="Sub title - extra info"
      value="USD 38.00"
      alternative="Alternative"
      variant="complete"></m-list-item>
      <h6>Simple</h6>
      <m-list-item
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Nulla lobortis sit amet diam bibendum consectetur."></m-list-item>
      <m-list-item
      text="Text"
      value="Value"></m-list-item>
      <h6>No value + No image</h6>
      <m-list-item
      light
      pill
      text="List title"
      subtext="Sub title - extra info"
      variant="complete"></m-list-item>
      <h6>Radio</h6>
      <m-list-item
      light
      pill
      radio
      image
      text="List title"
      subtext="Sub title - extra info"
      value="USD 38.00"
      alternative="Alternative"
      variant="complete"></m-list-item>
      <h6>Image and text</h6>
      <m-list-item
      urlImage="https://via.placeholder.com/100/00ff9g?text=IMG"
      light
      pill
      image
      text="List title"
      variant="complete"></m-list-item>
      <h6>No arrow</h6>
      <m-list-item
      urlImage="https://via.placeholder.com/100/f0ff04?text=IMG"
      light
      pill
      image
      arrow="false"
      text="List title"
      subtext="Sub title - extra info"
      value="USD 38.00"
      alternative="Alternative"
      variant="complete"></m-list-item>
      <h6>All</h6>
      <m-list-item
      light
      pill
      image
      radio
      urlImage="https://via.placeholder.com/100/ffdf6e?text=IMG"
      text="List title"
      subtext="Sub title - extra info"
      value="USD 38.00"
      alternative="Alternative"
      variant="complete"></m-list-item>
      <m-list-item
      pill
      image
      radio
      urlImage="https://via.placeholder.com/100/ffdf6e?text=IMG"
      text="List title"
      subtext="Sub title - extra info"
      value="USD 38.00"
      alternative="Alternative"
      variant="complete"></m-list-item>
      <m-list-item
      light
      image
      radio
      urlImage="https://via.placeholder.com/100/ffdf6e?text=IMG"
      text="List title"
      subtext="Sub title - extra info"
      value="USD 38.00"
      alternative="Alternative"
      variant="complete"></m-list-item>
      <m-list-item
      image
      radio
      urlImage="https://via.placeholder.com/100/ffdf6e?text=IMG"
      text="List title"
      subtext="Sub title - extra info"
      value="USD 38.00"
      alternative="Alternative"
      variant="complete"></m-list-item>
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
  MBadge,
  MListItem,
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
    MBadge,
    MListItem,
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
