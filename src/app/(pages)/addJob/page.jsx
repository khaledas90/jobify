"use client";
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { db } from '@/app/utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
export default function Page() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    salary: '',
    location: '',
    type: '',
    img: '',
    country: '',
    time: '',
    status: '',
    description: '',
    id: '',
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const blobUrl = URL.createObjectURL(file);
      setPreviewUrl(blobUrl);
      setFormData((prev) => ({ ...prev, img: blobUrl }));
    }
  };


  useEffect(() => {
    if (window !== undefined) {
      const userID = localStorage.getItem('user')
      setFormData((prev) => ({ ...prev, id: userID }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.experience || !formData.salary || !formData.location || !formData.type || !formData.country || !formData.time || !formData.status || !formData.description) {
      toast.error('Please fill all the fields');
      setFormData((prev) => ({ ...prev, img: previewUrl }));
    } else {
      const jobRef = collection(db, 'jobs');
      addDoc(jobRef, {
        name: formData.name,
        experience: formData.experience,
        salary: formData.salary,
        location: formData.location,
        type: formData.type,
        img: formData.img,
        country: formData.country,
        time: formData.time,
        status: formData.status,
        description: formData.description,
        id: formData.id,
      })
        .then((docRef) => {
          console.log('Job added with ID:', docRef.id);
          toast.success('Job added successfully');
        })
        .catch((error) => {
          console.error('Error adding job:', error);
          toast.error('Error adding job. Please try again.');
        });
      console.log('Form Data:', formData);

    }
  };

  return (
    <>
      <div className="addJob">
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <form className="bg-white max-w-4xl mx-auto w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 h-full">
              <div className="bg-blue-50 p-14 col-span-12">
                <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content-[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                  Add Job
                </h2>
                <div className="grid gap-6 mb-6 grid-cols-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="block mb-2 ml-2 text-sm font-medium text-gray-900">
                      Name
                    </label>
                    <input
                      name="name"
                      className="py-4 bg-white rounded-lg px-6 placeholder:text-xs"
                      placeholder="Name of your job"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="experience" className="block mb-2 ml-2 text-sm font-medium text-gray-900">
                      Experience
                    </label>
                    <input
                      name="experience"
                      className="py-4 bg-white rounded-lg px-6 placeholder:text-xs"
                      type="text"
                      placeholder="Experience"
                      value={formData.experience}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="salary" className="block mb-2 ml-2 text-sm font-medium text-gray-900">
                      Salary
                    </label>
                    <input
                      name="salary"
                      className="py-4 bg-white rounded-lg px-6 placeholder:text-xs"
                      type="number"
                      placeholder="Salary"
                      value={formData.salary}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="location" className="block mb-2 ml-2 text-sm font-medium text-gray-900">
                      Location
                    </label>
                    <input
                      name="location"
                      className="py-4 bg-white rounded-lg px-6 placeholder:text-xs"
                      type="text"
                      placeholder="Location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid gap-6 mb-6 grid-cols-2">
                  <div className="flex flex-col">
                    <label htmlFor="type" className="block mb-2 ml-2 text-sm font-medium text-gray-900">
                      Type
                    </label>
                    <select
                      name="type"
                      className="py-4 bg-white rounded-lg px-6 placeholder:text-xs"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="">Select Type</option>
                      <option value="Programming">Programming</option>
                      <option value="Automotive Jobs">Automotive Jobs</option>
                      <option value="Health and Care">Health and Care</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Project Management">Project Management</option>
                      <option value="Customer Services">Customer Services</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="country" className="block mb-2 ml-2 text-sm font-medium text-gray-900">
                      Country
                    </label>
                    <input
                      name="country"
                      className="py-4 bg-white rounded-lg px-6 placeholder:text-xs"
                      type="text"
                      placeholder="Country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="time" className="block mb-2 ml-2 text-sm font-medium text-gray-900">
                      Time
                    </label>
                    <select
                      name="time"
                      className="py-4 bg-white rounded-lg px-6 placeholder:text-xs"
                      value={formData.time}
                      onChange={handleChange}
                    >
                      <option value="">Select Time</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Internship">Internship</option>
                      <option value="Contract">Contract</option>
                      <option value="Freelance">Freelance</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="status" className="block mb-2 ml-2 text-sm font-medium text-gray-900">
                      Status
                    </label>
                    <select
                      name="status"
                      className="py-4 bg-white rounded-lg px-6 placeholder:text-xs"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="">Select Status</option>
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                      <option value="Hired">Hired</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="image" className="block mb-2 ml-2 text-sm font-medium text-gray-900">Image</label>
                  <input
                    name="image"
                    className="py-4 w-full bg-white rounded-lg px-6 placeholder:text-xs"
                    type="file"
                    onChange={handleFileChange}
                  />
                  {previewUrl && (
                    <div className="mt-4">
                      <img src={previewUrl} alt="Image Preview" className="w-32 h-32 object-cover" />
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <textarea
                    name="description"
                    className="w-full rounded-2xl placeholder:text-xs px-6 py-4"
                    placeholder="Description of your job"
                    rows="8"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="rounded-full bg-blue-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all"
                  >
                    Add Job
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
