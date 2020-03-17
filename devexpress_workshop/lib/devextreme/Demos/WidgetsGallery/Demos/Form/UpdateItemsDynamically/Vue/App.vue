<template>
  <div>
    <div class="long-title"><h3>Personal details</h3></div>
    <div id="form-container">
      <dx-form
        id="form"
        :col-count="2"
        :form-data="employee"
      >
        <dx-group-item>
          <dx-group-item caption="Personal Data">
            <dx-simple-item data-field="FirstName"/>
            <dx-simple-item data-field="LastName"/>
            <dx-simple-item
              :editor-options="checkBoxOptions"
              editor-type="dxCheckBox"
            />
          </dx-group-item>
          <dx-group-item>
            <dx-group-item
              :visible="isHomeAddressVisible"
              caption="Home Address"
              name="HomeAddress"
            >
              <dx-simple-item data-field="Address"/>
              <dx-simple-item data-field="City"/>
            </dx-group-item>
          </dx-group-item>
        </dx-group-item>
        <dx-group-item
          caption="Phones"
          name="phones-container"
        >
          <dx-group-item
            v-for="(phone, index) in phoneOptions"
            :key="'Phone' + (index + 1)"
            item-type="group"
            name="phones"
          >
            <dx-simple-item
              :data-field="'Phones[' + index + ']'"
              :editor-options="phone"
            >
              <dx-label :text="'Phone ' + (index + 1)"/>
            </dx-simple-item>
          </dx-group-item>
          <dx-button-item
            :button-options="addPhoneButtonOptions"
            css-class="add-phone-button"
            horizontal-alignment="left"
          />
        </dx-group-item>
      </dx-form>
    </div>
  </div>
</template>
<script>
import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxButtonItem,
  DxLabel
} from 'devextreme-vue/form';
import service from './data.js';

export default {
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxButtonItem,
    DxLabel
  },
  data() {
    const employee = service.getEmployee();
    let isHomeAddressVisible = true;

    let phoneOptions = this.getPhonesOptions(employee.Phones);

    return {
      employee,
      isHomeAddressVisible,
      phoneOptions,
      checkBoxOptions: {
        text: 'Show Address',
        value: true,
        onValueChanged: (e) => {
          this.isHomeAddressVisible = e.component.option('value');
        }
      },
      addPhoneButtonOptions: {
        icon: 'add',
        text: 'Add phone',
        onClick: () => {
          this.employee.Phones.push('');
          this.phoneOptions = this.getPhonesOptions(this.employee.Phones);
        }
      }
    };
  },
  methods: {
    getPhonesOptions(phones) {
      let options = [];
      for (let i = 0; i < phones.length; i++) {
        options.push(this.generateNewPhoneOptions(i));
      }
      return options;
    },
    generateNewPhoneOptions(index) {
      return {
        mask: '+1 (X00) 000-0000',
        maskRules: { 'X': /[01-9]/ },
        buttons: [{
          name: 'trash',
          location: 'after',
          options: {
            stylingMode: 'text',
            icon: 'trash',
            onClick: () => {
              this.employee.Phones.splice(index, 1);
              this.phoneOptions = this.getPhonesOptions(this.employee.Phones);
            }
          }
        }]
      };
    }
  }
};
</script>
<style scoped>
#form-container {
    margin: 10px 10px 30px;
}

.long-title h3 {
    font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana;
    font-weight: 200;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
}

.add-phone-button {
    margin-top: 10px;
}
</style>
