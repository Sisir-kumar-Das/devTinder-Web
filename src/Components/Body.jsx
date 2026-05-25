import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Foooter";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchProfile = async () => {
    if (!userData) {
      return;
    }
    try {
      const res = await axios.get(BASE_URL + "profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (e) {
      if (e.status === 401) {
        navigate("/login");
      }
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar></NavBar>
      {/* Outlet - Any children of the body will render over here. Outlet comes
      from react-routr-dom */}

      <main className="grow">
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Body;
