import React from 'react';

import FileManager, { Permissions } from 'devextreme-react/file-manager';
import RemoteFileProvider from 'devextreme/ui/file_manager/file_provider/remote';

const remoteFileProvider = new RemoteFileProvider({
  endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts'
});

const allowedFileExtensions = ['.js', '.json', '.css'];

class App extends React.Component {

  render() {
    return (
      <FileManager fileProvider={remoteFileProvider} allowedFileExtensions={allowedFileExtensions}>
        {/* uncomment the code below to enable file/directory management */}
        <Permissions
          // create={true}
          // copy={true}
          // move={true}
          // remove={true}
          // rename={true}
          // upload={true}
          download={true}>
        </Permissions>
      </FileManager>
    );
  }
}

export default App;
