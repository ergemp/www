<template>
  <div id="demo-container">
    <div class="widget-container">
      <dx-scroll-view
        id="scroll"
        :class="{'horizontal': itemOrientation === 'horizontal'}"
        :direction="itemOrientation"
        show-scrollbar="always"
      >
        <dx-sortable
          id="list"
          :drop-feedback-mode="dropFeedbackMode"
          :item-orientation="itemOrientation"
          :drag-direction="dragDirection"
          :scroll-speed="scrollSpeed"
          :scroll-sensitivity="scrollSensitivity"
          :handle="handle"
          :drag-template="dragTemplate"
          :cursor-offset="cursorOffset"
          @drag-start="onDragStart"
          @reorder="onReorder"
        >
          <template #drag="{ data }">
            <div
              class="item dx-card dx-theme-text-color dx-theme-background-color"
              style="font-weight: bold; width: 200px; padding: 10px"
            >
              {{ data.itemData.Task_Subject }}
            </div>
          </template>
          <template #content>
            <div>
              <div
                v-for="item in items"
                :key="item.Task_ID"
                :class="{ 'item-with-handle': handle }"
                class="item dx-card dx-theme-text-color dx-theme-background-color"
              >
                <i
                  v-if="handle"
                  class="handle dx-icon dx-icon-dragvertical"
                />
                {{ item.Task_Subject }}
              </div>
            </div>
          </template>
        </dx-sortable>
      </dx-scroll-view>
    </div>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <span>Drop Feedback Mode:</span>
        <dx-select-box
          :items="['push', 'indicate']"
          v-model="dropFeedbackMode"
        />
      </div>
      <div class="option">
        <span>Item Orientation:</span>
        <dx-select-box
          :items="['vertical', 'horizontal']"
          v-model="itemOrientation"
          @value-changed="onItemOrientationChanged"
        />
      </div>
      <div class="option">
        <span>Drag Direction:</span>
        <dx-select-box
          :items="dragDirections"
          v-model="dragDirection"
        />
      </div>
      <div class="option">
        <span>Scroll Speed:</span>
        <dx-number-box
          v-model="scrollSpeed"
        />
      </div>
      <div class="option">
        <span>Scroll Sensitivity:</span>
        <dx-number-box
          v-model="scrollSensitivity"
        />
      </div>
      <div class="option">
        <dx-check-box
          text="Use Handle"
          @value-changed="onHandleChanged"
        />
      </div>
      <div class="option">
        <dx-check-box
          text="Use Drag Template"
          @value-changed="onDragTemplateChanged"
        />
      </div>
    </div>
  </div>
</template>
<script>
import {
  DxScrollView,
  DxSortable,
  DxSelectBox,
  DxCheckBox,
  DxNumberBox
} from 'devextreme-vue';
import { tasks } from './data.js';

export default {
  components: {
    DxScrollView,
    DxSortable,
    DxSelectBox,
    DxCheckBox,
    DxNumberBox
  },
  data() {
    return {
      items: tasks,
      dropFeedbackMode: 'push',
      itemOrientation: 'vertical',
      dragDirection: 'both',
      scrollSpeed: 30,
      scrollSensitivity: 60,
      handle: '',
      dragTemplate: ''
    };
  },
  computed: {
    dragDirections() {
      return this.itemOrientation === 'vertical' ? ['both', 'vertical'] : ['both', 'horizontal'];
    },
    cursorOffset() {
      return this.dragTemplate ? { x: 10, y: 20 } : null;
    }
  },
  methods: {
    onDragStart(e) {
      e.itemData = this.items[e.fromIndex];
    },

    onReorder(e) {
      this.items.splice(e.fromIndex, 1);
      this.items.splice(e.toIndex, 0, e.itemData);
    },

    onItemOrientationChanged() {
      this.dragDirection = 'both';
    },

    onHandleChanged(e) {
      this.handle = e.value ? '.handle' : '';
    },

    onDragTemplateChanged(e) {
      this.dragTemplate = e.value ? 'drag' : '';
    }
  }
};
</script>
<style scoped>
.widget-container {
    margin-right: 320px;
}

#scroll {
    height: 500px;
}

#scroll.horizontal {
    margin-top: 200px;
    display: block;
    width: auto;
    height: auto;
    white-space: nowrap;
}

.handle {
    position: absolute;
    left: 4px;
    top: 10px;
    font-size: 18px;
    line-height: 19px;
    cursor: move;
}

.horizontal .handle {
    margin-right: 10px;
}

.item {
    box-sizing: border-box;
    position: relative;
    padding: 10px 20px;
    margin-bottom: 10px;
    background: white;
    cursor: pointer;
}

.item-with-handle {
    padding-left: 30px;
    cursor: default;
}

.horizontal .item {
    display: inline-block;
    width: 200px;
    height: 80px;
    margin-bottom: 0;
    margin-right: 10px;
    white-space: normal;
}

.options {
    padding: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 260px;
    top: 0;
    background-color: rgba(191, 191, 191, 0.15);
}

.caption {
    font-size: 18px;
    font-weight: 500;
}

.option {
    margin-top: 10px;
}
</style>
