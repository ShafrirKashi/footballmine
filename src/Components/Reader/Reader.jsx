import React, { useState } from "react";
import './Reader.css'
import { useCSVReader } from "react-papaparse";

export default function CSVReader({csvfile}) {
  const { CSVReader } = useCSVReader();
    const [CSVresults, setCSVresults] = useState()
    csvfile(CSVresults)
    
  return (
    <CSVReader
      onUploadAccepted={(results: any) => {
        setCSVresults(results);
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }: any) => (
        <>
          <div className="reader-wrapper">
            <button className="btn-add-CSV" {...getRootProps()}>
              Upload CSV file
            </button>
            <div className="fileName">Loaded File: {acceptedFile && acceptedFile.name}</div>

          </div>
          <ProgressBar />
        </>
      )}
    </CSVReader>
  );
}


