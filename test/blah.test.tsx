import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DragDropFile } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
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
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
