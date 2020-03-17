<template>
  <tr class="rows-content">
    <th>{{ year }}</th>
    <td>
      <dx-sparkline
        :data-source="source"
        :show-min-max="true"
        :value-field="getValueField('alum')"
        class="sparkline"
        argument-field="month"
        type="bar"
      >
        <dx-tooltip format="currency"/>
      </dx-sparkline>
    </td>
    <td>
      <dx-sparkline
        :data-source="source"
        :show-min-max="true"
        :show-first-last="false"
        :value-field="getValueField('nickel')"
        class="sparkline"
        argument-field="month"
        type="bar"
        bar-positive-color="#6babac"
        min-color="#9ab57e"
        max-color="#8076bb"
      >
        <dx-tooltip format="currency"/>
      </dx-sparkline>
    </td>
    <td>
      <dx-sparkline
        :data-source="source"
        :value-field="getValueField('copper')"
        class="sparkline"
        argument-field="month"
        type="bar"
        bar-positive-color="#e55253"
        first-last-color="#ebdd8f"

        point-color="#e8c267"
      >
        <dx-tooltip format="currency"/>
      </dx-sparkline>
    </td>
  </tr>
</template>

<script>
import DxSparkline, {
  DxTooltip,
} from 'devextreme-vue/sparkline';

export default {
  components: {
    DxSparkline,
    DxTooltip
  },

  props: {
    year:{
      type: String,
      default() {}
    },
    source: {
      type: Object,
      default() {}
    }
  },

  methods:{
    getValueField(name) {
      return name + this.year;
    }
  }
};
</script>
<style>
.rows-content td {
    font-weight: 400;
    width: 200px;
    padding: 25px 10px 5px 10px;
    border: 1px solid #c2c2c2;
}

.rows-content tr:nth-child(2) td {
    border-top: 1px solid #c2c2c2;
}

.rows-content td:first-of-type {
    border-left: 1px solid #c2c2c2;
}

.rows-content .sparkline {
    width: 200px;
    height: 30px;
}
</style>
