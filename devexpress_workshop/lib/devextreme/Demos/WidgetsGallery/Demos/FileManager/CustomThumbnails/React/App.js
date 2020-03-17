import React from 'react';

import FileManager, { Permissions, ItemView } from 'devextreme-react/file-manager';

import { fileItems } from './data.js';

class App extends React.Component {
  render() {
    return (
      <FileManager
        fileProvider={fileItems}
        customizeThumbnail={ this.customizeIcon }
        height={450}>
        <ItemView
          mode="thumbnails">
        </ItemView>
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

  customizeIcon(fileManagerItem) {
    if (fileManagerItem.isDirectory)
    { return '../../../../images/thumbnails/folder.svg'; }
    var fileExtension = fileManagerItem.getExtension();
    switch (fileExtension) {
      case '.txt':
        return '../../../../images/thumbnails/doc-txt.svg';
      case '.rtf':
        return '../../../../images/thumbnails/doc-rtf.svg';
      case '.xml':
        return '../../../../images/thumbnails/doc-xml.svg';
    }
  }

}

export default App;
