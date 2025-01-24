"use client";
import React, { useState } from "react";
import { db } from "../utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const FileUploadModal = () => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };


    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const newFiles = Array.from(e.dataTransfer.files);
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const removeFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };



    return (
        <div className=" w-full ">
            <main className="container mx-auto max-w-screen-lg h-full">
                <article
                    aria-label="File Upload Modal"
                    className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <header className="flex flex-col items-center justify-center pt-8 pb-6 border-b">
                        <h1 className="text-xl font-bold">Upload img Job</h1>
                        <p className="text-gray-600">Drag & drop files here or click to upload</p>
                    </header>

                    <section
                        className={`flex flex-col items-center justify-center flex-grow ${isDragging ? "bg-blue-100" : ""
                            }`}
                    >
                        <input
                            type="file"
                            id="fileUpload"
                            className="hidden"
                            multiple
                            onChange={handleFileChange}
                        />
                        <label
                            htmlFor="fileUpload"
                            className="cursor-pointer py-4 my-4 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Select Files
                        </label>
                        <p className="mt-2 text-sm text-gray-500">or drag and drop files here</p>
                    </section>

                    <ul className="p-4">
                        {files.map((file, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center mb-2 border-b pb-2"
                            >
                                <span>{file.name}</span>
                                <button
                                    onClick={() => removeFile(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <footer className="flex justify-end p-4 border-t">
                        <button type="button" onClick={() => console.log(files)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                            Upload Files
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    );
};

export default FileUploadModal;
