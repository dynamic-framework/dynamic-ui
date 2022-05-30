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
        icon="heart-fill"
        subtext="Sub title - extra info"
        value="USD 38.00"
        alternative="Alternative"
        variant="default"
      />
      <h6>Pills + bg white</h6>
      <m-list-item
        is-pill
        icon="heart-fill"
        text="List title"
        subtext="Sub title - extra info"
        value="USD 38.00"
        alternative-value="Alternative"
        variant="default"
      />
      <h6>Default + bg light</h6>
      <m-list-item
        theme="light"
        icon="heart-fill"
        text="List title"
        subtext="Sub title - extra info"
        value="USD 38.00"
        alternative-value="Alternative"
        variant="default"
      />
      <h6>Pills + bg light</h6>
      <m-list-item
        theme="light"
        is-pill
        text="List title"
        icon="heart-fill"
        subtext="Sub title - extra info"
        value="USD 38.00"
        alternative-value="Alternative"
        variant="default"
      />
      <h6>With Image</h6>
      <m-list-item
        image="https://via.placeholder.com/100/f0ff04?text=IMG"
        theme="light"
        is-pill
        text="List title"
        subtext="Sub title - extra info"
        value="USD 38.00"
        alternative-value="Alternative"
        variant="default"
      />
      <h6>Simple</h6>
      <m-list-item
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Nulla lobortis sit amet diam bibendum consectetur."
      />
      <m-list-item
        text="Text"
        value="Value"
      />
      <h6>No value + No image</h6>
      <m-list-item
        theme="light"
        is-pill
        text="List title"
        subtext="Sub title - extra info"
        variant="default"
      />
      <h6>Radio</h6>
      <m-list-item
        theme="light"
        is-pill
        icon="heart-fill"
        text="List title"
        subtext="Sub title - extra info"
        value="USD 38.00"
        alternative-value="Alternative"
        variant="selectable"
        :selectable-props="{
          'id': 'list-item-3',
          'name': 'list-item-3',
        }"
      />
      <h6>Image and text</h6>
      <m-list-item
        image="https://via.placeholder.com/100/00ff9g?text=IMG"
        theme="light"
        is-pill
        text="List title"
        variant="default"
      />
      <h6>No arrow</h6>
      <m-list-item
        image="https://via.placeholder.com/100/f0ff04?text=IMG"
        theme="light"
        is-pill
        text="List title"
        subtext="Sub title - extra info"
        value="USD 38.00"
        alternative-value="Alternative"
        variant="default"
      />
      <h6>All</h6>
      <ol class="list-group-numbered">
        <m-list-item
          theme="light"
          is-pill
          image="https://via.placeholder.com/100/ffdf6e?text=IMG"
          text="List title"
          subtext="Sub title - extra info"
          value="USD 38.00"
          alternative-value="Alternative"
          variant="selectable"
          :selectable-props="{
            'id': 'list-item-2',
            'name': 'list-item',
          }"
        />
        <m-list-item
          is-pill
          image="https://via.placeholder.com/100/ffdf6e?text=IMG"
          text="List title"
          subtext="Sub title - extra info"
          value="USD 38.00"
          alternative-value="Alternative"
          variant="selectable"
          :selectable-props="{
            'id': 'list-item-1',
            'name': 'list-item',
          }"
        />
        <m-list-item
          theme="light"
          image="https://via.placeholder.com/100/ffdf6e?text=IMG"
          text="List title"
          subtext="Sub title - extra info"
          value="USD 38.00"
          alternative-value="Alternative"
          variant="navegable"
          :navegable-props="{
            'href': '#',
            'target': '_blank'
          }"
        />
        <m-list-item
          image="https://via.placeholder.com/100/ffdf6e?text=IMG"
          text="List title"
          subtext="Sub title - extra info"
          value="USD 38.00"
          alternative-value="Alternative"
          variant="navegable"
          :navegable-props="{
            'href': '#',
            'target': '_blank'
          }"
        />
      </ol>
    </div>
    <div class="display-6">
      Font Styles
    </div>
    <div class="row my-3 gy-5 align-items-center">
      <div class="col-3">
        <div class="h3"> Display 1 </div>
        <p class="m-0">Size: 5rem </p>
        <p class="m-0">Line height 1.3 </p>
        <p class="m-0">Bold 700 </p>
        </div>
      <div class="col-9">
        <div class="display-1">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
      <div class="col-3">
        <div class="h3"> Display 2 </div>
        <p class="m-0">Size: 4.5rem </p>
        <p class="m-0">Line height 1.3 </p>
        <p class="m-0">Bold 700 </p>
        </div>
      <div class="col-9">
        <div class="display-2">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
      <div class="col-3">
        <div class="h3"> Display 3 </div>
        <p class="m-0">Size: 4rem </p>
        <p class="m-0">Line height 1.3 </p>
        <p class="m-0">Bold 700 </p>
        </div>
      <div class="col-9">
        <div class="display-3">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
      <div class="col-3">
        <div class="h3"> Display 4 </div>
        <p class="m-0">Size: 3.5rem </p>
        <p class="m-0">Line height 1.3 </p>
        <p class="m-0">Bold 700 </p>
        </div>
      <div class="col-9">
        <div class="display-4">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
      <div class="col-3">
        <div class="h3"> Display 5 </div>
        <p class="m-0">Size: 3rem </p>
        <p class="m-0">Line height 1.3 </p>
        <p class="m-0">Bold 700 </p>
        </div>
      <div class="col-9">
        <div class="display-5">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
      <div class="col-3">
        <div class="h3"> Display 6 </div>
        <p class="m-0">Size: 2.5rem </p>
        <p class="m-0">Line height 1.3 </p>
        <p class="m-0">Bold 700 </p>
        </div>
      <div class="col-9">
        <div class="display-6">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
    </div>
    <div class="row my-3 gy-5 align-items-center">
      <div class="col-3">
        <div class="h3">Heading 1</div>
        <p class="m-0">Size: 2.5rem </p>
        <p class="m-0">Line height 1.2 </p>
        <p class="m-0">Extra-Bold 800 </p>
        </div>
      <div class="col-9">
        <div class="h1">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
      <div class="col-3">
        <div class="h3">Heading 2</div>
        <p class="m-0">Size: 2rem </p>
        <p class="m-0">Line height 1.2 </p>
        <p class="m-0">Extra-Bold 800 </p>
        </div>
      <div class="col-9">
        <div class="h2">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
      <div class="col-3">
        <div class="h3">Heading 3</div>
        <p class="m-0">Size: 1.75rem </p>
        <p class="m-0">Line height 1.2 </p>
        <p class="m-0">Extra-Bold 800 </p>
        </div>
      <div class="col-9">
        <div class="h3">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
      <div class="col-3">
        <div class="h3">Heading 4</div>
        <p class="m-0">Size: 1.5rem </p>
        <p class="m-0">Line height 1.2 </p>
        <p class="m-0">Bold 700 </p>
        </div>
      <div class="col-9">
        <div class="h4">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
      <div class="col-3">
        <div class="h3">Heading 5</div>
        <p class="m-0">Size: 1.25rem </p>
        <p class="m-0">Line height 1.2 </p>
        <p class="m-0">SemiBold 600 </p>
        </div>
      <div class="col-9">
        <div class="h5">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
      <div class="col-3">
        <div class="h3">Heading 6</div>
        <p class="m-0">Size: 1.125rem </p>
        <p class="m-0">Line height 1.2 </p>
        <p class="m-0">SemiBold 600 </p>
        </div>
      <div class="col-9">
        <div class="h6">
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</div>
      </div>
    </div>
    <div class="row my-3 gy-5 align-items-center">
      <div class="col-3">
        <div class="h3">Body text</div>
        <p class="m-0">Size: 1rem </p>
        <p class="m-0">Line height 1.5 </p>
        <p class="m-0">Regular 400 </p>
        </div>
      <div class="col-9">
        <p>Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</p>
      </div>
      <div class="col-3">
        <div class="h3">Small</div>
        <p class="m-0">Size: 0.75rem </p>
        <p class="m-0">Line height 1.5 </p>
        <p class="m-0">Regular 400 </p>
        </div>
      <div class="col-9">
        <small>
          Earth is the third planet from the Sun and the only
          astronomical object known to harbor life.</small>
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
