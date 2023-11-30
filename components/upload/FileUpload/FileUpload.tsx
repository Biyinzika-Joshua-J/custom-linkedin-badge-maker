"use client";
import React, { useCallback, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";
import axios from "axios";
// styles dropzone
import { baseStyle, acceptStyle, focusedStyle, rejectStyle } from "./styles";


const FileUpload = () => {

 const imageFileHandler = (e:any) =>{
    console.log('calling image')
    console.log(e.target.files[0]);
 }

  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(acceptedFiles);
    if (acceptedFiles.length != 0){
        axios.post('/api/upload', acceptedFiles[0])
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }else{
        alert("Can only accept one file and less than 2mbs")
    }


  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,

    isFocused,
    isDragAccept,
    isDragReject,

    open,
  } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    maxFiles:1,
    noClick:true,
    noKeyboard:true,
    maxSize:2097152,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="mx-auto w-[50%]">
      <div {...getRootProps({ style })}>
        <input {...getInputProps({
        onChange: imageFileHandler,
    })} />
        {isDragActive ? (
          <p>Drop image here!</p>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-3xl text-center pb-4">
              Upload an image <br /> to add a badge.
            </p>
            <Button onClick={() => open()} className="">
              Upload Image
            </Button>
            <p className="py-2 text-center">Or drop a file</p>
            <p>Max size is 2 mbs</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
