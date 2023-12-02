"use client"
import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'


const CROP_AREA_ASPECT = 3 / 2;

const Output = ({ croppedArea }) => {
  const scale = 100 / croppedArea.width;
  const transform = {
    x: `${-croppedArea.x * scale}%`,
    y: `${-croppedArea.y * scale}%`,
    scale,
    width: "calc(100% + 0.5px)",
    height: "auto"
  };

  const imageStyle = {
    transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
    width: transform.width,
    height: transform.height
  };

  return (
    <div
      className="output"
      style={{ paddingBottom: `${100 / CROP_AREA_ASPECT}%` }}
    >
      <img src="/assets/images/example.jpg" alt="" style={imageStyle} />
    </div>
  );
};



const ImageCropper = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedArea, setCroppedArea] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])

  return (
    <div className="">
      <Cropper
        image={"/assets/images/example.jpg"}
        crop={crop}
        zoom={zoom}
        aspect={16 / 9}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        cropSize={{width:200, height:200}}
      />
       <div className="viewer">
        {/*<div>{crop && <Output croppedArea={crop} />}</div>*/}
      </div>
    </div>
  )
}

export default ImageCropper;




