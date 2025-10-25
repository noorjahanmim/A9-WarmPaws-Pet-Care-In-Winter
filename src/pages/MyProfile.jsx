import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
// import toast, { Toaster } from "react-hot-toast";
import { toast,Toaster } from 'react-hot-toast';
import MyContainer from "../components/MyContainer";

const MyProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;


 
const displayNameDefault = user?.displayName || "No Name";
const photoURLDefault = user?.photoURL || "https://via.placeholder.com/150";
const emailDefault = user?.email || "No Email";


  

  //   if (!user) {
  //   return (
  //     <div className="text-center mt-10 text-gray-600">
  //       <h2 className="text-2xl font-semibold mb-4">No user logged in 😿</h2>
  //       <p>Please log in to view and update your profile.</p>
  //     </div>
  //   );
  // }

  // Local state for edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      toast.error("No user is logged in!");
      return;
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile!");
      console.error(error);
    }
  };

  return (
    <MyContainer>
      <div className="max-w-md mx-auto mb-20">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg text-center">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      
      <img
        src={photoURLDefault}
        alt={user?.displayName || displayNameDefault}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />

      
      <h2 className="text-xl font-semibold mb-2">
        {user?.displayName || displayNameDefault}
      </h2>
      <p className="text-gray-600 mb-6">{user?.email || emailDefault}</p>

      
      {!isEditing ? (
        <button
          onClick={() => setIsEditing(true)}
          className="px-6 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Update Profile
        </button>
      ) : (
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter new name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter new photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="flex justify-center space-x-3">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
      </div>
    </MyContainer>
  );
};

export default MyProfile;

