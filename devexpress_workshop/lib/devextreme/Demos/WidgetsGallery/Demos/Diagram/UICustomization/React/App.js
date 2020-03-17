import React from 'react';
import Diagram, { ContextMenu, PropertiesPanel, Group, Toolbar, Toolbox } from 'devextreme-react/diagram';
import 'whatwg-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.diagramRef = React.createRef();
  }

  componentDidMount() {
    var diagram = this.diagramRef.current.instance;
    fetch('../../../../data/diagram-flow.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        diagram.import(JSON.stringify(json));
      })
      .catch(function() {
        throw 'Data Loading Error';
      });
  }
  render() {
    return (
      <Diagram id="diagram" ref={this.diagramRef}>
        <ContextMenu enabled={true} commands={['bringToFront', 'sendToBack', 'lock', 'unlock']} />
        <PropertiesPanel enabled={true} collapsible={false}>
          <Group commands={['units']} />
          <Group commands={['pageSize', 'pageOrientation', 'pageColor']} />
        </PropertiesPanel>
        <Toolbar visible={true} commands={['undo', 'redo', 'separator', 'fontName', 'fontSize', 'separator', 'bold', 'italic', 'underline', 'separator',
          'fontColor', 'lineColor', 'fillColor', 'separator']} />
        <Toolbox visible={true}>
          <Group category="general" title="General" />
          <Group category="flowchart" title="Flowchart" expanded={true} />
        </Toolbox>
      </Diagram>
    );
  }
}

export default App;
