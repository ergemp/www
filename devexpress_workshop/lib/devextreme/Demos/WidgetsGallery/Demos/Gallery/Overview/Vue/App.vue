<template>
  <div>
    <div class="widget-container">
      <dx-gallery
        id="gallery"
        :data-source="dataSource"
        :loop="loop"
        :slideshow-delay="slideshowDelay"
        :show-nav-buttons="showNavButtons"
        :show-indicator="showIndicator"
        :height="300"
      />
    </div>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <dx-check-box
          v-model="loop"
          text="Loop mode"
        />
      </div>
      <div class="option">
        <dx-check-box
          :value="true"
          text="Slide show"
          @value-changed="setSlideshowDelay"
        />
      </div>
      <div class="option">
        <dx-check-box
          v-model="showNavButtons"
          text="Navigation buttons"
        />
      </div>
      <div class="option">
        <dx-check-box
          v-model="showIndicator"
          text="Indicator"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { DxCheckBox, DxGallery } from 'devextreme-vue';
import { gallery } from './data.js';

export default {
  components: {
    DxCheckBox,
    DxGallery
  },
  data() {
    return {
      dataSource: gallery,
      loop: true,
      slideshowDelay: 2000,
      showNavButtons: true,
      showIndicator: true
    };
  },
  methods: {
    setSlideshowDelay(e) {
      this.slideshowDelay = e.value ? 2000 : 0;
    }
  }
};
</script>

