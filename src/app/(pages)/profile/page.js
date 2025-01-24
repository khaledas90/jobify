"use client";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc,  updateDoc , getDoc,  query, collection, where, getDocs } from "firebase/firestore";
import { auth, db } from "@/app/utils/firebase";
import toast from "react-hot-toast";
import CardFeatured from "@/component/CardFeatured";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [userId, setUserId] = useState(null);
  const [jops , setJobs] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchUser = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userSnap = await getDoc(userDocRef);
      if (userSnap.exists()) {
        setFormData((prev) => ({ ...prev, ...userSnap.data() }));
      } else {
        console.error("User not found in Firestore");
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

const fetchJobs = async (userId) => {
  try {
    const jobsQuery = query(collection(db, "jobs"), where("id", "==", userId));
    
    const querySnapshot = await getDocs(jobsQuery);
    // console.log(querySnapshot.docs);
    
    if (!querySnapshot.empty) {
      const jobsData = querySnapshot.docs.map(doc => doc.data());
      
      
      setJobs(jobsData);
      console.log("Fetched jobs data:", jobsData);
    } else {
      console.error("No jobs found for this user in Firestore");
    }
  } catch (error) {
    console.error("Error fetching jobs data:", error.message);
  }
};

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const userDocRef = doc(db, "users", userId);

      await updateDoc(userDocRef, {
        name: formData.name,
        email: formData.email,
        uid: userId,
        password: formData.password,
        phone: formData.phone,
        address: formData.address,
      });

   
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error.message);
      toast.error("Error updating profile. Please try again.");
    }
  };




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchUser(user.uid);
        fetchJobs(user.uid)
        console.log(user.uid);
        
      }
    });
    return () => unsubscribe();
  }, []);

  
  return (
    <section className="w-full h-screen mx-auto bg-gradient-to-r from-blue-400 to-purple-400 flex dark:bg-gray-900">
      <div className="lg:w-[80%] md:w-[90%] sm:w-[92%] xs:w-[96%] mx-auto flex items-center justify-center">
        <div className="w-full md:p-6 xs:p-4 rounded-lg md:mt-0 sm:p-8 dark:bg-gray-900">
          <div className="w-full mx-auto shadow-xl rounded-sm border border-gray-200 dark:border-gray-800">
            <h1 className="text-2xl font-semibold p-4 bg-gray-200 shadow-lg dark:bg-gray-800 dark:text-white rounded-sm">
              Profile
            </h1>

            <div className="w-full md:flex sm:gap-2 xs:gap-0">
              {/* Tabs */}
              <div className="lg:w-[20%] md:w-[30%] xs:w-full bg-gray-100 flex md:flex-col xs:flex-row xs:justify-center sm:gap-2 dark:bg-gray-700">
                {["profile", "myJobs", "jobsApply"].map((tab) => (
                  <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-sm py-2 px-4 border-b-2 border-gray-200 dark:border-gray-600 cursor-pointer ${
                      activeTab === tab
                        ? "bg-blue-500 text-white dark:bg-blue-500"
                        : "hover:bg-gray-400 hover:text-white hover:dark:bg-gray-500"
                    }`}
                  >
                    <span className="text-lg font-semibold capitalize dark:text-white">
                      {tab === "profile"
                        ? "Profile"
                        : tab === "myJobs"
                        ? "My Jobs"
                        : "Jobs Apply"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-gray-100 md:w-[88%] xs:w-[92%] px-4 py-6">
                {activeTab === "profile" && (
                  <form onSubmit={handleSave}>
                    {/* Name */}
                    <div className="w-full mb-4">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="w-full mb-4">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      />
                    </div>

                    {/* Address */}
                    <div className="w-full mb-4">
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      ></textarea>
                    </div>

                            <div className="w-full mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      />
                    </div>
                    <div className="w-full mb-4">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      />
                    </div>

                    {/* Save Button */}
                    <div className="w-full flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                )}

                {activeTab === "myJobs" && (
                  <div>
                    <h2 className="text-lg py-4 font-semibold text-gray-900 dark:text-white">
                      My Jobs
                    </h2>
                        {jops && jops.length > 0 ? jops.map((item , index) => (
                      <div key={index} className="border-b border-gray-200 dark:border-gray-700">
                          <CardFeatured
                          key={item.id}
                          id={index}
                          img={item.img}
                          name={item.name}
                          location={item.location}
                          salary={item.salary}
                          status={item.status}
                          experience={item.experience}
                          country={item.country}
                        />
                      </div>
                        )) :(<p className="text-md my-6 text-gray-700 dark:text-gray-300">
                      You have not posted any jobs yet.
                    </p>) }
                    
                  </div>
                )}

                {activeTab === "jobsApply" && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Jobs Applied
                    </h2>
                    <p className="text-md my-6 text-gray-700 dark:text-gray-300">
                      No applications found.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
