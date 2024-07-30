"use client";
import { PlusIcon, UploadIcon } from "lucide-react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
function UploadImage() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
    
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className=" h-64  border-2 rounded-l flex justify-center py-5 shadow-l  text-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        
          <p>Drag 'n' drop some files here, or click to select files</p>
      
      )}
    </div>
  );
}

export default UploadImage;
