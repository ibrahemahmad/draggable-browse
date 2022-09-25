import React from 'react';
type Props = {
  file: any;
  handleDeleteFile: (index: number) => React.MouseEventHandler<HTMLSpanElement>;
  index: number;
};
const ImageShow = ({ file, handleDeleteFile, index }: Props) => {
  return (
    <div className="draggable-box-image">
      <span
        className="draggable-delete-file"
        onClick={() => handleDeleteFile(index)}
      >
        ❎
      </span>
      <img
        className="each-images"
        alt="FILE...."
        width={'50px'}
        src={file}
        onLoad={() => {
          file;
        }}
      />
    </div>
  );
};

export default ImageShow;
