import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { getConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "user/requests/received", {
        withCredentials: true,
      });
      dispatch(getConnections(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h2> No Connections Found.</h2>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-3xl ">Connections</h1>
      {connections?.map((connection) => {
        const { firstName, lastName, photoUrl, age, gender, about, skils } =
          connection.fromUserId;
        return (
          <div className="m-4 p-4  rounded-lg bg-base-300">
            <img alt="photo" className="w-25 h-30" src={photoUrl}></img>
            <h2>{firstName + " " + lastName}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
