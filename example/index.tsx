import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DragDropFile } from '../.';

const App = () => {
  return (
    <div>
      <DragDropFile
        hasBrowseButton={true}
        multiple={true}
        acceptDublicate={false}
        style={{
          color: 'red',
          minWidth: '14rem',
          width: '10rem',
          height: '14rem',
        }}
        accept="*"
        onFileSelected={listFile => {
          console.log('files', listFile);
        }}
        buttonText="browse file"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
