import React from 'react';

import FileManager, { Permissions } from 'devextreme-react/file-manager';

import { fileItems } from './data.js';

class App extends React.Component {
  render() {
    return (
      <FileManager fileProvider={fileItems}>
        <Permissions
          create={true}
          copy={true}
          move={true}
          remove={true}
          rename={true}>
        </Permissions>
      </FileManager>
    );
  }
}

export default App;
