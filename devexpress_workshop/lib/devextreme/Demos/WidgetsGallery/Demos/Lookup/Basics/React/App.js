import React from 'react';
import { Lookup } from 'devextreme-react';
import DataSource from 'devextreme/data/data_source';
import { employeesList, employeesTasks } from './data.js';

const groupedData = new DataSource({
  store: employeesTasks,
  key: 'ID',
  group: 'Assigned'
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Simple lookup</div>
          <div className="dx-field">
            <Lookup items={employeesList} defaultValue={employeesList[0]} showPopupTitle={false} />
          </div>
        </div>
        <div className="dx-fieldset">
          <div className="dx-fieldset-header">Grouped lookup</div>
          <div className="dx-field">
            <Lookup dataSource={groupedData} grouped={true} closeOnOutsideClick={true} showPopupTitle={false} displayExpr="Subject" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
