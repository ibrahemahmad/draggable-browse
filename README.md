# React Draggable Browse

#### _React Draggable Browse Library_



[![ibrahemahmad - Draggable Browse](https://img.shields.io/static/v1?label=ibrahemahmad&message=draggable-browse&color=yellow&logo=github)](https://github.com/ibrahemahmad/draggable-browse "Go to GitHub repo")
[![npm version](https://img.shields.io/npm/v/draggable-browse.svg)](http://badge.fury.io/js/draggable-browse) [![npm downloads](https://img.shields.io/npm/dm/draggable-browse.svg)](http://badge.fury.io/js/draggable-browse) [![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/ibrahemahmad/draggable-browse/blob/main/LICENSE)

React draggable browse, let user browse any file, with browse or draggable and work on all platform, and you can use it with your custom style and you have a lot of functionality to use it and easy to use.


## Key Features

- work on all platforms.
- show list of picked files.
- removable picked file
- custom style.
- use for all type files

  &nbsp;

 

 
## Requirements

This package supports both vue.js and nuxt.js, you are required to use one of these versions:

- react.js 18.x

&nbsp;

## Installation

To use the package you must first add the it to your dependencies in your project.

```bash
$ npm i draggable-browse
```

## How to use

for use this package in any screen you should import the package and css file like this :

```bash
import { DragDropFile } from 'draggable-browse';
import './../node_modules/draggable-browse/dist/draggable-browse.cjs.development.css'

```
```html
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
```


Then you have to register the package in your project as well as import a necessary css file that comes with the package.

## Author

[ibrahem ahmed](https://github.com/ibrahemahmad)

## License

[The MIT License](http://opensource.org/licenses/MIT)
