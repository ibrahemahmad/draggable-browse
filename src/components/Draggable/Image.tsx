import React from 'react'
type Props = {
  file: any
  handleDeleteFile: (index: number) => React.MouseEventHandler<HTMLSpanElement>
  index: number
}
export const ImageShow = ({ file, handleDeleteFile, index }: Props) => {
  return (
    <div className='draggable-box-image'>
      <span className='draggable-delete-file' onClick={() => handleDeleteFile(index)}>
        ❎
      </span>
      <img
        className='each-images'
        alt='FILE....'
        width={'50px'}
        src={URL.createObjectURL(file)}
        onLoad={() => {
          URL.revokeObjectURL(file)
        }}
      />
    </div>
  )
}
