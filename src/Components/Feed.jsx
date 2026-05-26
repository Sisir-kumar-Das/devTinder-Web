import { useEffect } from "react";
import { addFeed } from "../utils/feedSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/Constant";
import { useSelector } from "react-redux";
import axios from "axios";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed) {
      return;
    }
    try {
      const res = await axios.get(BASE_URL + "feed", { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <div className="flex justify-center align-middle my-4">
        <UserCard user={feed[0]}></UserCard>
      </div>
    )
  );
};

export default Feed;
