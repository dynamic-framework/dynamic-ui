<template>
  <m-app>
    <m-button
      text="click me!"
      @mod-button-click="onButtonClick"
    />
    <div>
      <h3>Switches</h3>
      <div class="d-flex my-4 gap-5">
        <m-form-switch
          m-id="switch16"
        />
        <m-form-switch
          label="Default switch"
          m-id="switch1"
          :is-checked="switchValue1"
          @m-change="$event => this.switchValue1 = $event.detail"
        />
        <m-form-switch
          label="Default switch"
          m-id="switch2"
          is-checked
        />
        <m-form-switch
          label="Default switch"
          m-id="switch3"
          is-disabled
        />
      </div>
    </div>
    <div>
      <h3>Checkboxes</h3>
      <div class="d-flex my-4 gap-5">
        <m-form-check
          type="checkbox"
          m-id="check16" />
        <m-form-check
          type="checkbox"
          label="Default Checkbox"
          m-id="check1" />
        <m-form-check
          type="checkbox"
          label="Default Checkbox"
          m-id="check2"
          checked />
        <m-form-check
          type="checkbox"
          label="Default Checkbox"
          m-id="check3"
          disabled />
      </div>
      <div class="d-flex my-4 gap-5">
        <m-form-check
          type="checkbox"
          state="danger"
          m-id="check17" />
        <m-form-check
          type="checkbox"
          state="danger"
          label="Danger Checkbox"
          m-id="check4" />
        <m-form-check
          type="checkbox"
          state="danger"
          label="Danger Checkbox"
          m-id="check5"
          checked />
        <m-form-check
          type="checkbox"
          state="danger"
          label="Danger Checkbox"
          m-id="check6"
          disabled />
      </div>
      <div class="d-flex my-4 gap-5">
        <m-form-check
          type="checkbox"
          state="warning"
          m-id="check18" />
        <m-form-check
          type="checkbox"
          state="warning"
          label="Warning Checkbox"
          m-id="check7" />
        <m-form-check
          type="checkbox"
          state="warning"
          label="Warning Checkbox"
          m-id="check8"
          checked />
        <m-form-check
          type="checkbox"
          state="warning"
          label="Warning Checkbox"
          m-id="check9"
          disabled />
      </div>
      <div class="d-flex my-4 gap-5">
        <m-form-check
          type="checkbox"
          state="success"
          m-id="check18" />
        <m-form-check
          type="checkbox"
          state="success"
          label="Success Checkbox"
          m-id="check10" />
        <m-form-check
          type="checkbox"
          state="success"
          label="Success Checkbox"
          m-id="check11"
          checked />
        <m-form-check
          type="checkbox"
          state="success"
          label="Success Checkbox"
          m-id="check12"
          disabled />
      </div>
      <div class="d-flex my-4 gap-5">
        <m-form-check
          type="checkbox"
          m-id="check18" />
        <m-form-check
          type="checkbox"
          indeterminate
          label="Indeterminate Checkbox"
          m-id="check13" />
        <m-form-check
          type="checkbox"
          indeterminate
          label="Indeterminate Checkbox"
          m-id="check14"
          checked />
        <m-form-check
          type="checkbox"
          indeterminate
          label="Indeterminate Checkbox"
          m-id="check15"
          disabled />
      </div>
    </div>
    <div>
      <h3>Radios</h3>
      <div class="d-flex my-4 gap-5">
        <m-form-check
          type="radio"
          name="group1"
          m-id="radio16" />
        <m-form-check
          type="radio"
          name="group1"
          label="Default radio"
          m-id="radio1" />
        <m-form-check
          type="radio"
          name="group1"
          label="Default radio"
          m-id="radio2"
          checked />
        <m-form-check
          type="radio"
          name="group1"
          label="Default radio"
          m-id="radio3"
          disabled />
      </div>
      <div class="d-flex my-4 gap-5">
        <m-form-check
          type="radio"
          name="group2"
          state="danger"
          m-id="radio17" />
        <m-form-check
          type="radio"
          name="group2"
          state="danger"
          label="Danger radio"
          m-id="radio4" />
        <m-form-check
          type="radio"
          name="group2"
          state="danger"
          label="Danger radio"
          m-id="radio5"
          checked />
        <m-form-check
          type="radio"
          name="group2"
          state="danger"
          label="Danger radio"
          m-id="radio6"
          disabled />
      </div>
      <div class="d-flex my-4 gap-5">
        <m-form-check
          type="radio"
          name="group3"
          state="warning"
          m-id="radio18" />
        <m-form-check
          type="radio"
          name="group3"
          state="warning"
          label="Warning radio"
          m-id="radio7" />
        <m-form-check
          type="radio"
          name="group3"
          state="warning"
          label="Warning radio"
          m-id="radio8"
          checked />
        <m-form-check
          type="radio"
          name="group3"
          state="warning"
          label="Warning radio"
          m-id="radio9"
          disabled />
      </div>
      <div class="d-flex my-4 gap-5">
        <m-form-check
          type="radio"
          name="group4"
          state="success"
          m-id="radio18" />
        <m-form-check
          type="radio"
          state="success"
          name="group4"
          label="Success radio"
          m-id="radio10" />
        <m-form-check
          type="radio"
          state="success"
          label="Success radio"
          name="group4"
          m-id="radio11"
          checked />
        <m-form-check
          type="radio"
          state="success"
          label="Success radio"
          m-id="radio12"
          name="group4"
          disabled />
      </div>
    </div>
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
    <div class="py-5 my-5">
     <h5 class="fw-bold">Nav/Tabs</h5>
     <h6 class="mt-4">No variant</h6>
     <m-nav>
       <m-nav-item>
          <m-nav-link
            text="Tab One"
            icon="circle"
          />
       </m-nav-item>
       <m-nav-item>
          <m-nav-link
            text="Tab Two"
            is-active
          />
       </m-nav-item>
        <m-nav-item>
          <m-nav-link
            text="Tab Three"
            is-disabled
          />
       </m-nav-item>
     </m-nav>
     <h6 class="mt-4">Tabs variant</h6>
     <m-nav variant="tabs">
       <m-nav-item>
          <m-nav-link
            text="Tab One"
            icon="circle"
          />
       </m-nav-item>
       <m-nav-item>
          <m-nav-link
            text="Tab Two"
            is-active
          />
       </m-nav-item>
        <m-nav-item>
          <m-nav-link
            text="Tab Three"
            is-disabled
          />
       </m-nav-item>
     </m-nav>
     <h6 class="mt-4">Pills variant</h6>
     <m-nav variant="pills">
       <m-nav-item>
          <m-nav-link
            text="Tab One"
            is-active
            icon="circle"
          />
       </m-nav-item>
       <m-nav-item>
          <m-nav-link
            text="Tab Two"
            :navegableProps="{href: '#123', 'aria-current': 'true'}"
          />
       </m-nav-item>
        <m-nav-item>
          <m-nav-link
            text="Tab Three"
            variant="option"
            :optionProps="{
              id: 'test',
              type: 'button',
              role: 'tab',
              'data-bs-toggle': 'tab',
              'data-bs-target': '#test',
              'aria-controls': 'tab-test',
              'aria-selected': 'true'
            }"
          />
        </m-nav-item>
        <m-nav-item>
          <m-nav-link
            text="Tab Four"
            is-disabled
          />
        </m-nav-item>
     </m-nav>
      <h6 class="mt-4">Tabs with content</h6>
      <m-nav
      class="mb-2"
        variant="tabs"
      >
        <m-nav-item>
          <m-nav-link
            text="Home"
            variant="option"
            icon="house-fill"
            :optionProps="{
                id: 'home-btnn',
                type: 'button',
                role: 'tab',
                'data-bs-toggle': 'tab',
                'data-bs-target': '#home',
                'aria-controls': 'tab-test',
                'aria-selected': 'true'
              }"
              is-active
          />
        </m-nav-item>
        <m-nav-item>
          <m-nav-link
            text="About"
            variant="option"
            icon="info-circle-fill"
            :optionProps="{
                id: 'about-btn',
                type: 'button',
                role: 'tab',
                'data-bs-toggle': 'tab',
                'data-bs-target': '#about',
                'aria-controls': 'tab-test',
                'aria-selected': 'false'
              }"
          />
        </m-nav-item>
      </m-nav>
      <m-nav-content>
        <m-nav-pane m-id="home" is-active
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima cumque est repellendus mollitia eaque placeat
          possimus quidem, voluptas maxime, eveniet, in nisi
          dolorem quos eligendi assumenda praesentium iure
          deserunt. Home.
        </m-nav-pane>
        <m-nav-pane m-id="about"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima cumque est repellendus mollitia eaque placeat
          possimus quidem, voluptas maxime, eveniet, in nisi
          dolorem quos eligendi assumenda praesentium iure
          deserunt. About.
        </m-nav-pane>
      </m-nav-content>
      <h6 class="mt-4">Pills with content</h6>
      <m-nav
      class="mb-2"
        variant="pills"
      >
        <m-nav-item>
          <m-nav-link
            text="Home"
            variant="option"
            icon="house-fill"
            :optionProps="{
                id: 'home-btnn',
                type: 'button',
                role: 'tab',
                'data-bs-toggle': 'tab',
                'data-bs-target': '#home2',
                'aria-controls': 'tab-test',
                'aria-selected': 'false'
              }"
          />
        </m-nav-item>
        <m-nav-item>
          <m-nav-link
            text="About"
            variant="option"
            icon="info-circle-fill"
            :optionProps="{
                id: 'about-btn',
                type: 'button',
                role: 'tab',
                'data-bs-toggle': 'tab',
                'data-bs-target': '#about2',
                'aria-controls': 'tab-test',
                'aria-selected': 'true'
              }"
              is-active
          />
        </m-nav-item>
      </m-nav>
      <m-nav-content>
        <m-nav-pane m-id="home2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima cumque est repellendus mollitia eaque placeat
          possimus quidem, voluptas maxime, eveniet, in nisi
          dolorem quos eligendi assumenda praesentium iure
          deserunt. Home.
        </m-nav-pane>
        <m-nav-pane m-id="about2" is-active
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima cumque est repellendus mollitia eaque placeat
          possimus quidem, voluptas maxime, eveniet, in nisi
          dolorem quos eligendi assumenda praesentium iure
          deserunt. About.
        </m-nav-pane>
      </m-nav-content>
    </div>
    <div class="row gap-3">
      <div class="col-12">
        <h6 class="fw-bold">Variant Prime</h6>
        <div class="w-50">
          <m-select 
          class="w-100"
          @m-change="onChange"
          >
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </m-select>
        </div>
      </div>
      <div class="col-5 d-flex flex-column gap-2 mt-3">
        <h6 class="fw-bold">Variant full</h6>
          <m-select
          theme="primary"
          variant="full"
          label="Label"
          icon-start="emoji-smile"
          icon-middle="circle-fill"
          icon-end="cup-fill"
          hint="Earth is the third planet from the Sun."
          @m-change="onChange"
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Sin icon start</b>
          <m-select
          theme="secondary"
          variant="full"
          label="Label"
          icon-middle="circle-fill"
          icon-end="cup-fill"
          hint="Earth is the third planet from the Sun."
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Sin icon middle</b>
          <m-select
          theme="tertiary"
          variant="full"
          label="Label"
          icon-start="emoji-smile"
          icon-end="cup-fill"
          hint="Earth is the third planet from the Sun."
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Sin icon end</b>
          <m-select
          theme="success"
          variant="full"
          label="Label"
          icon-start="emoji-smile"
          icon-middle="circle-fill"
          hint="Earth is the third planet from the Sun."
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Sin icons</b>
          <m-select
          theme="success"
          variant="full"
          label="Label"
          hint="Earth is the third planet from the Sun."
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Sin label</b>
          <m-select
          theme="warning"
          variant="full"
          icon-start="emoji-smile"
          icon-middle="circle-fill"
          icon-end="cup-fill"
          hint="Earth is the third planet from the Sun."
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Sin hint</b>
          <m-select
          theme="info"
          variant="full"
          label="Label"
          icon-start="emoji-smile"
          icon-middle="circle-fill"
          icon-end="cup-fill"
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Otro hint icon</b>
          <m-select
          theme="danger"
          variant="full"
          label="Label"
          icon-start="emoji-smile"
          icon-middle="circle-fill"
          icon-end="cup-fill"
          hint-icon="heart-fill"
          hint="Earth is the third planet from the Sun."
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
      </div>
      <div class="col-5 d-flex flex-column gap-2 mt-3">
        <h6 class="fw-bold">Variant transparent</h6>
          <m-select
          theme="primary"
          variant="transparent"
          icon-start="emoji-smile"
          icon-middle="circle-fill"
          icon-end="cup-fill"
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Sin icon start</b>
          <m-select
          theme="secondary"
          variant="transparent"
          icon-middle="circle-fill"
          icon-end="cup-fill"
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Sin icon middle</b>
          <m-select
          theme="tertiary"
          variant="transparent"
          icon-start="emoji-smile"
          icon-end="cup-fill"
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Sin icon end</b>
          <m-select
          theme="success"
          variant="transparent"
          icon-start="emoji-smile"
          icon-middle="circle-fill"
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Sin icons</b>
          <m-select
          theme="success"
          variant="transparent"
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <b>Con OnChange</b>
          <m-select
          theme="warning"
          variant="transparent"
          icon-start="emoji-smile"
          icon-middle="circle-fill"
          icon-end="cup-fill"
          @m-change="onChange"
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <m-select
          theme="info"
          variant="transparent"
          icon-start="emoji-smile"
          icon-middle="circle-fill"
          icon-end="cup-fill"
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
          <m-select
          theme="danger"
          variant="transparent"
          icon-start="emoji-smile"
          icon-middle="circle-fill"
          icon-end="cup-fill"
          hint="Earth is the third planet from the Sun."
        >
          <option value="a" selected>A</option>
          <option value="b">B</option>
          <option value="c">C</option></m-select>
      </div>
      </div>
    <div class="row py-5">
      <div class="col-12">
        <h3 class="fw-bold mb-4">m-icon</h3>
      </div>
      <div class="col-12 col-sm-6">
        Sin color <br>
        <MIcon icon="heart-fill"/>
      </div>
      <div class="col-12 col-sm-6">
        Con size de 2rem <br>
        <MIcon icon="heart-fill" size="2rem"/>
      </div>
      <div class="col-12 col-sm-6">
        Temas <br>
        <MIcon icon="heart-fill" theme="primary"/>
        <MIcon icon="heart-fill" theme="secondary"/>
        <MIcon icon="heart-fill" theme="tertiary"/>
        <MIcon icon="heart-fill" theme="success"/>
        <MIcon icon="heart-fill" theme="warning"/>
        <MIcon icon="heart-fill" theme="info"/>
        <MIcon icon="heart-fill" theme="danger"/>
        <MIcon icon="heart-fill" theme="light"/>
        <MIcon icon="heart-fill" theme="dark"/>
      </div>
      <div class="col-12 col-sm-6" style="color: red;">
        Con color heredado del div <br>
        <MIcon icon="heart-fill"/>
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
  MNav,
  MNavItem,
  MNavLink,
  MNavContent,
  MNavPane,
  MFormCheck,
  MSelect,
  MFormSwitch,
  MIcon,
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
    MNav,
    MNavItem,
    MNavLink,
    MNavContent,
    MNavPane,
    MFormCheck,
    MSelect,
    MFormSwitch,
    MIcon,
  },
  data() {
    return {
      title: 'title prop text',
      actions: [
        { id: 'action 1', text: 'Action 1' },
        { id: 'action 2', text: 'Action 2' },
      ],
      value: 'initial',
      switchValue1: true,
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
    print() {
      console.log('hola');
    },
    onChange({ detail }: CustomEvent) {
      console.log(detail);
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
