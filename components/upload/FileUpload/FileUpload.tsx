"use client";
import { Button } from "@/components/ui/button";
import React, { useCallback, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
// styles dropzone
import { baseStyle, acceptStyle, focusedStyle, rejectStyle } from "./styles";


const FileUpload = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  
  const {
    getRootProps,
    getInputProps,
    isDragActive,

    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
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
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop image here!</p>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-3xl text-center pb-4">
              Upload an image <br /> to add a badge.
            </p>
            <Button onClick={() => {}} className="">
              Upload Image
            </Button>
            <p className="py-2 text-center">Or drop a file</p>
            <p>Max size is 3 mbs</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
