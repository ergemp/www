import React from 'react';

import FileManager, { Permissions } from 'devextreme-react/file-manager';
import RemoteFileProvider from 'devextreme/ui/file_manager/file_provider/remote';

const remoteFileProvider = new RemoteFileProvider({
  endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-db'
});

const allowedFileExtensions = [];

class App extends React.Component {

  customizeDetailColumns(columns) {
    var fileSizeColumn = columns.filter(function(c) { return c.dataField === 'fileSize'; })[0];
    columns.splice(columns.indexOf(fileSizeColumn), 1);

    var modifiedColumn = columns.filter(function(c) { return c.dataField === 'dateModified'; })[0];
    modifiedColumn.caption = 'Modified';

    columns.push({
      caption: 'Created',
      dataField: 'created',
      dataType: 'date'
    });

    columns.push({
      visibleIndex: 2,
      caption: 'Modified By',
      dataField: 'modifiedBy'
    });
    return columns;
  }

  render() {
    return (
      <FileManager
        currentPath="Documents/Reports"
        fileProvider={remoteFileProvider}
        allowedFileExtensions={allowedFileExtensions}
        customizeDetailColumns={this.customizeDetailColumns}
        height={550}>
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
