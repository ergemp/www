import React from 'react';
import Diagram, { Nodes, Toolbox, PropertiesPanel } from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.dataSource = new ArrayStore({
      key: 'this',
      data: service.getEmployees()
    });
  }

  render() {
    return (
      <Diagram id="diagram" simpleView={true}>
        <Nodes dataSource={this.dataSource} keyExpr="ID" textExpr="Title" parentKeyExpr="Head_ID" />
        <Toolbox visible={false} />
        <PropertiesPanel enabled={false} />
      </Diagram>
    );
  }
}

export default App;
