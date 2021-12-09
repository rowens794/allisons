import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { XCircleIcon } from "@heroicons/react/solid";

export default function Dropzone() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      let addedFiles = [];
      acceptedFiles.forEach((file) => {
        addedFiles.push({
          name: file.name,
          path: file.path,
          size: file.size,
        });
      });

      let updatedFiles = [...files, ...addedFiles];

      setFiles(updatedFiles);
    },
    [files]
  );

  const removeFile = (index) => {
    let updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()} className="mx-4">
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="w-full max-w-screen-sm p-8 mx-auto my-12 text-center border-2 border-dashed rounded-md bg-primary-100 border-primary-400 text-primary-500">
            <p>Ready for Drop!</p>
          </div>
        ) : (
          <div className="w-full max-w-screen-sm p-8 mx-auto my-12 text-center border-2 border-dashed rounded-md bg-primary-100 border-primary-400 text-primary-700">
            <p>
              Click here or drag your tax documents into this box for upload
            </p>
          </div>
        )}
      </div>
      {files.map((file, i) => {
        return (
          <span
            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 m-1"
            key={i}
          >
            <svg
              className="-ml-1 mr-1.5 h-2 w-2 text-primary-400"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            {file.name}
            <span className="pl-2 cursor-pointer" onClick={() => removeFile(i)}>
              <XCircleIcon
                className="w-4 h-4 text-red-400 hover:text-red-500"
                aria-hidden="true"
              />
            </span>
          </span>
        );
      })}
    </>
  );
}
