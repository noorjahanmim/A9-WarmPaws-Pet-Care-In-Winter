import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import MyContainer from "../components/MyContainer";

const MyProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;

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
      <div className="max-w-md mx-auto mt-10 mb-20 p-6 bg-white shadow-md rounded-lg text-center">
        <Toaster position="top-center" />
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        {/* Profile Image */}
        <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400 flex items-center justify-center bg-gray-200">
          {photoURL && (
            <img
              src={photoURL}
              alt={displayName || "User"}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Display Name */}
        {!isEditing && (
          <>
            {displayName && <h2 className="text-xl font-semibold mb-2">{displayName}</h2>}
            <p className="text-gray-600 mb-6">{user?.email || "No Email"}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Update Profile
            </button>
          </>
        )}

        {/* Edit Form */}
        {isEditing && (
          <form onSubmit={handleUpdateProfile} className="space-y-4 mt-4">
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
    </MyContainer>
  );
};

export default MyProfile;
