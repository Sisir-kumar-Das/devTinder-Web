import React from "react";
import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [skills, setSkills] = useState(user?.skills);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [sucess, setSucess] = useState(false);

  const handleSaveProfile = async () => {
    try {
      const payload = {
        firstName,
        lastName,
        photoUrl,
        age,
        gender,
        about,
        skills,
      };
      const res = await axios.patch(BASE_URL + "profile/edit", payload, {
        withCredentials: true,
      });

      dispatch(addUser(res.data));
      setError("");
      setSucess(true);
      const removeSucess = setTimeOut(() => {
        setSucess(false);
      }, 7000);
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="flex items-start flex-row justify-around gap-8 mx-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box flex-1 border p-6">
        <legend className="fieldset-legend p-4 font-bold">Edit Profile</legend>

        <label className="label">First Name</label>
        <input
          type="text"
          className="input w-full"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label className="label">Last Name</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label className="label">Photo Url</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Last Name"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />

        <label className="label">Age</label>
        <input
          type="text"
          className="input w-full"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label className="label">Gender</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <label className="label">About</label>
        <input
          type="text"
          className="input w-full"
          placeholder="About"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <label className="label">Skills</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        {error ? <p className="text-red-500">{error}</p> : <></>}
        {sucess ? (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your Information saved sucessfully!</span>
          </div>
        ) : (
          <></>
        )}
        <button
          className="btn  mt-4 w-full btn-primary"
          onClick={handleSaveProfile}
        >
          Save Profile
        </button>
      </fieldset>
      <div className="flex-1 my-2 pt-2">
        <UserCard
          user={{ firstName, lastName, age, skills, about, photoUrl, gender }}
        />
      </div>
    </div>
  );
};

export default EditProfile;
