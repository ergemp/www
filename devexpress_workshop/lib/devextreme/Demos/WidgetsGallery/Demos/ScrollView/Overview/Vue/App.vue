<template>
  <div>
    <div id="scrollview-demo">
      <dx-scroll-view
        id="scrollview"
        ref="scrollViewWidget"
        :scroll-by-content="scrollByContent"
        :scroll-by-thumb="scrollByThumb"
        :show-scrollbar="showScrollbar"
        :bounce-enabled="pullDown"
        reach-bottom-text="Updating..."
        @pull-down="updateTopContent"
        @reach-bottom="updateBottomContent"
      >
        <div v-html="content"/>
      </dx-scroll-view>
      <div class="options">
        <div class="caption">Options</div>
        <div class="option">
          <span>Show scrollbar:</span>
          <dx-select-box
            id="show-scrollbar-mode"
            :items="showScrollbarModes"
            v-model="showScrollbar"
            value-expr="value"
            display-expr="text"
          />
        </div>
        <div class="option">
          <dx-check-box
            id="use-reach-bottom"
            :value="true"
            text="Update content on the ReachBottom event"
            @value-changed="onValueChanged"
          />
        </div>
        <div class="option">
          <dx-check-box
            id="use-pull-down-bottom"
            v-model="pullDown"
            text="Update content on the PullDown event"
          />
        </div>
        <div class="option">
          <dx-check-box
            v-model="scrollByContent"
            text="Scroll by content"
          />
        </div>
        <div class="option">
          <dx-check-box
            v-model="scrollByThumb"
            text="Scroll by thumb"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { longText } from './data.js';
import { DxScrollView } from 'devextreme-vue/scroll-view';
import { DxSelectBox } from 'devextreme-vue/select-box';
import { DxCheckBox } from 'devextreme-vue/check-box';

export default {
  components: {
    DxScrollView,
    DxSelectBox,
    DxCheckBox
  },
  data() {
    return {
      content: longText,
      pullDown: false,
      showScrollbarModes: [
        {
          text: 'On Scroll',
          value: 'onScroll'
        },
        {
          text: 'On Hover',
          value: 'onHover'
        },
        {
          text: 'Always',
          value: 'always'
        },
        {
          text: 'Never',
          value: 'never'
        }
      ],
      showScrollbar: 'onScroll',
      scrollByContent: true,
      scrollByThumb: true
    };
  },
  created() {},
  methods: {
    updateContent(args, eventName) {
      var updateContentText =
        `<br /><div>Content has been updated on the ${
          eventName
        } event.</div><br />`;
      if (this.updateContentTimer) clearTimeout(this.updateContentTimer);
      this.updateContentTimer = setTimeout(() => {
        this.content =
          eventName == 'PullDown'
            ? updateContentText + this.content
            : this.content + updateContentText;
        args.component.release();
      }, 500);
    },
    updateBottomContent(e) {
      this.updateContent(e, 'ReachBottom');
    },
    updateTopContent(e) {
      this.updateContent(e, 'PullDown');
    },
    onValueChanged(args) {
      this.$refs.scrollViewWidget.instance.option(
        'onReachBottom',
        args.value ? this.updateBottomContent : null
      );
    }
  }
};
</script>
<style scoped>
#scrollview-demo {
  min-height: 550px;
}

#scrollview {
  height: auto;
  position: absolute;
  top: 0;
  bottom: 300px;
  padding: 20px;
}

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option {
  margin-top: 10px;
}

.option > span {
  position: relative;
  top: 2px;
  margin-right: 10px;
}

.option > .dx-selectbox {
  display: inline-block;
  vertical-align: middle;
  max-width: 340px;
  width: 100%;
}
</style>
