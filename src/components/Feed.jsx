import React, { useState, useEffect } from "react";
import "./feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";

function Feed() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          })
        );
      });
  }, []);
  console.log(post);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {post.map((post) => {
        const { data } = post;
        return (
          <Post
            profilePic={data.profilePic}
            message={data.message}
            timestamp={data.timestamp}
            username={data.username}
            image={data.image}
          />
        );
      })}
    </div>
  );
}

export default Feed;
