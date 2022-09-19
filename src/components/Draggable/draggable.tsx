import React, { ReactNode, useRef, useState } from 'react'
import { ImageShow } from './Image'
import './draggableStyle.css'
type Props = {
  onFileSelected: (listFile: Array<any>) => void
  buttonText?: string
  lableText?: string
  style?: Record<string, unknown>
  accept?: string
  multiple?: boolean
  hasBrowseButton?: boolean
  acceptDublicate?: boolean
}

const DragDropFile = ({
  onFileSelected,
  buttonText = 'Upload a file',
  lableText = 'Drag and drop your file here',
  style = {},
  accept = '*',
  multiple = false,
  hasBrowseButton = true,
  acceptDublicate = false,
}: Props) => {
  const [listFile, onSelectFiles] = useState<Array<any>>([])
  const [dragActive, setDragActive] = useState<boolean>(false)
  const inputRef = useRef<any>(null)
  const [fileError, setFileError] = useState<string | null>()
  //handle when we have new file or list of file;
  const handleFile = (files: Array<any>) => {
    if (!acceptDublicate) {
      if (listFile?.length === 0) {
        onSelectFiles([...listFile, ...files])
        onFileSelected([...listFile, ...files])
      } else {
        let isExist = false
        for (let indexNewFile = 0; indexNewFile < files.length; indexNewFile++) {
          for (let indexOldFile = 0; indexOldFile < listFile.length; indexOldFile++) {
            const newFile = files[indexNewFile]
            const oldFile = listFile[indexOldFile]
            if (oldFile['name'] === newFile['name']) {
              isExist = true
            }
          }
        }
        if (isExist) {
          setFileError('you have file with same name.')
        } else {
          setFileError(null)
          onSelectFiles([...listFile, ...files])
          onFileSelected([...listFile, ...files])
        }
      }
    } else {
      onSelectFiles([...listFile, ...files])
      onFileSelected([...listFile, ...files])
    }
  }
  const handleDeleteFile: any = (index: number) => {
    const newList = listFile.filter((_, indx) => indx !== index)
    onSelectFiles(newList)
    onFileSelected(newList)
  }

  // handle drag events
  const handleOnDrag = (e: any) => {
    e.preventDefault()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  // handle when file is dropped
  const handleOnDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files)
    }
  }

  // handle when file is selected with click
  const handleOnChange = (e: any) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files)
    }
  }

  // handle the input when the button is clicked
  const handleOnClick = () => {
    inputRef.current.click()
  }
  const listUiFile: Array<ReactNode> = []
  const getListImage = () => {
    let imageKey = 0
    // eslint-disable-next-line array-callback-return
    listFile.map(function (eImg) {
      listUiFile.push(<ImageShow handleDeleteFile={handleDeleteFile} file={eImg} key={imageKey} index={imageKey} />)
      imageKey++
    })
  }
  getListImage()
  return (
    <div style={style} className='draggable-global-box'>
      <form className='form-file-upload' onDragEnter={handleOnDrag} onSubmit={(e) => e.preventDefault()}>
        <input
          ref={inputRef}
          type='file'
          className='input-file-upload'
          multiple={multiple}
          accept={accept}
          onChange={handleOnChange}
        />
        <label
          htmlFor='input-file-upload'
          className={['box-file-upload', dragActive ? 'drag-active' : '', fileError ? 'has-error' : ''].join(' ')}
        >
          <div>
            <p>{lableText}</p>
            {hasBrowseButton && (
              <button className={'upload-button'} onClick={handleOnClick}>
                {buttonText}
              </button>
            )}
          </div>
          <p>{listFile.length > 0 ? `${listFile.length} file uploaded` : ''} </p>
          <p className={'error-text'}>{fileError ? fileError : ''}</p>
        </label>
        {dragActive && (
          <div
            className='drag-file-element'
            onDragEnter={handleOnDrag}
            onDragLeave={handleOnDrag}
            onDragOver={handleOnDrag}
            onDrop={handleOnDrop}
          ></div>
        )}
      </form>

      <div className='list-images-box'>{listUiFile.length > 0 ? listUiFile : <></>}</div>
    </div>
  )
}

export default DragDropFile
