import React from 'react';
import { TreeList, Editing, Column, ValidationRule, Lookup } from 'devextreme-react/tree-list';
import { employees } from './data.js';

const expandedRowKeys = [1];

const popupOptions = {
  title: 'Employee Info',
  showTitle: true,
  width: 700,
  position: { my: 'top', at: 'top', of: window }
};

const lookupData = {
  store: employees,
  sort: 'Full_Name'
};

class App extends React.Component {
  render() {
    return (
      <div id="tree-list-demo">
        <TreeList
          dataSource={employees}
          columnAutoWidth={true}
          showRowLines={true}
          showBorders={true}
          defaultExpandedRowKeys={expandedRowKeys}
          keyExpr="ID"
          parentIdExpr="Head_ID"
          onCellPrepared={this.onCellPrepared}
          onEditorPreparing={this.onEditorPreparing}
          onInitNewRow={this.onInitNewRow}
        >
          <Editing allowUpdating={true} allowDeleting={true} allowAdding={true} popup={popupOptions} mode="popup" />
          <Column dataField="Full_Name">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="Prefix" caption="Title">
            <ValidationRule type="required" />
          </Column>
          <Column visible={false} dataField="Head_ID" caption="Head">
            <Lookup dataSource={lookupData} valueExpr="ID" displayExpr="Full_Name" />
            <ValidationRule type="required" />
          </Column>
          <Column dataField="Title" caption="Position">
            <ValidationRule type="required" />
          </Column>
          <Column width={150} dataField="City">
            <ValidationRule type="required" />
          </Column>
          <Column width={120} dataField="Hire_Date" dataType="date">
            <ValidationRule type="required" />
          </Column>
        </TreeList>
      </div>
    );
  }

  onCellPrepared(e) {
    if(e.column.command === 'edit') {
      let addLink = e.cellElement.querySelector('.dx-link-add');

      if(addLink) {
        addLink.remove();
      }
    }
  }
  onEditorPreparing(e) {
    if (e.dataField === 'Head_ID' && e.row.data.ID === 1) {
      e.editorOptions.disabled = true;
      e.editorOptions.value = null;
    }
  }
  onInitNewRow(e) {
    e.data.Head_ID = 1;
  }
}

export default App;
