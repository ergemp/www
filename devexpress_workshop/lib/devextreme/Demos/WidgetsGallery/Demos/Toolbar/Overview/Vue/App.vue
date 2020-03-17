<template>
  <div>
    <dx-toolbar>
      <dx-item
        :options="backButtonOptions"
        location="before"
        widget="dxButton"
      />
      <dx-item
        :options="refreshButtonOptions"
        location="before"
        widget="dxButton"
      />
      <dx-item
        #default
        location="center"
        locate-in-menu="never"
      >
        <div class="toolbar-label"><b>Tom's Club</b> Products</div>
      </dx-item>
      <dx-item
        :options="selectBoxOptions"
        location="after"
        locate-in-menu="auto"
        widget="dxSelectBox"
      />
      <dx-item
        :options="addButtonOptions"
        location="after"
        locate-in-menu="auto"
        widget="dxButton"
      />
      <dx-item
        :options="saveButtonOptions"
        locate-in-menu="always"
        widget="dxButton"
      />
      <dx-item
        :options="printButtonOptions"
        locate-in-menu="always"
        widget="dxButton"
      />
      <dx-item
        :options="settingsButtonOptions"
        locate-in-menu="always"
        widget="dxButton"
      />
    </dx-toolbar>
    <dx-list
      id="products"
      :data-source="productsStore"
    />
  </div>
</template>
<script>
import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';
import DxList from 'devextreme-vue/list';

import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import 'devextreme/ui/select_box';

import { productTypes, products } from './data.js';

export default {
  components: {
    DxToolbar,
    DxList,
    DxItem
  },
  data() {
    return {
      productsStore: new DataSource(products),
      backButtonOptions: {
        type: 'back',
        onClick: () => {
          notify('Back button has been clicked!');
        }
      },
      refreshButtonOptions: {
        icon: 'refresh',
        onClick: () => {
          notify('Refresh button has been clicked!');
        }
      },
      selectBoxOptions: {
        width: 140,
        items: productTypes,
        valueExpr: 'id',
        displayExpr: 'text',
        value: productTypes[0].id,
        onValueChanged: (args) => {
          if (args.value > 1) {
            this.productsStore.filter('type', '=', args.value);
          } else {
            this.productsStore.filter(null);
          }
          this.productsStore.load();
        }
      },
      addButtonOptions: {
        icon: 'plus',
        onClick: () => {
          notify('Add button has been clicked!');
        }
      },
      saveButtonOptions: {
        text:'Save',
        onClick: () => {
          notify('Save option has been clicked!');
        }
      },
      printButtonOptions: {
        text:'Print',
        onClick: () => {
          notify('Print option has been clicked!');
        }
      },
      settingsButtonOptions: {
        text:'Settings',
        onClick: () => {
          notify('Settings option has been clicked!');
        }
      }
    };
  }
};
</script>
<style>
.toolbar-label,
.toolbar-label > b {
    font-size: 16px;
}

#products {
    margin-top: 10px;
}
</style>
