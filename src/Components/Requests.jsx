import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";
import { getRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  console.log(requests);
  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "user/requests/received", {
        withCredentials: true,
      });
      dispatch(getRequest(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <h2> No Requests Found.</h2>;

  return (
    <div className=" text-center my-10">
      <h1 className="text-bold text-4xl text-white ">Requests</h1>
      {requests?.map((request) => {
        const { firstName, lastName, photoUrl, age, gender, about, skils } =
          request.fromUserId;
        return (
          <div className="flex m-4 p-4  rounded-lg bg-base-300 w-1/2 mx-auto">
            <div>
              <img
                alt="photo"
                className="w-25 h-30 rounded-full"
                src={photoUrl}
              ></img>
            </div>
            <div className="text-left mx-4 my-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + " " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
